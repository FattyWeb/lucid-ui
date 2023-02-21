---
PROPS:
  - name: title
    type: String
    values: String
    description: 定义标题
    default: null
    link: null
    usage: '#default'

  - name: text
    type: String
    values: String
    description: 定义文字内容
    default: null
    link: null
    usage: '#default'

  - name: position
    type: String
    values: bottom-right,top-right,top-center,top-left,bottom-left,bottom-center
    description: 定义组件出现的位置
    default: bottom-right
    link: null
    usage: '#position'

  - name: color
    type: String
    values: lucid组件库内可定义的颜色, rgb, hex
    description: 定义组件颜色
    default: null
    link: null
    usage: '#color'

  - name: border
    type: String
    values: vuesax colors, rgb, hex
    description: 定义组件的边框样式
    default: null
    link: null
    usage: '#border'

  - name: icon
    type: String
    values: String
    description: 定义组件的图标
    default: null
    link: null
    usage: '#icons'

  - name: duration
    type: Number, String
    values: Number, none
    description: 定义组件显示的持续时间
    default: 4000 (4s)
    link: null
    usage: '#duration'

  - name: onClick
    type: function
    values: function
    description: 点击操作的响应事件
    default: null
    link: null
    usage: null

  - name: buttonClose
    type: Boolean
    values: true,false
    description: 是否显示关闭按钮
    default: true
    link: null
    usage: null

  - name: flat
    type: Boolean
    values: true,false
    description: 定义扁平化样式
    default: false
    link: null
    usage: '#flat'

  - name: onDestroy
    type: function
    values: function
    description: 定义组件销毁时的回调
    default: null
    link: null
    usage: null

  - name: sticky
    type: boolean
    values: true,false
    description: 定义粘性样式
    default: false
    link: null
    usage: '#sticky'

  - name: square
    type: boolean
    values: true,false
    description: 改变组件的外观为方形
    default: false
    link: null
    usage: '#square'

  - name: width
    type: string
    values: 100%, auto
    description: 定义宽度
    default: 340px
    link: null
    usage: '#width'

  - name: loading
    type: boolean
    values: true,false
    description: 定义加载中状态
    default: false
    link: null
    usage: '#loading'

  - name: progress
    type: number, string
    values: 0 - 100, auto
    description: 定义组件的进度条
    default: null
    link: null
    usage: '#progress'

  - name: notPadding
    type: boolean
    values: true,false
    description: 是否取消边距
    default: 20px
    link: null
    usage: '#example'

  - name: clickClose
    type: boolean
    values: true,false
    description: 点击组件是否触发关闭
    default: false
    link: null
    usage: null

  - name: content
    type: Vue Component
    values: Vnode
    description: 定义组件内容 (类似于组件的插槽slot).
    default: null
    link: null
    usage: '#example'

  - name: instance.close()
    type: function
    values: null
    description: 关闭组件
    default: null
    link: null
    usage: null
   
  - name: instance.changeProgress(value)
    type: function
    values: 0 - 100
    description: 改变组件进度
    default: null
    link: null
    usage: null
    
  - name: instance.setLoading(boolean)
    type: function
    values: true,false
    description: 是否让组件变为加载中状态
    default: null
    link: null
    usage: null
    
  - name: instance.toggleClass(string)
    type: function
    values: String
    description: 为组件新增和移除样式
    default: null
    link: null
    usage: null

  - name: classNotification
    type: String
    values: String
    description: 定义组件的样式
    default: null
    link: null
    usage: null

NEWS:
  - 进度
  - 持续时间
  - 方形
  - 边框
  - 扁平
  - 加载
  - 粘性样式
  - 自定义宽度
  - 自定义内容
---

# 通知

<card>

## 默认

调用Lucid提供的全局函数 `$vs.notification` 生成一个提示框

此函数会返回一个组件实例, 您可以保存该实例进行后续操作 如关闭提示框等 

:::tip
`title` 属性和` text` 属性是 `content` 属性的前置条件
:::

