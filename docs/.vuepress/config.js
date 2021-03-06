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
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'Docker', link: '/docker/' },
      { text: 'Nginx', link: '/nginx/' },
    ],
    sidebar: {
      '/javascript/': [
        '',
        'basic-concept',
        'variate'
      ],
      '/docker/': [
        '',
        'options',
        'command',
        'data',
        'deploy',
        'dockerfile',
        'docker_compose',
        'private_store',
        'compare'
      ],
      '/nginx/': [
        ''
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
