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
            { text: '许可协议', link: '/Eula/' },
            { text: '更新日志', link: '/ChangeLog/' },
            { text: '官网', link: 'https://www.kanonbot.com' },
        ],
        sidebar: {
            '/EULA/': [
                '/EULA/'
            ],
            '/Guide/': [
                '/Guide/',
                '/Guide/KanonBot/',
                '/Guide/KanonBot/Bind',
                '/Guide/KanonBot/Query',
                '/Guide/KanonBot/Custom',
                '/Guide/KanonBot/Other',
            ],
            '/ChangeLog/': [
                '/ChangeLog/',
                '/ChangeLog/BotChangeLog/',
                '/ChangeLog/ChangeLog/',
            ]
        }
    }
}