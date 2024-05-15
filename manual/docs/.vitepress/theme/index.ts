// https://vitepress.dev/guide/custom-theme
import './style.css'

import mediumZoom from 'medium-zoom';
import { useRoute } from 'vitepress';
import Theme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'

export default {
    extends: Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app, router, siteData }) {
        // ...
    },

    // https://github.com/francoischalifour/medium-zoom
    setup() {
        const route = useRoute();
        const initZoom = () => {
            var imagesDev = document.querySelectorAll('img[src*=images]');
            var imagesBuild = document.querySelectorAll('img[src*=assets]');
            var images = imagesBuild.length ? imagesBuild : imagesDev;
            new mediumZoom(images, {
                background: 'var(--vp-c-bg)',
                scrollOffset: 10,
            });
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    }
}
