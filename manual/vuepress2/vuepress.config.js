// https://v2.vuepress.vuejs.org/reference/default-theme/config.html

// import {searchPlugin} from '@vuepress/plugin-search'
import {defaultTheme} from '@vuepress/theme-default'
import html5embed from 'markdown-it-html5-embed'

export default {
    lang: 'en-US',
    description: 'Nomad Sculpt Manual',
    base: '/manual/',

    head:
        [
            [ 'link', {rel : 'icon', href : '/favicon.ico'} ],
            [ 'meta', {name : 'theme-color', content : '#ebbe6c'} ],
            [ 'meta', {name : 'apple-mobile-web-app-capable', content : 'yes'} ],
            [ 'meta', {name : 'apple-mobile-web-app-status-bar-style', content : 'black'} ],
        ],

    theme: defaultTheme({
        colorMode : 'dark',
        colorModeSwitch : false,

        logo : '/logo_black.png',
        logoDark : '/logo_white.png',

        // repo : 'https://github.com/stephomi/nomadsculpt.com',
        lastUpdated : false,
        contributors : false,
        editLink : false,

        navbar : [
            {text : 'Manual', link : '/'},
            {text : 'Home', link : 'https://nomadsculpt.com'},
            {text : 'Forum', link : 'https://forum.nomadsculpt.com'},
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
            'painting',
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
    }),

    extendsMarkdown:
        (md) => {
            md.use(html5embed, {
                html5embed : {
                    renderFn : function(prop, att) {
                        var tag = '<video controls preload="metadata" poster="$0">';
                        tag += '<source src="$1" type="video/mp4">';
                        tag += '</video>\n';
                        tag = tag.replace('$0', prop.url.replace('.mp4', '.jpg').substr(1));
                        tag = tag.replace('$1', prop.url.substr(1));
                        return tag;
                    }
                }
            });
        },

    // plugins : [
    //     searchPlugin({
    //         maxSuggestions : 10,
    //         locales : {
    //             '/' : {
    //                 placeholder : 'Search...',
    //             }
    //         },
    //     }),
    // ],
}
