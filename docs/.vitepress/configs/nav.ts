import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  {
    text: '前端物语',
    items: [
      { text: 'HTML/CSS 基础知识', link: '/front/html/' },
      { text: 'ES6 常用知识', link: '/front/es6/' },
    ],
    activeMatch: '^/front'
  },
  {
    text: '工作踩坑记录',
    items: [
      { text: 'Git', link: '/work/git/' },
      { text: 'Vue', link: '/work/vue/' },
    ],
    activeMatch: '^/work'
  },
  {
    text: '四木',
    items: [
      { text: '四木', link: '/about/simu' },
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/weixin_45271300'
      },
    ]
  }
]
