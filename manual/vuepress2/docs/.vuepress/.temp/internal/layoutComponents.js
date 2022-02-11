import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/steph/Documents/nomadsculpt.com/manual/vuepress2/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/steph/Documents/nomadsculpt.com/manual/vuepress2/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
