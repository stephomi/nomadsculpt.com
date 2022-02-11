export const data = {
  "key": "v-23c09452",
  "path": "/background.html",
  "title": "Background",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Reference Image",
      "slug": "reference-image",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1644605752000
  },
  "filePathRelative": "background.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