<template v-slot:example>
  <notification-default />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center">
        <vs-button
          @click="openNotification">
          激活提示
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{5,6,7,8}
    <script>
      export default {
        methods: {
          openNotification() {
            this.$vs.notification({
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库`
            })
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 位置

通过 `position` 属性改变提示位置

支持以下属性

- `bottom-right` <Badge type="text" text="默认"/>
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

<template v-slot:example>
  <notification-position />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button border icon @click="openNotification">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-right')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-left')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('bottom-left')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button border icon @click="openNotification('bottom-center')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button border icon @click="openNotification('top-center')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{5,6,7,8,9}
    <script>
      export default {
        methods: {
          openNotification(position = null) {
            const noti = this.$vs.notification({
              position,
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库 目前版本是1.0.0alpha`
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 色彩

<coloren />

<template v-slot:example>
  <notification-color />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null)">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6,7,8,9,10,11}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              color,
              position,
              title: 'Lucid 文档',
              text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues'
            })
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 图标

使用 `icon` 属性为组件增加图标

<template v-slot:example>
  <notification-icons />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null, `<i class='bx bxs-time'></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-time'></i>
        </vs-button>
        <vs-button flat icon
          @click="openNotification(null, 'primary', `<i class='bx bxs-user-pin' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-user-pin' ></i>
        </vs-button>
        <vs-button flat success icon
          @click="openNotification('top-right', 'success', `<i class='bx bx-select-multiple' ></i>`)">
          <i class='bx bx-border-radius t-r'></i> <i class='bx bx-select-multiple' ></i>
        </vs-button>
        <vs-button flat danger icon
          @click="openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`)">
          <i class='bx bx-border-radius t-l'></i> <i class='bx bxs-bug' ></i>
        </vs-button>
        <vs-button flat warn icon
          @click="openNotification('bottom-left', 'warn', `<i class='bx bx-error' ></i>`)">
          <i class='bx bx-border-radius b-l'></i> <i class='bx bx-error' ></i>
        </vs-button>
        <vs-button flat dark icon
          @click="openNotification('bottom-center', 'dark', `<i class='bx bx-folder-open' ></i>`)">
          <i class='bx bx-border-bottom' ></i> <i class='bx bx-folder-open' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff', `<i class='bx bx-bell' ></i>`)">
          <i class='bx bx-border-top' ></i> <i class='bx bx-bell' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)', `<i class='bx bx-calendar' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bx-calendar' ></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color, icon) {
            const notification = this.$vs.notification({
              icon,
              color,
              position,
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha
               如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues`
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 进度条 <Badge text="New"/>

使用 `progress` 属性为组件增加进度条 如果赋值为 `auto` 组件会根据持续时间( `duration` )属性来自动更新进度条

您也可以使用实例方法 `changeProgress` 来改变进度条长度 传值范围(0 - 100)

<template v-slot:example>
  <notification-progress />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              progress: 'auto',
              color,
              position,
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 
              如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues`
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 持续时间 <Badge text="New"/>

通过 `duration` 属性来定义提示框显示的持续时间 单位是毫秒 默认是4秒 

如果您希望提示框一直显示 则 `duration` 传 `none`

<template v-slot:example>
  <notification-duration />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button border @click="openNotification(null)">
          默认持续时间 (4s)
        </vs-button>
        <vs-button border @click="openNotification(6000)">
          持续时间 6s
        </vs-button>
        <vs-button border @click="openNotification(10000)">
          持续时间 10s
        </vs-button>
        <vs-button border @click="openNotification('none')">
          持续时间 none
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6,7,8,9,10,11}
    <script>
      export default {
        methods: {
          openNotification(duration) {
            const notification = this.$vs.notification({
              duration,
              progress: 'auto',
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库 目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues`
            })
          }
        }
      }
    </script>
  ```

</template>

<template slot="stylus">

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
          
    </style>
  ```

</template>

</card>

<card>

## 方形 <Badge text="New"/>

使用 `square` 属性 使提示框变为方形

<template v-slot:example>
  <notification-square />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow square icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button square border success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button square border danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button square border warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button square border dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button square border color="#7d33ff" icon @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button square border color="rgb(59,222,200)" icon @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,5,6,7,8,9,10,11,12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              square: true,
              color,
              position,
              title: 'Lucid 文档',
              text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues'
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 边框 <Badge text="New"/>

Change the notification style with the `border` property by adding a border of the color provided as the value

<template v-slot:example>
  <notification-border />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon
          @click="openNotification(null, null, `<i class='bx bxs-time'></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-time'></i>
        </vs-button>
        <vs-button flat icon
          @click="openNotification(null, 'primary', `<i class='bx bxs-user-pin' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bxs-user-pin' ></i>
        </vs-button>
        <vs-button flat success icon
          @click="openNotification('top-right', 'success', `<i class='bx bx-select-multiple' ></i>`)">
          <i class='bx bx-border-radius t-r'></i> <i class='bx bx-select-multiple' ></i>
        </vs-button>
        <vs-button flat danger icon
          @click="openNotification('top-left', 'danger', `<i class='bx bxs-bug' ></i>`)">
          <i class='bx bx-border-radius t-l'></i> <i class='bx bxs-bug' ></i>
        </vs-button>
        <vs-button flat warn icon
          @click="openNotification('bottom-left', 'warn', `<i class='bx bx-error' ></i>`)">
          <i class='bx bx-border-radius b-l'></i> <i class='bx bx-error' ></i>
        </vs-button>
        <vs-button flat dark icon
          @click="openNotification('bottom-center', 'dark', `<i class='bx bx-folder-open' ></i>`)">
          <i class='bx bx-border-bottom' ></i> <i class='bx bx-folder-open' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff', `<i class='bx bx-bell' ></i>`)">
          <i class='bx bx-border-top' ></i> <i class='bx bx-bell' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)', `<i class='bx bx-calendar' ></i>`)">
          <i class='bx bx-border-radius b-r'></i> <i class='bx bx-calendar' ></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, border) {
            const noti = this.$vs.notification({
              border,
              position,
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues`
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 扁平 <Badge text="New"/>

使用 `flat` 属性 为组件添加扁平化效果 扁平化会使组件变为轻绘色

<template v-slot:example>
  <notification-flat />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center">
        <vs-button
          flat
          icon
          @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button
          flat
          success
          icon
          @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button
          flat
          danger
          icon
          @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button
          flat
          warn
          icon
          @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button f
          lat
          dark
          icon
          @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button
          flat
          color="#7d33ff"
          icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button
          flat
          color="rgb(59,222,200)"
          icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4-13}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const notification = this.$vs.notification({
              flat: true,
              color,
              position,
              title: 'Lucid 文档',
              text: `Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues`
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

使用 `loading` 属性为组件添加加载中动效 内容和标题会被隐藏

<template v-slot:example>
  <notification-loading />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button gradient icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button gradient success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button gradient danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button gradient warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button gradient dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button gradient color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button gradient color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const notification = this.$vs.notification({
              loading: true,
              color,
              position
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 自定义宽度 <Badge text="New"/>

使用 `width` 属性可以定义组件宽度 例如 `100%` 可以使组件撑满屏幕

如果您想让组件的宽度自动适配内容 则赋值 `auto`

<template v-slot:example>
  <notification-allWidth />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, '')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat icon @click="openNotification('top-center', 'primary', 'auto')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4-11}
    <script>
      export default {
        methods: {
          openNotification(position = null, color, width = '100%') {
            const notification = this.$vs.notification({
              width,
              color,
              title: 'Lucid 文档',
              text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues'
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.2rem
        &.b-r
          transform rotate(90deg)
    </style>
  ```

</template>

</card>

<card>

## 粘性样式 <Badge text="New"/>

使用 `sticky` 属性可使组件变为粘性样式(组件会紧贴屏幕边缘) 此属性是 `boolean` 类型，可以忽略其值

<template v-slot:example>
  <notification-sticky />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button shadow icon @click="openNotification(null, null)">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat icon @click="openNotification(null, 'primary')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
        <vs-button flat success icon @click="openNotification('top-right', 'success')">
          <i class='bx bx-border-radius t-r'></i>
        </vs-button>
        <vs-button flat danger icon @click="openNotification('top-left', 'danger')">
          <i class='bx bx-border-radius t-l'></i>
        </vs-button>
        <vs-button flat warn icon @click="openNotification('bottom-left', 'warn')">
          <i class='bx bx-border-radius b-l'></i>
        </vs-button>
        <vs-button flat dark icon @click="openNotification('bottom-center', 'dark')">
          <i class='bx bx-border-bottom' ></i>
        </vs-button>
        <vs-button flat color="#7d33ff" icon
          @click="openNotification('top-center', '#7d33ff')">
          <i class='bx bx-border-top' ></i>
        </vs-button>
        <vs-button flat color="rgb(59,222,200)" icon
          @click="openNotification(null, 'rgb(59,222,200)')">
          <i class='bx bx-border-radius b-r'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4-12}
    <script>
      export default {
        methods: {
          openNotification(position = null, color) {
            const noti = this.$vs.notification({
              sticky: true,
              color,
              position,
              title: 'Lucid 文档',
              text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻xxxxxxxxxxxxxxxxxxxxx给我们提issues'
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## 自定义内容 <Badge text="New"/> <Badge type="error" text="此功能仍处于测试期"/>

使用 `content` 插槽可以自定义组件的内容

<template v-slot:example>
  <notification-example />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button border icon @click="openNotificationUser">
          Example User
        </vs-button>
        <vs-button border icon @click="openNotificationCookie">
          Example Cookie
        </vs-button>
        <vs-button border icon @click="openNotificationCall">
          Example Call
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{2,3,4,10,17,25}
    <script>
      import user from './user.vue'
      import cookie from './cookie.vue'
      import call from './call.vue'
      export default {
        methods: {
          openNotificationCookie() {
            const noti = this.$vs.notification({
              duration: 'none',
              content: cookie,
            })
          },
          openNotificationUser() {
            const noti = this.$vs.notification({
              duration: 'none',
              width: 'auto',
              content: user,
            })
          },
          openNotificationCall() {
            const noti = this.$vs.notification({
              color: 'dark',
              duration: 'none',
              width: 'auto',
              content: call,
              notPadding: true,
            })
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:stylus>

  ```stylus
    <style scoped lang="stylus">
      .vs-button
        margin 10px
      i
        margin 2px
        font-size 1.4rem
        transform-origin center
        &.b-r
          transform rotate(90deg)
        &.t-r
          transform rotate(0deg)
        &.t-l
          transform rotate(-90deg)
        &.b-l
          transform rotate(-180deg)
    </style>
  ```

</template>

</card>

<card>

## API

</card>
