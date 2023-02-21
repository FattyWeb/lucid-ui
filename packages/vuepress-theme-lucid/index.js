const path = require('path');
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links');
const { containerPlugin } = require('@vuepress/plugin-container');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');
const { palettePlugin } = require('@vuepress/plugin-palette');
const { prismjsPlugin } = require('@vuepress/plugin-prismjs') // 语法高亮


module.exports = (options) => ({
  clientConfigFile: path.resolve(
    __dirname,
    './client.js'
  ),
  // alias () {
  //   const { themeConfig, siteConfig } = ctx
  //   // resolve algolia
  //   const isAlgoliaSearch = (
  //       themeConfig.algolia ||
  //       Object.keys(siteConfig.locales && themeConfig.locales || {})
  //         .some(base => themeConfig.locales[base].algolia)
  //     );
  //   return {
  //     '@AlgoliaSearchBox': isAlgoliaSearch
  //       ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
  //       : path.resolve(__dirname, 'noopModule.js')
  //   }
  // },

  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './clientAppEnhance.js'
  ),
  name: 'vuepress-theme-lucid',
  // extend: '@vuepress/theme-default',
  plugins: [
    prismjsPlugin({
      // 配置项
    }),
    palettePlugin({
      preset: 'stylus',
      userPaletteFile: 'styles/palette.styl'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './global-components'),
    }),
    activeHeaderLinksPlugin({
      headerLinkSelector: '.sidebar-link',
      offset: 5
    }),
    containerPlugin({
      type: 'tip',
      // defaultTitle: '',
    }),
    containerPlugin({
      type: 'warning',
      // defaultTitle: '',
    }),
    containerPlugin({
      type: 'danger',
      // defaultTitle: '',
    }),
    // ['container', {
    //   type: 'tip',
    //   defaultTitle: '',
    // }],
    // ['container', {
    //   type: 'warning',
    //   defaultTitle: '',
    // }],
    // ['container', {
    //   type: 'danger',
    //   defaultTitle: '',
    // }]
  ],
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/404.vue'),
    sidebar: path.resolve(__dirname, 'layouts/sidebar.vue'),
  },
})

