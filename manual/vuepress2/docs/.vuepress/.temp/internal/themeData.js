export const themeData = {
  "darkMode": true,
  "logo": "/logo_black.png",
  "logoDark": "/logo_white.png",
  "lastUpdated": true,
  "contributors": false,
  "editLink": false,
  "navbar": [
    {
      "text": "Manual",
      "link": "/"
    },
    {
      "text": "Home",
      "link": "https://nomadsculpt.com"
    },
    {
      "text": "Forum",
      "link": "https://forum.nomadsculpt.com"
    }
  ],
  "sidebar": [
    {
      "text": "Overview",
      "link": "/",
      "children": []
    },
    "camera",
    "tools",
    "topology",
    "stroke",
    "paint",
    "files",
    "background",
    "lighting",
    "postprocess",
    "material",
    "scene",
    "layers",
    "pressure",
    "symmetry",
    "settings",
    "interface",
    "history",
    "faq"
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
