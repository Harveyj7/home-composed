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

cleanup() {
  if [[ -n "${ORIGINAL_BRANCH}" && "$(git branch --show-current)" != "${ORIGINAL_BRANCH}" ]]; then
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

git checkout "${DEPLOY_BRANCH}"

git rm -rf . >/dev/null
cp -R "${BUILD_STAGING}/." .
rm -rf "${BUILD_STAGING}"

git add .

if git diff --cached --quiet; then
  echo "No deployment changes to commit."
else
  git commit -m "${COMMIT_MESSAGE}"
  git push origin "${DEPLOY_BRANCH}"
fi
