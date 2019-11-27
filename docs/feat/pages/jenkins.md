
> ## Jenkins

### **概念**
- Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。

- Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。

### **为什么要学**
- 公司在用
- 稍微好一点的岗位职责像```jenkins```之类 (持续集成、自动部署) 的，基本都是多多少少是会提到的。
- 传统的做法，在服务器初始一个 ```git``` 仓库，然后每次代码更新后，人工手动去拉去，次数多了也就烦了，而这些每次只需在项目开始前配置一遍 ```jenkins``` 之后所有的人工操作都不需要管了。(ps: 有问题甩锅给 ```jenkins``` 就行了[呲牙])

 ### **前置任务**
- ```centOs``` 服务器
- ```git```、 ```linux```、```shell``` 基础就行。
- ```nginx```基本配置。

### **开篇准备**
 **初始一个 ```vuecli``` 项目，访问如下**

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97572df9eaafb?w=3318&h=1108&f=png&s=156601)
**在 ```github``` 创建仓库**

![](https://user-gold-cdn.xitu.io/2019/11/23/16e975c831902e62?w=2488&h=1560&f=png&s=447256)

**配置 ```github webhook```**

```http://ip:8080/github-webhook/```

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97f623c208cc2?w=2264&h=1600&f=png&s=353667)


>## **目录**
- [jenkins 环境搭建](#环境搭建)
- [新建 jenkins 任务](#新建任务)
- [nginx访问](#nginx)

### 环境搭建

登录服务器

**安装```java```依赖**
```
yum install java
```

**使用 ```wget``` 添加```jenkins源```**
```
wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
```
**安装之后使用 ```yum``` 命令就能下载了。**
```js
yum install jenkins
```
**jenkins 修改权限 端口之类的，在该位置**
```
vim /etc/sysconfig/jenkins
```
- JENKINS_PORT -> jenkins的**启动端口**，默认```8080```
- JENKINS_USER -> jenkins 用户，修改为```root```
```
// 这里我将 JENKINS_USER 修改为 root 用户了。
JENKINS_USER="root"
```
![](https://user-gold-cdn.xitu.io/2019/11/23/16e977fff4cdd93a?w=932&h=262&f=png&s=128287)

**使用 ```chown```给 ```jenkins``` 指定所有权**
```
chown -R root:root /var/lib/jenkins
chown -R root:root /var/cache/jenkins
chown -R root:root /var/log/jenkins
```

**启动 ```jenkins```**
```
service jenkins restart
```
看到 ok 即可

![](https://user-gold-cdn.xitu.io/2019/11/23/16e9781cdc4d0d20?w=1022&h=116&f=png&s=56478)


**访问```jenkins```**
```
ip地址 + 8080
```
首次访问是这样子的(官网图).


![](https://user-gold-cdn.xitu.io/2019/11/23/16e9785b24b1c66d?w=990&h=679&f=jpeg&s=80191)

这张图红色圈起来的替换成你页面显示的
```
cat /val/jenkins_home/xxxx/xxx
```
然后将显示的复制到 输入框后，点击下一步即可。

**然后到安装插件页面**

![](https://user-gold-cdn.xitu.io/2019/11/23/16e9788ee23d7956?w=992&h=562&f=webp&s=18674)
我这里是点击的 安装推荐插件 选项。


![](https://user-gold-cdn.xitu.io/2019/11/23/16e978ab3e4fa7fb?w=1049&h=711&f=webp&s=15688)
等待即可，有点漫长 loading...
<br/>

**创建用户**

![](https://user-gold-cdn.xitu.io/2019/11/23/16e978ce5d84f03b?w=997&h=440&f=webp&s=8020)
**然后到这里 jenkins 就安装完毕了，点击开始使用。**
![](https://user-gold-cdn.xitu.io/2019/11/23/16e978d39e1efa02?w=1002&h=287&f=webp&s=6772)
<br/>

### 新建任务

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97a483911d4c4?w=2892&h=1716&f=png&s=468248)

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97a72f3a5eceb?w=2380&h=1740&f=png&s=297530)
构建触发器，就是监听 ```github``` 的 ```webhook```，如有新的 ```push``` 后 重新构建。
![](https://user-gold-cdn.xitu.io/2019/11/23/16e97f13c9584b74?w=2218&h=1274&f=png&s=224857)
![](https://user-gold-cdn.xitu.io/2019/11/23/16e97a8ef003bf27?w=2480&h=1676&f=png&s=233063)
此时保存即可


![](https://user-gold-cdn.xitu.io/2019/11/23/16e97ab1c9f352c8?w=1462&h=1328&f=png&s=273397)
点击那个 w 列的🌞(太阳)，这里是构建的描述，
如果构建失败的话，你可以根据这里的提示定位问题。

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97ae9d2cc2f2f?w=2218&h=1166&f=png&s=447670)
这里我当时蒙蔽了一下，我就在想构建后的文件去哪里了，我该怎么访问?

**构建后的存放地址**
```
cd /var/lib/jenkins/workspace
```

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97c2d25d7766e?w=666&h=198&f=png&s=74372)
**此时我们在去修改一下配置信息中的 ```shell```**
```
node -v
npm -v
npm install
npm run build
```
发现构建失败??

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97c80f626adc0?w=2060&h=1128&f=png&s=412669)
不过没关系

我们进入全局设置的插件管理

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97d00ff0d17fe?w=2416&h=664&f=png&s=138227)
下载完后，我们去全局配置管理，发现对了 一个 NodeJs 选项。

![](https://user-gold-cdn.xitu.io/2019/11/23/16e97dba6c7d3eea?w=2456&h=1556&f=png&s=613978)


![](https://user-gold-cdn.xitu.io/2019/11/23/16e97df209f5c541?w=1890&h=1514&f=png&s=252702)
啊 千辛万苦，终于看到 我们最爱的 ```dist``` 文件了，这里你的 shell 命令可以自动拓展，如移动到其他位置。
![](https://user-gold-cdn.xitu.io/2019/11/23/16e97e71a410c751?w=2360&h=1092&f=png&s=353467)

### nginx

```
cd /etc/nginx/conf.d
vim test-jenkins.conf

server {
      listen 8000; # 监听端口
      server_name _;
      location / {
        # 这里我这里指向 jenkins 构建的目录，也可以在构建时的 shell 将文件移动要其他地方。
        root  /var/lib/jenkins/workspace/test-jenkins/dist;
        try_files $uri $uri/ index.html;
      }

      error_page 500 502 503 504 /50x.html;
      location = /50x.html {
        root /usr/share/nginx/html;
      }
}
```
**然后打开就 ip:8000 就能访问了。

![](https://user-gold-cdn.xitu.io/2019/11/23/16e9804b2bf8f65f?w=2890&h=778&f=png&s=121151)


### **last**

我们在本地 重新 ```push``` ，看下这个页面会不会变。

我们刷新页面如果发现 ```404 Not Found``` 不要方，```npm run build``` 会先删除 ```dist``` 文件。

**访问如下就说明我们基本配置全部完成了，**

![](https://user-gold-cdn.xitu.io/2019/11/23/16e980b30c15e52b?w=1972&h=426&f=png&s=83982)



