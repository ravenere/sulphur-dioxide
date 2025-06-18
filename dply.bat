git add *
git commit -m "autocommit"

git push

python gh-deploy --clean --force --remote-name https://github.com/ravenere/sulphur-dioxide.git
pause