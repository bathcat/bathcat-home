Remove-Item -recurse -Force ./dist -ErrorAction ignore
npm run build

Set-Location dist

# By default, gihub pages ignores folders prefixed with underscores.
Write-Output '' > .nojekyll

# This is so the custom domain setting won't get clobbered
'bathcat.net' | Out-File -FilePath CNAME -Encoding ascii -NoNewline

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bathcat/bathcat.github.io +master

Set-Location ..
