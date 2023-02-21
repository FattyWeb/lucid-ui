import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.config.globalProperties.$vsTheme = {
      mobileActive: false,
      openCode: false,
      themeDarken: false,
      sidebarCollapseOpen: true,
      // sidebarCollapseOpen: true,
    }
    app.config.globalProperties.$codesandbox = {
      url: null
    }
  },
})
