import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/front/': [
        {
            text: 'HTML / CSS',
            collapsed: false,
            items: [
                { text: 'HTML 知识点', link: '/front/html/' },
                { text: 'CSS 知识点', link: '/front/css/' }
            ]
        },
        {
            text: 'javascript 常用知识点',
            link: '/front/javascript/'
        },
        {
            text: 'ES6 常用知识点',
            link: '/front/es6/'
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
