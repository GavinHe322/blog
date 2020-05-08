## 安装
```js
// linux
yum install git-all

// mac
brew install git
```

## config

**全局 只需设置一直 设置后无法修改**

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
**如果在单独的项目使用不用 user.name，则需输入没有 --global 即可**

```shell
git config user.name "John Doe"
git config user.email johndeo@example.com
```

## 获取帮助

```shell
git help config
man git-config
```

## clone

```shell
git clone xxxxxx

# newDirName 表示用新文件名
git clone xxxxxx newDirName

# 指定分支
git clone -b [branch-name] [url]
```

## status

```shell
# --long [Give the output in the long-format. this is the default]
# -s, --short  [Give the output in the short-format]
```

## diff

```shell
# 查看当前修改的代码
git diff

# 缓存区
git diff --cached
```

## log

```shell
# long-format
git log

# short-format
git log --stat

# 当查看大数量信息时，一行显示
git log --pretty=oneline

# 自定义显示
# https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2#pretty_format
```

## commit

```shell
# 用于撤回当前修改 commit message
git commit --amend
```

## tag

```shell
# 打标签
git tag -a v0.1 -m 'my first tag'

# 查看指定标签
git show v0.1

# 忘记打某个版本标签
git tag -a v1.2 9fceb02[commit-id]
```

## branch

**HEAD 指针关系**
```shell
# 创建分支
git branch branch-name

# 删除分支
git branch -d

# 查看分支
git branch --all

# 切换分支
git checkout branch-name

# 创建并切换
git checkout -b branch-name

# 合并分支
git merge branch-name
```

# git work-flow

**主题分支**

以功能命名的分支

ps: 请牢记，当你做这么多操作的时候，这些分支全部都存于本地。 当你新建和合并分支的时候，所有这一切都只发生在你本地的 Git 版本库中 —— 没有与服务器发生交互。

# rebase
在 Git 中整合来自不同分支的修改主要有两种方法：merge 以及 rebase

ps: 不要通过rebase对任何已经提交到公共仓库中的commit进行修改（你自己一个人玩的分支除外）

```shell
# rebase 博客
# https://www.jianshu.com/p/4a8f4af4e803

#合并多个 commit
git rebase -i HEAD~[number]
```

# 生成 ```SSH``` 公钥

```shell
# 目录
cd ~/.ssh && ls

# 生成公钥
ssh-keygen -o
```

# 搭建远程 ```git``` 仓库

**最快流程**

## 1、ps: 一般我们是以团队开发，所以创建一个 git 目录来保存所有开发人员的秘钥
```shell
# 1.在 ~/.ssh 目录
mkdir git && vim id_rsa_gavin.pub
# 2.将成员秘钥写入 authorized_keys 文件
cat id_rsa_gavin.pub >> ~/.ssh/authorized_keys
```

## 2、初始 ```git``` 仓库
```shell
cd /home

# 创建一个裸存储库
git init --bare project.git
```

## 3、在本地 ```clone``` 项目

```shell
# 如果没添加秘钥以下内容将会显示无权限
git clone root@ip_server:/home/project.git

cd project
vim README.md
git add -A
git commit -m 'first add'
git push
```

## 4、查看记录
```shell
# /home/project.git
git log
```
