import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-23c09452","/background.html",{"title":"Background"},["/background","/background.md"]],
  ["v-aa8f578a","/camera.html",{"title":"Camera"},["/camera","/camera.md"]],
  ["v-092a1d7c","/faq.html",{"title":"FAQ"},["/faq","/faq.md"]],
  ["v-6e35c87b","/files.html",{"title":"Files"},["/files","/files.md"]],
  ["v-a7d34384","/history.html",{"title":"History"},["/history","/history.md"]],
  ["v-8daa1a0e","/",{"title":"Overview"},["/index.html","/index.md"]],
  ["v-202c0b0e","/interface.html",{"title":"Interface"},["/interface","/interface.md"]],
  ["v-0ea1e784","/layers.html",{"title":"Layers"},["/layers","/layers.md"]],
  ["v-792c6ef4","/lighting.html",{"title":"Lighting"},["/lighting","/lighting.md"]],
  ["v-0d3165b9","/material.html",{"title":"Material"},["/material","/material.md"]],
  ["v-05cbba18","/paint.html",{"title":"Vertex Painting"},["/paint","/paint.md"]],
  ["v-5b654d3a","/postprocess.html",{"title":"Post process"},["/postprocess","/postprocess.md"]],
  ["v-2f62914a","/pressure.html",{"title":"Pressure"},["/pressure","/pressure.md"]],
  ["v-4961ef86","/scene.html",{"title":"Scene"},["/scene","/scene.md"]],
  ["v-2dad0c3d","/settings.html",{"title":"Settings"},["/settings","/settings.md"]],
  ["v-b9bed5f0","/stroke.html",{"title":"Stroke"},["/stroke","/stroke.md"]],
  ["v-75a1ed44","/symmetry.html",{"title":"Symmetry"},["/symmetry","/symmetry.md"]],
  ["v-247890d2","/tools.html",{"title":"Tools"},["/tools","/tools.md"]],
  ["v-7f0a1571","/topology.html",{"title":"Topology"},["/topology","/topology.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
