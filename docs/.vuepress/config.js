
module.exports = {
  // 设置网站标题
  title: '记录',
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
  base: '/',
  meta: {
    name: '交易/学习'
  },
  // 添加 github 链接，但是这个要放在公司的内网服务器，所以为空
  repo: 'https://github.com/GavinHe322/blog.git',
  // head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/home/' },
      { text: '加密货币交易', link: '/crypto/' },
      // {
      //   text: '问题',
      //   link: '/redirect/'
      // },
      // {
      //   text: '技术沉淀',
      //   link: '/feat/'
      // },
      {
        text: 'github',
        link: 'https://github.com/GavinHe322'
      }
    ],
    // 侧边栏
    sidebar: {
      '/crypto/': [
        {
          title: '2021',
          children: [
            '/crypto/pages/2021/12'
          ]
        },
        {
          title: '2022',
          children: [
            '/crypto/pages/2022/1'
          ]
        }
      ],
      // '/redirect/': [
      //   {
      //     title: '问题',
      //     children: [
      //       '/redirect/pages/codeTransfer'
      //     ]
      //   },
      // ],
      // '/feat/': [
      //   {
      //     title: '环境搭建',
      //     children: [
      //       {
      //         title: 'jenkins',
      //         path: '/feat/pages/jenkins'
      //       },
      //       {
      //         title: 'node',
      //         path: '/feat/pages/node'
      //       },
      //       {
      //         title: 'mysql',
      //         path: '/feat/pages/mysql'
      //       }
      //     ]
      //   },
      //   {
      //     title: '实战',
      //     children: [
      //       {
      //         title: 'i18n',
      //         path: '/feat/pages/i18n'
      //       },
      //       {
      //         title: 'vuex',
      //         path: '/feat/pages/vuex'
      //       },
      //       {
      //         title: '移动端适配方案',
      //         path: '/feat/pages/viewport'
      //       },
      //       {
      //         title: '图片懒加载',
      //         path: '/feat/pages/lazy-img'
      //       },
      //       {
      //         title: 'git',
      //         path: '/feat/pages/git'
      //       }
      //     ]
      //   }
      // ]
    }
  }
}
