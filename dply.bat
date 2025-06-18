git add *
git commit -m "autocommit"

git push

mkdocs.exe gh-deploy --clean --force --remote-name https://github.com/ravenere/sulphur-dioxide.git
pause