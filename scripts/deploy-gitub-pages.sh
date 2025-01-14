#!/usr/bin/env sh
set -e

rm -rf dist && npm run build

cd dist

# By default, gihub pages ignores folders prefixed with underscores.
touch .nojekyll

# This is so the custom domain setting won't get clobbered
echo 'bathcat.net' >> CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/bathcat/bathcat.github.io +master

cd -
