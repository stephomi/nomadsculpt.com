import { defineConfig } from 'vitepress';
import markdownHtml5 from 'markdown-it-html5-embed';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Nomad',
    description: 'Nomad Sculpt Manual',
    cleanUrls: true,
    appearance: 'dark',
    base : '/manual/',

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        siteTitle: '',
        logo: {
            light: '/logo_black.png',
            dark: '/logo_white.png',
        },

        nav: [
            { text: 'Home', link: 'https://nomadsculpt.com' },
            { text: 'Forum', link: 'https://forum.nomadsculpt.com' }
        ],

        outline: { level: 'deep' },
        // aside : false,

        sidebar: [{
            items: [
                { text: 'Overview', link: '/' },
                { text: 'Camera', link: '/camera' },
                { text: 'Tools', link: '/tools' },
                { text: 'Topology', link: '/topology' },
                { text: 'Stroke', link: '/stroke' },
                { text: 'Painting', link: '/painting' },
                { text: 'Files', link: '/files' },
                { text: 'Background', link: '/background' },
                { text: 'Lighting', link: '/lighting' },
                { text: 'Postprocess', link: '/postprocess' },
                { text: 'Material', link: '/material' },
                { text: 'Scene', link: '/scene' },
                { text: 'Layers', link: '/layers' },
                { text: 'Pressure', link: '/pressure' },
                { text: 'Symmetry', link: '/symmetry' },
                { text: 'Settings', link: '/settings' },
                { text: 'Interface', link: '/interface' },
                { text: 'History', link: '/history' },
                { text: 'Faq', link: '/faq' },
            ]
        }],

        search: {
            provider: 'local',
            // https://lucaong.github.io/minisearch/classes/_minisearch_.minisearch.html
            options: {
                miniSearch: {
                    options: {},
                    searchOptions: {
                        // fuzzy : 0.2,
                        // prefix : true,
                        // boost : { title : 4, text : 2, titles : 1 },
                    },
                },
            },
        },

        socialLinks: [
            { icon: 'x', link: 'https://x.com/nomadsculpt' },
            { icon: 'github', link: 'https://github.com/stephomi/nomadsculpt.com' },
            { icon: 'instagram', link: 'https://instagram.com/nomadsculpt' },
            { icon: 'facebook', link: 'https://facebook.com/nomadsculpt' },
            { icon: 'discord', link: 'https://discord.com/invite/8h7BwpRz29' },
        ]
    },

    markdown: {
        config: md => {
            md.use(markdownHtml5, {
                html5embed: {
                    renderFn: function (prop, att) {
                        var tag = '<video controls preload="metadata" poster="$0">';
                        tag += '<source src="$1" type="video/mp4">';
                        tag += '</video>\n';
                        return tag.replace('$0', prop.url.replace('.mp4', '.jpg')).replace('$1', prop.url);
                    }
                },
            })
        }
    },

    head: [
        [ 'link', { rel : 'icon', href : '/favicon.ico' } ],
        [ 'meta', { name : 'theme-color', content : '#ebbe6c' } ],
        [ 'meta', { name : 'apple-mobile-web-app-capable', content : 'yes' } ],
        [ 'meta', { name : 'apple-mobile-web-app-status-bar-style', content : 'black' } ],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-DSF8ZS1RCC' }
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DSF8ZS1RCC');`
        ]
    ],
})
