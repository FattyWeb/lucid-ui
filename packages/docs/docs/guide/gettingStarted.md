# 快速上手

<card>

  ## 安装

  Lucid 是一个基于Vuejs3.x的UI组件框架 您可以通过以下方式在您的项目中引用

</card>

<card>

  ## NPM

  您可以通过 npm 指令 安装lucid (目前只在私服上传 马上开放敬请期待)

  ```bash:no-line-numbers
  npm install lucid # 或者 yarn add lucid
  ```

</card>

<card>

  ## 使用

  通过以下代码 在项目中引用 lucid:

  ```js:no-line-numbers
    import { createApp } from 'vue'
    import Lucid from 'Lucid'

    import 'lucid/dist/lucid.css' // lucid 样式文件
    createApp(App).use(Lucid, {
      // 选项
    })
  ```

</card>

<card>

  ## 单组件按需引入

  在某些情况下，您的项目中只需要lucid的一些组件，为此，您可以按如下方式添加它们

  ```js:no-line-numbers
    import { createApp } from 'vue'
    import { vsButton, vsSelect, vsPopup } from 'lucid'
    import 'lucid/dist/lucid.css'

    createApp(App)
        .use(vsButton)
        .use(vsSelect)
        .use(vsPopup)

  ```

</card>

<card>

  ## CDN

  马上开放敬请期待

</card>


<!-- ### 新项目 Vue CLI

### Vue UI Install

### Existing applications -->
