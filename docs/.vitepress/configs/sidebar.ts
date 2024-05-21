import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/front/': [
        {
            text: 'ES6 常用知识点',
            link: '/front/es6/'
        },
        {
            text: 'HTML / CSS',
            collapsed: false,
            items: [
                { text: 'HTML 理论知识点', link: '/front/html/' },
                { text: 'CSS 理论知识点', link: '/front/css/' }
            ]
        },
    ],
    '/work/': [
        {
            text: 'Git使用',
            link: '/work/git/'
        },
        {
            text: 'Vue',
            link: '/work/vue/'
        },
    ],
}
