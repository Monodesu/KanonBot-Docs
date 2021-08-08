module.exports = {
    lang: 'zh-CN',
    locales: {
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/en/': {
            lang: 'en-US',
            title: 'KanonBot',
            description: 'KanonBot documents'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'KanonBot',
            description: 'KanonBot中文使用文档'
        }
    },
    themeConfig: {
        logo: '',
        smoothScroll: true,
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: true,
        nav: [
            { text: '主页', link: '/' },
            { text: 'EULA', link: '/EULA/' },
            { text: '官网', link: 'https://www.kanonbot.com' },
        ],
        sidebar: {
            '/EULA/': [
                '/EULA/'
            ],
            '/Guide/': [
                '/Guide/',
                '/Guide/QuickStart/'
            ]
        }
    }
}