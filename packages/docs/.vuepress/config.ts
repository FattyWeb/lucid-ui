declare const require: any
declare const module: any
declare const __dirname: string

const path = require('path');
const  lucidTheme  = require('../../vuepress-theme-lucid/');
const { themeDataPlugin } = require('@vuepress/plugin-theme-data')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');
module.exports = {
  locales: {
    '/': {
      // 'Chinese',
      lang: 'zh-cn',
      text: '中文',
    },
    '/en/': {
      // '英文',
      lang: 'en-us',
      text: 'English (not completed yet)',
    }
  },
  plugins: [
    themeDataPlugin({
      themeData:{
        docsDir: 'packages/docs',
        locales: {
          '/': {
            ...getNavbar(),
            ...getSidebar()
          },
          '/en/': {
            ...getNavbar('/en/'),
            ...getSidebar('/en/')
          }
        },

        repo: 'git@github.com:lusaxweb/vuesax-next.git',
        lastUpdated: true,
        linkPrevVersion: 'https://github.com/FattyWeb/lucid-ui/',
        searchPlaceholder: '搜索 Lucid',
      }
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  base: '/',
  title: '基于Vue3的ui组件库 - Lucid',
  theme: lucidTheme({
    // repo: 'lucid',
    docsDir: 'packages/docs',
    locales: {
      '/': {
        ...getNavbar(),
        ...getSidebar()
      },
      '/en/': {
        ...getNavbar('/en/'),
        ...getSidebar('/en/')
      }
    },

    repo: 'git@github.com:lusaxweb/vuesax-next.git',
    lastUpdated: true,
    linkPrevVersion: 'https://github.com/FattyWeb/lucid-ui/',
    searchPlaceholder: '搜索 Lucid',
  }),
  head: [
    ['link', { rel: 'icon', href: `/logos/logo-lucid-logotipo-lucid-png-8.png`, media: '(prefers-color-scheme:dark)', type: 'image/png' }],
    ['link', { rel: 'icon', href: `/logos/logo-lucid-logotipo-lucid-png-7.png`, media: '(prefers-color-scheme:light)', type: 'image/png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
    ['meta', { name: 'author', content: 'fatty' }],
    ['meta', { name: 'google', content: 'nositelinkssearchbox' }],
    ['meta', { hid: 'description', name: 'description', content: 'Lucid Framework Components for Vuejs' }],
    ['meta', { property: 'og:description', content: 'Lucid Framework Components for Vuejs' }],
    ['meta', { property: 'og:title', content: 'Lucid - Framework for Vuejs'}],
    ['meta', { name: 'twitter:card', content: 'summary_large_image'}],
  ],
  markdown:{
    importCode: true
  }
}

function getNavbar (lang = '/') {
  return {
    nav: [
      {
        text: lang !== '/'? `Guide` : `指南`,
        link: `${lang}docs/guide/`,
        items: [
          { text: lang !== '/'? `Introduction` : `简介`, link: `${lang}docs/guide/` },
          { text: lang !== '/'? `Getting Started` : `快速上手`, link: `${lang}docs/guide/gettingStarted` },
          // { text: `Vuesax + Nuxtjs`, link: `${lang}docs/guide/nuxt` }
        ]
      },
      {
        text: lang !== '/'? `Documentation` : `文档`,
        link: `${lang}docs/`,
        items: [
          {
            text: lang !== '/'? `Theme` : `主题 Theme`,
            items: [
              { text: `颜色 Color`, link: `${lang}docs/theme/` },
            ]
          },
          {
            text: lang !== '/'? `Layout` : `布局 Layout`,
            items: [
              { text: lang !== '/'? `Grid` : `Grid`, link: `${lang}docs/layout/` },
            ]
          },
          {
            text: lang !== '/'? `Components` : `组件 Components`,
            items: [
              { text: `按钮 Button`, link: `${lang}docs/components/` },
              { text: `警告框 Alert`, link: `${lang}docs/components/Alert` },
              { text: `加载 Loading`, link: `${lang}docs/components/Loading` },
              { text: `输入框 Input`, link: `${lang}docs/components/Input` },
              { text: '多选框 Checkbox', link: `${lang}docs/components/Checkbox` },
              { text: '开关 Switch', link: `${lang}docs/components/Switch` },
              { text: '下拉框 Select', link: `${lang}docs/components/Select` },
              { text: '日期选择 Datepicker', link: `${lang}docs/components/Datepicker` },
              { text: '时间选择 Timepicker', link: `${lang}docs/components/Timepicker` },
              { text: '头像 Avatar', link: `${lang}docs/components/Avatar` },
              { text: '消息提示 Message', link: `${lang}docs/components/Message` },
              { text: '通知 Notification', link: `${lang}docs/components/Notification` },
              { text: '单选框 Radio', link: `${lang}docs/components/Radio` },
              { text: '文字提示 Tooltip', link: `${lang}docs/components/Tooltip` },
              { text: '弹框 Dialog', link: `${lang}docs/components/Dialog` },
              { text: '分页 Pagination', link: `${lang}docs/components/Pagination` },
              { text: '表格 Table', link: `${lang}docs/components/Table` },
              { text: '导航 Navbar', link: `${lang}docs/components/Navbar` },
              { text: '侧边栏 Sidebar', link: `${lang}docs/components/Sidebar` },
              { text: '卡片 Card', link: `${lang}docs/components/Card` },
							// new component slot 1
            ]
          }
        ]
      },
      {
        text: lang !== '/'? `License` : `开源协议`,
        link: `${lang}license/`
      },
      {
        text: lang !== '/'? `Ecosystem` : `生态`,
        // link: `${lang}ecosystem/`,
        items: [
          {
            text: lang !== '/'? `Social` : '社区',
            items: [
              { text: `Github`, link: `https://github.com/FattyWeb/lucid-ui/` },
              { text: `微博`, link: `https://weibo.com/u/7068377737` },
            ]
          },
          {
            text: lang !== '/'? `Help` : `帮助`,
            items: [
              { text: lang !== '/'? `Issues` : `提Issues`, link: `https://github.com/FattyWeb/lucid-ui/issues` },
              { text: lang !== '/'? `Edit Page` : `贡献代码`, link: `https://github.com/FattyWeb/lucid-ui` },
              { text: lang !== '/'? `Latest Releases` : `最新版本`, link: `https://github.com/FattyWeb/lucid-ui/releases` },
            ]
          },
          {
            text: lang !== '/'? `Contact` : `联系我们`,
            items: [
              { text: `微博`, link: `https://weibo.com/u/7068377737` },
              { text: `pull request`, link: `https://github.com/FattyWeb/lucid-ui/pulls` },
            ]
          }
        ]
      },
      {
        text: '...',
        items: [
          { text: lang !== '/'? `Branding` : `品牌`, link: `/branding/` },
        ]
      }
    ]
  }
}

function getSidebar (lang = '/') {
  return {
    sidebar: {
      [`${lang}docs/`]: [
        {
          title: lang !== '/'? `Guide` : `指南`,
          collapsable: false,
          children: [
            `${lang}docs/guide/`,
            `${lang}docs/guide/gettingStarted`,
            // `${lang}docs/guide/nuxt`,
          ]
        },
        {
          title: lang !== '/'? `Theme` : `主题`,
          collapsable: false,
          children: [
            `${lang}docs/theme/`,
          ]
        },
        {
          title: lang !== '/'? `Components` : `组件`,
          collapsable: false,
          children: [
            `${lang}docs/components/`,
            `${lang}docs/components/Alert`,
            `${lang}docs/components/Loading`,
            `${lang}docs/components/Input`,
            `${lang}docs/components/Checkbox`,
            `${lang}docs/components/Switch`,
            `${lang}docs/components/Select`,
            `${lang}docs/components/Datepicker`,
            `${lang}docs/components/Timepicker`,
            `${lang}docs/components/Avatar`,
            `${lang}docs/components/Message`,
            `${lang}docs/components/Notification`,
            `${lang}docs/components/Radio`,
            `${lang}docs/components/Tooltip`,
            `${lang}docs/components/Dialog`,
            `${lang}docs/components/Pagination`,
            `${lang}docs/components/Table`,
            `${lang}docs/components/Navbar`,
            `${lang}docs/components/Sidebar`,
            `${lang}docs/components/Card`,
              // new component slot 2
          ]
        },
        {
          title: lang !== '/'? `Layout` : `布局`,
          collapsable: false,
          children: [
            `${lang}docs/layout/`,
          ]
        },
      ],
    }
  }
}
