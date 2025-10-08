rmdir /s /q node_modules
del package-lock.json
npm install
git add .
git commit -m "commit"
git push origin main
pause