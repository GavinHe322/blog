# node 常用

## nvm node-version-management

### 安装
[nvm git地址](https://github.com/nvm-sh/nvm)

### 下载
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
```

### 常用命令
```js
// 查看所有版本
nvm ls-remote

// 安装指定版本
nvm install v10.xxx

// 使用指定版本
nvm use <version>

// 查看当前版本
nvm ls
```

## linux
```js
// 到官网复制到的连接地址
// 使用 wget
wget https://nodejs.org/dist/v12.13.1/node-v12.13.1-linux-x64.tar.xz

tar xvf xxx

ln -s /home/download/node-v12.13.1-linux-x64/bin/node /usr/bin/node
ln -s /home/download/node-v12.13.1-linux-x64/bin/npm /usr/bin/npm

//  包管理 也是使用 nvm
vim ~/.bashrcs
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
// source ~/.bashrc 
```