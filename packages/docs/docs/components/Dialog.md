---
PROPS:
  - name: v-model
    type: Boolean
    values: true,false
    description: 双向绑定组件的值(组件的显示/隐藏)
    default: false
    link: null
    usage: '#default'

  - name: not-center
    type: boolean
    values: true.false
    description: 取消标题居中
    default: false
    link: null
    usage: '#type'

  - name: width
    type: String
    values: px
    description: 定义组件宽度
    default: null
    link: null
    usage: '#type'

  - name: loading
    type: Boolean
    values: true,false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'
    
  - name: not-close
    type: Boolean
    values: true,false
    description: 是否移除关闭按钮
    default: false
    link: null
    usage: '#not-close'

  - name: scroll
    type: Boolean
    values: true,false
    description: 定义组件的滚动条 当内容过长时 会自动出现滚动条
    default: false
    link: null
    usage: '#scroll'

  - name: overflow-hidden
    type: Boolean
    values: true,false
    description: 定义组件的父级页面在组件打开时是否可以滚动
    default: false
    link: null
    usage: '#overflow-hidden-body'

  - name: auto-width
    type: Boolean
    values: true,false
    description: 定义组件的宽度根据内容自适应
    default: false
    link: null
    usage: '#scroll'

  - name: not-padding
    type: Boolean
    values: true,false
    description: 组件是否无边距
    default: false
    link: null
    usage: '#not-padding'

  - name: full-screen
    type: Boolean
    values: true,false
    description: 定义组件是否全屏展示
    link: null
    usage: '#full-screen'

  - name: blur
    type: Boolean
    values: true,false
    description: 定义组件周边的背景模糊
    default: false
    link: null
    usage: '#blur'

  - name: square
    type: Boolean
    values: true,false
    description: 定义组件方形外观
    default: false
    link: null
    usage: '#square'

  - name: prevent-close
    type: Boolean
    values: true,false
    description: 定义组件是否可以通过单击外部或按esc键关闭
    default: false
    link: null
    usage: null

  - name: v-on:close
    type: Methods
    values: function
    description: 定义组件关闭的回调事件
    default: null
    link: null
    usage: null

SLOTS:
  - name: default
    type: '#slot'
    values: null
    description: 定义组件内容
    default: null
    link: null
  - name: header
    type: '#slot'
    values: null
    description: 定义组件头部内容
    default: null
    link: null
  - name: footer
    type: '#slot'
    values: null
    description: 定义组件底部内容
    default: null
    link: null

NEWS:
  - name
---

# 对话框

<card>

## 默认

通过 `<vs-dialog>` 组件生成一个对话框

<template v-slot:example>
  <dialog-default />
</template>

