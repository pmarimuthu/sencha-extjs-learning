#!/usr/bin/env sh

set -e

npm run build

cd docs/.vitepress/dist

echo 'learn.kanaksan.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:pmarimuthu/sencha-extjs-learning.git main:gh-pages

cd -