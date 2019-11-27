#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
echo 1
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config -–global user.name  'GavinHe322'
git config –-global user.emai '1521550385@qq.com'
echo 2
git add -A
echo 3
git commit -m 'deploy'
echo 4
# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<gavinhe322>/<gavinhe322>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目

# https://gavinhe322.github.io/blog/
#04409dfc91c3548d269efe3b473489b7b4396411
git push -f https://github.com/GavinHe322/blog.git master:gh-pages

cd -