<template v-slot:template>

  ```html{6-42}
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          打开对话框
        </vs-button>
        <vs-dialog v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>

          <div class="con-form">
            <vs-input v-model="email" placeholder="邮箱">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" 
                      v-model="password" 
                      placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="remember">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>

          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>

              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          email: '',
          password: '',
          remember: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 类型

通过 `type` 属性可以定义对话框类型 可选值 **Alert** **Confirm** **Prompt**。 您还可以通过插槽 `header` `default` `footer` 为组件的头部 默认区 页脚自定义内容

<template v-slot:example>
  <dialog-type />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          提示
        </vs-button>
        <vs-button flat @click="active2=!active2">
          确认
        </vs-button>
        <vs-button border @click="active3=!active3">
          提示输入
        </vs-button>
        
        <vs-dialog width="550px" not-center v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎 请输入您的 <b>姓名</b>
            </h4>
          </template>
          <div class="con-content">
            <p>
              Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
            </p>
          </div>
          <template #footer>
            <div class="con-footer">
              <vs-button @click="active=false" transparent>
                确认
              </vs-button>
            </div>
          </template>
        </vs-dialog>
        
        <vs-dialog width="550px" not-center v-model="active2">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-content">
            <p>
              Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
            </p>
          </div>
          <template #footer>
            <div class="con-footer">
              <vs-button @click="active2=false" transparent>
                确认
              </vs-button>
              <vs-button @click="active2=false" dark transparent>
                取消
              </vs-button>
            </div>
          </template>
        </vs-dialog>
        
        <vs-dialog width="300px" not-center v-model="active3">
          <template #header>
            <h4 class="not-margin">
              欢迎 请输入您的 <b>姓名</b>
            </h4>
          </template>
          <div class="con-content">
            <vs-input v-model="input1" placeholder="姓名"></vs-input>
          </div>
          <template #footer>
            <div class="con-footer">
              <vs-button @click="active3=false" transparent>
                确认
              </vs-button>
              <vs-button @click="active3=false" dark transparent>
                取消
              </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          active: false,
          active2: false,
          active3: false,
          input1: '',
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .con-footer
      display flex
      align-items center
      justify-content flex-end
      .vs-button
        margin 0px
        .vs-button__content
          padding 10px 30px
        ~ .vs-button
          margin-left 10px
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
      padding-bottom 0px
    .con-content
      width 100%
      p
        font-size .8rem
        padding 0px 10px
      .vs-checkbox-label
        font-size .8rem
      .vs-input-parent
        width 100%
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 加载

通过 `loading` 属性 为组件添加加载中动效

<template v-slot:example>
  <dialog-loading />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <vs-button success 
                   flat 
                   @click="active=!active">
          打开对话框 加载
        </vs-button>
        
        <vs-dialog loading v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</template>

</card>

<card>

## 隐藏关闭按钮

通过 `not-close` 属性 可以隐藏关闭按钮

<template v-slot:example>
  <dialog-notClose />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          active
        </button>
        
        <vs-dialog not-close v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                @
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">
                记住我
              </vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 可滚动

使用 `scroll` 属性 为您的内容增加滚动条 当内容过长时 会自动出现滚动条

<template v-slot:example>
  <dialog-scroll />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button shadow @click="active=!active">
          打开对话框
        </vs-button>
        <vs-dialog scroll overflow-hidden not-close auto-width v-model="active">
          <template #header>
            <h3>
              简介
            </h3>
          </template>
          <div class="con-content">
            <h4>
              什么是 Lucid?
            </h4>
            <p>
              Lucid是一个基于Vuejs3.x创建的UI组件框架，用于轻松的创建项目，具有独特而精美的风格。
              
              Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用 
              
              我们致力于通过提供基于整体性创建的组件、独立定制的组件和易于实现的组件来简化开发者的工作，因此我们想使框架极具创造力，
              
              但我们不会忽视每个项目在视觉上和生态系统上的差异点 Lucid没有基于物料风格(Material Design)，已经有很多使用类似设计的框架(quasar、vuetify)，
              
              我们不想再成为这些框架中的一员，除了我们喜欢创造和设计新的体验，并用新的元素或细节给您带来惊喜之外，我们会通过提高视觉上的自由度来实现。
            </p>

            <h4>
              为什么选择 Lucid?
            </h4>

            <p>
              Lucid 是一个基于vuejs3.x的全新框架，这意味着我们与世界上最流行的javascript框架之一和一个巨大的社区携手并进，我们有清晰地文档来帮助您创建项目。
              <br>
              <br>
              - Lucid 与许多框架不同，它是从零开始设计的，我们没有遵循任何固定的设计思想，这是一件很棒的事情，因为你的项目将是独一无二的。

              <br>
              <br>
              - 我们专注于快速轻松地创建项目，提供一条美丽的视觉体验，但同时不忽略开发人员的个性化和独立性。

              <br>
              <br>
              - Lucid 使用本地css变量进行更好的定制和更改，例如更改为深色主题或使用少量的javascript代码更改整个应用程序的主颜色
              <br>
              <br>

              - Lucid 是一款具有强大视觉冲击力的框架，在设计方面一直追随主流趋势和理念。
              <br>
              <br>

              - 一个开源社区，用于创建、改进和更正任何组件或功能A
              <br>
              <br>

              - 完全的独立组件，避免导入不必要的代码。
              <br>
              <br>

              - 更多功能 敬请期待。
              <br>
            </p>
          </div>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    .con-content
      p
        margin 20px 0px
        position relative
        display block
        font-size .9rem

    </style>
  ```

</template>

</card>

<card>

## 禁止父级页面滚动

通过 `overflow-hidden` 属性 可以在您打开对话框并滚动页面时 父级页面不会滚动

