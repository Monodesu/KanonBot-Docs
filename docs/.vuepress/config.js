module.exports = {
    title: 'KanonBot',
    description: 'KanonBot中文使用文档',
    lang: 'zh-CN',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '上次编辑',
        nav: [
            { text: '主页', link: '/' },
            { text: '许可协议', link: '/Eula/' },
            { text: '官网', link: 'https://www.kanonbot.com' },
        ],
        sidebar: {
            '/Eula/': [
                '/Eula/'
            ],
            '/Guide/': [
                '/Guide/',
                '/Guide/KanonBot/',
                '/Guide/KanonBot/Bind',
                '/Guide/KanonBot/Query',
                '/Guide/KanonBot/Custom',
                '/Guide/KanonBot/Other',
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: true
    },
    plugins: {
        '@vuepress/back-to-top':true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新啦！",
                buttonText: "立刻刷新"
            }
        },
        '@renovamen/vuepress-plugin-baidu-tongji': {
            'ba': 'd30df5ef4f62379ef19a44566bc7df2a'
        }
    }
}
