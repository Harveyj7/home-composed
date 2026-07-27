# 1. Build for production with your repo base-href
ng build --configuration=production --base-href=/home-composed/

# 2. Switch to gh-pages branch (or create it if it doesn't exist)
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# 3. Clean existing files on gh-pages
git rm -rf .

# 4. Copy the compiled files (use browser/ folder if on Angular 17+)
# Check if dist/home-composed/browser exists; if so, copy from there:
cp -r dist/home-composed/browser/* . 2>/dev/null || cp -r dist/home-composed/* .

# 5. Prevent GitHub Pages from ignoring Angular files (like _angular)
touch .nojekyll

# 6. Commit and push
git add .
git commit -m "Deploy Angular app to GitHub Pages"
git push origin gh-pages --force