<template v-slot:example>
  <dialog-overflowHidden />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          打开对话框
        </button>
        
        <vs-dialog overflow-hidden v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</template>

</card>

<card>

## 无padding

通过 `not-padding` 来取消组件的padding

<template v-slot:example>
  <dialog-notPadding />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          打开对话框 无padding
        </button>
        <vs-dialog not-close auto-width not-padding v-model="active">
          <div class="con-image">
            <img src="/foto1.png" alt="">
          </div>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    .con-image
      border-radius inherit
      img
        display block
        position relative
        border-radius inherit
        max-width 350px
    </style>
  ```

</template>

</card>

<card>

## 层级

组件支持多层级打开

<template v-slot:example>
  <dialog-nested />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button @click="active=!active">
          打开对话框 1
        </vs-button>
        
        <vs-dialog overflow-hidden v-model="active">
          <template #header>
            <h3>
              层级对话框
            </h3>
          </template>
          <div class="con-content">
            <vs-button @click="active2=!active2">
              打开对话框 2
            </vs-button>
          </div>
        </vs-dialog>
        
        <vs-dialog v-model="active2">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          active2: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")

    .con-content
      display flex
      align-items center
      justify-content center
      p
        margin 20px 0px
        position relative
        display block
        font-size .9rem
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 全屏

使用 `full-screen` 属性 可以将对话框的尺寸撑满屏幕

<template v-slot:example>
  <dialog-fullScreen />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <vs-button gradient warn @click="active=!active">
          打开对话框
        </vs-button>
        
        <vs-dialog overflow-hidden full-screen v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>

              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 背景模糊

使用 `blur` 属性 可以使背景模糊

<template v-slot:example>
  <dialog-blur />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <button @click="active=!active">
          打开对话框
        </button>
        
        <vs-dialog blur v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          active: false,
          input1: '',
          input2: '',
          checkbox1: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .not-margin
        margin 0px
        font-weight normal
        padding 10px
      .con-form
        width 100%
        .flex
          display flex
          align-items center
          justify-content space-between
          a
            font-size .8rem
            opacity .7
            &:hover
              opacity 1
        .vs-checkbox-label
          font-size .8rem
        .vs-input-content
          margin 10px 0px
          width calc(100%)
          .vs-input
            width 100%
      .footer-dialog
        display flex
        align-items center
        justify-content center
        flex-direction column
        width calc(100%)
        .new
          margin 0px
          margin-top 20px
          padding: 0px
          font-size .7rem
          a
            color getColor('primary') !important
            margin-left 6px
            &:hover
              text-decoration underline
        .vs-button
          margin 0px
      </style>
  ```

</template>

</card>

<card>

## 方形

使用 `square` 属性 是对话框变为方形外观

<template v-slot:example>
  <dialog-square />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <vs-button dark flat square @click="active=!active">
          打开对话框
        </vs-button>
        
        <vs-dialog square v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## 禁用关闭

通过 `prevent-close` 属性 可以禁用 点击对话框外 或 按下esc键 来关闭对话框的功能

<template v-slot:example>
  <dialog-preventClose />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <vs-button danger @click="active=!active">
          打开对话框
        </vs-button>
        
        <vs-dialog prevent-close v-model="active">
          <template #header>
            <h4 class="not-margin">
              欢迎使用 <b>Lucid</b>
            </h4>
          </template>
          <div class="con-form">
            <vs-input v-model="input1" placeholder="邮箱">
              <template #icon>
                <i class='bx bxs-envelope'></i>
              </template>
            </vs-input>
            <vs-input type="password" v-model="input2" placeholder="密码">
              <template #icon>
                <i class='bx bxs-lock'></i>
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="checkbox1">记住我</vs-checkbox>
              <a href="#">忘记密码?</a>
            </div>
          </div>
          <template #footer>
            <div class="footer-dialog">
              <vs-button block>
                登录
              </vs-button>
              <div class="new">
                新用户? <a href="#">创建账号</a>
              </div>
            </div>
          </template>
        </vs-dialog>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: false,
        input1: '',
        input2: '',
        checkbox1: false
      })
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
    </style>
  ```

</template>

</card>

<card>

## API

</card>
