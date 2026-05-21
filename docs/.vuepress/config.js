
module.exports = {
  // 设置网站标题
  title: '记录',
  // 设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
  base: '/blog/',
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
      {
        text: '问题',
        link: '/redirect/'
      },
      {
        text: '技术沉淀',
        link: '/feat/'
      },
      {
        text: 'github',
        link: 'https://github.com/GavinHe322'
      }
    ],
    // 侧边栏
    sidebar: {
      '/crypto/': [
        '/crypto/pages/2021/12',
        '/crypto/pages/2022/1'
      ],
      '/redirect/': [
        '/redirect/pages/codeTransfer'
      ],
      '/feat/': [
        '/feat/pages/jenkins',
        '/feat/pages/node',
        '/feat/pages/mysql',
        '/feat/pages/i18n',
        '/feat/pages/vuex',
        '/feat/pages/viewport',
        '/feat/pages/lazy-img',
        '/feat/pages/git',
        '/feat/pages/Array',
        '/feat/pages/marmot-ui'
      ]
    }
  }
}
