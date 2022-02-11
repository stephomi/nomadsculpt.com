// https://v1.vuepress.vuejs.org/config
module.exports = {
    title : '',
    description : 'Nomad Sculpt Manual',
    base : '/manual/',

    head : [
        [ 'link', { rel : 'icon', href : '/favicon.ico' } ],
        [ 'meta', { name : 'theme-color', content : '#ebbe6c' } ],
        [ 'meta', { name : 'apple-mobile-web-app-capable', content : 'yes' } ],
        [ 'meta', { name : 'apple-mobile-web-app-status-bar-style', content : 'black' } ],
    ],

    theme : 'default-prefers-color-scheme',

    themeConfig : {
        overrideTheme: 'dark',
        // logo
        logo : '/logo_white.png',

        // search
        searchMaxSuggestions : 10,
        searchPlaceholder : 'Search...',

        // repo : 'https://github.com/stephomi/nomadsculpt.com',
        lastUpdated : false,

        nav : [
            {
                text : 'Manual',
                link : '/',
            },
            { text : 'Home', link : 'https://nomadsculpt.com' },
            { text : 'Forum', link : 'https://forum.nomadsculpt.com' }
        ],

        sidebar : [ {
            collapsable : false,
            children : [
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
        } ],
    },

    markdown : {
        extendMarkdown : md => {
            md.use(require('markdown-it-html5-embed'), {
                html5embed : {
                    renderFn : function(prop, att) {
                        var tag = '<video controls preload="metadata" poster="$0">';
                        tag += '<source src="$1" type="video/mp4">';
                        tag += '</video>\n';
                        return tag.replace('$0', prop.url.replace('.mp4', '.jpg')).replace('$1', prop.url);
                    }
                },
            })
        }
    },

    // https://v1.vuepress.vuejs.org/zh/plugin/
    plugins : [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        'fulltext-search',
        'clean-urls',
        [ '@vuepress/google-analytics', { 'ga' : 'UA-42431392-2' } ],
    ]
}
