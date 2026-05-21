# Blog

个人学习记录博客，基于 VuePress 构建。

## 技术栈

- **VuePress** ^0.14.11 - 静态站点生成器
- **Vue** ^2.6.10 - 前端框架
- **Element UI** 2.12.0 - UI 组件库

## 功能特性

- 📝 **加密货币交易记录** - 记录加密货币交易学习心得
- 🛠️ **技术沉淀** - 技术文章和问题解决记录
- 📱 **响应式设计** - 支持多种设备访问

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 部署到 GitHub Pages
npm run d
```

## 项目结构

```
blog/
├── docs/                    # VuePress 文档目录
│   ├── .vuepress/           # VuePress 配置
│   │   ├── components/      # 自定义组件
│   │   └── config.js        # 站点配置
│   ├── common/utils/        # 工具函数
│   ├── crypto/              # 加密货币交易内容
│   ├── feat/                # 技术沉淀
│   ├── home/                # 首页
│   └── redirect/            # 问题记录
├── deploy.sh                # 部署脚本
└── package.json             # 项目配置
```

## 在线访问

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-green.svg)](https://gavinhe322.github.io/blog/)

[https://gavinhe322.github.io/blog/](https://gavinhe322.github.io/blog/)
