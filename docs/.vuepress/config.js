module.exports = {
  // 设置网站标题
  title: '笔记',
  // 设置输出目录
  // dest: './dist',
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
  base: '/blog/',
  // 添加 github 链接，但是这个要放在公司的内网服务器，所以为空
  // repo: '' 
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    // 导航栏
    nav: [
      {
        text: '首页',
        link: '/home/'
      },
      {
        text: '问题',
        link: '/problem/'
      },
      {
        text: '技术沉淀',
        link: '/feat/'
      },
      {
        text: 'github',
        link: 'https://github.com/GavinHe322'
      },
    ],
    // 侧边栏
    sidebar: {
      '/problem/': [
        {
          title: '问题',
          children: [
            '/problem/pages/代码迁移'
          ]
        },
      ],
      '/feat/': [
        {
          title: '环境搭建',
          children: [
            {
              title: 'jenkins',
              path: '/feat/pages/jenkins'
            },
          ]
        },
        {
          title: '实战',
          children: [
            {
              title: 'i18n',
              path: '/feat/pages/i18n'
            },
          ]
        }
      ]
    },

  },
}
