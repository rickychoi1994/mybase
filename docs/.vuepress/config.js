module.exports = {
  base: '/mybase/',
  title: '前端学习',
  description: '个人前端知识的学习、积累和总结',
  port: 5757,
  dest: '.vuepress/mybase',
  themeConfig: {
    repo: 'rickychoi1994/mybase',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Docker', link: '/docker/' }
    ],
    sidebar: {
      '/docker/': [
        '',
        'options',
        'command',
        'data',
        'deploy',
        'dockerfile'
      ]
    },
    sidebarDepth: 2,
    lastUpdated: '最近一次更新时间'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link'
    }],
    '@vuepress/nprogress'
  ]
}
