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
git diff -cached
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