// https://v2.vuepress.vuejs.org/reference/default-theme/config.html

module.exports = {
    lang : 'en-US',
    description : 'Nomad Sculpt Manual',
    // base: '/manual/',

    themeConfig : {
        darkMode : true,
        logo : '/logo_black.png',
        logoDark : '/logo_white.png',

        // repo : 'https://github.com/stephomi/nomadsculpt.com',
        lastUpdated : true,
        contributors : false,
        editLink : false,

        navbar : [
            { text : 'Manual', link : '/' },
            { text : 'Home', link : 'https://nomadsculpt.com' },
            { text : 'Forum', link : 'https://forum.nomadsculpt.com' },
        ],

        sidebar : [
            {
                text : 'Overview',
                link : '/',
                children : [],
            },
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
        ],
    },

    extendsMarkdown : (md) => {
        md.use(require('markdown-it-html5-embed'), {
            html5embed : {
                renderFn : function(prop, att) {
                    var tag = '<video controls preload="metadata" poster="$0">';
                    tag += '<source src="$1" type="video/mp4">';
                    tag += '</video>\n';
                    tag = tag.replace('$0', prop.url.replace('.mp4', '.jpg').substr(1));
                    tag = tag.replace('$1', prop.url.substr(1));
                    return tag;
                }
            },
        })
    },

    plugins : [
        [ require('vuepress2-plugin-full-text-search').default ],
    ]
};