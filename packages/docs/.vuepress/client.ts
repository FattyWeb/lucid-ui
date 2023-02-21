import { defineClientConfig } from '@vuepress/client'
import { reactive } from "vue";
import Lucid from 'lucid'
import 'lucid/dist/lucid.css'
import 'boxicons/css/boxicons.min.css'

export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.use(Lucid);
    app.config.globalProperties.$user = reactive({
      user: null
    })
    app.config.globalProperties.$localeConfig = reactive({
      user: null
    })
  },
})
