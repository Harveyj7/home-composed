#!/usr/bin/env bash
set -euo pipefail

SOURCE_BRANCH="main"
DEPLOY_BRANCH="gh-pages"
PROJECT_NAME="home-composed"
# 1. CHANGE THIS TO "/" FOR CUSTOM DOMAIN
BASE_HREF="/"
CUSTOM_DOMAIN="home26.org" # Set your domain here
BUILD_DIR="dist/${PROJECT_NAME}/browser"
COMMIT_MESSAGE="Deploy Angular app to GitHub Pages"
ORIGINAL_BRANCH="$(git branch --show-current)"
BUILD_STAGING=""
DEPLOY_WORKTREE=""

cleanup() {
  if [[ -n "${DEPLOY_WORKTREE}" && -d "${DEPLOY_WORKTREE}" ]]; then
    git worktree remove --force "${DEPLOY_WORKTREE}" >/dev/null 2>&1 || true
  fi
  if [[ -n "${BUILD_STAGING}" && -d "${BUILD_STAGING}" ]]; then
    rm -rf "${BUILD_STAGING}"
  fi
  if [[ -n "${ORIGINAL_BRANCH}" && "$(git branch --show-current 2>/dev/null)" != "${ORIGINAL_BRANCH}" ]]; then
    git checkout "${ORIGINAL_BRANCH}" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

require_clean_worktree() {
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "Working tree is not clean. Commit, stash, or remove local changes before deploying." >&2
    git status --short >&2
    exit 1
  fi
}

require_clean_worktree

git checkout "${SOURCE_BRANCH}"

if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

# Build Angular app with root base href
npx ng build --configuration=production --base-href="${BASE_HREF}"

if [[ ! -d "${BUILD_DIR}" ]]; then
  echo "Build output not found: ${BUILD_DIR}" >&2
  exit 1
fi

# Copy index.html to 404.html for Angular Client-Side Routing
cp "${BUILD_DIR}/index.html" "${BUILD_DIR}/404.html"

# 2. CREATE CNAME FILE IN BUILD OUTPUT TO PREVENT WIPEOUT
echo "${CUSTOM_DOMAIN}" > "${BUILD_DIR}/CNAME"

BUILD_STAGING="$(mktemp -d)"
cp -R "${BUILD_DIR}/." "${BUILD_STAGING}/"

git fetch origin "${DEPLOY_BRANCH}"

DEPLOY_WORKTREE="$(mktemp -d)"
rm -rf "${DEPLOY_WORKTREE}"
git worktree add "${DEPLOY_WORKTREE}" "${DEPLOY_BRANCH}"
git -C "${DEPLOY_WORKTREE}" pull --rebase origin "${DEPLOY_BRANCH}"

git -C "${DEPLOY_WORKTREE}" rm -rf . >/dev/null
cp -R "${BUILD_STAGING}/." "${DEPLOY_WORKTREE}/"

git -C "${DEPLOY_WORKTREE}" add .

if git -C "${DEPLOY_WORKTREE}" diff --cached --quiet; then
  echo "No deployment changes to commit."
else
  git -C "${DEPLOY_WORKTREE}" commit -m "${COMMIT_MESSAGE}"
  git -C "${DEPLOY_WORKTREE}" push origin "${DEPLOY_BRANCH}"
fi
