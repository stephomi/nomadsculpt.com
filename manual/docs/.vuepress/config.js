const { description } = require('../../package')

// https://v1.vuepress.vuejs.org/config
module.exports = {
    title: 'Nomad Sculpt',

    base: '/manual/',

    description: description,

    head: [
        ['meta', { name: 'theme-color', content: '#ebbe6c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    theme: 'default-prefers-color-scheme',

    // https://v1.vuepress.vuejs.org/theme/default-theme-config.html
    themeConfig: {
        searchMaxSuggestions: 10,
        searchPlaceholder: 'Search...',

        defaultTheme: 'dark',
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,

        nav: [{
            text: 'Manual',
            link: '/',
        }, {
            text: 'Home',
            link: 'https://nomadsculpt.com'
        }, {
            text: 'Forum',
            link: 'https://forum.nomadsculpt.com'
        }],

        sidebar: {
            '/': [{
                title: 'Manual',
                collapsable: false,
                children: [
                    '',
                    'camera',
                    'tools',
                    'topology',
                    'stroke',
                    'paint',
                    'files',
                    'background',
                    'lighting',
                    'postprocess',
                    'material',
                    'scene',
                    'layers',
                    'pressure',
                    'symmetry',
                    'settings',
                    'interface',
                    'history',
                    'faq',
                ]
            }],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@markspec/vuepress-plugin-footnote',
        'fulltext-search',
        ['@vuepress/google-analytics', { 'ga': 'UA-42431392-2' }]
    ]
}