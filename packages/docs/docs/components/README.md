---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: 更改组件及其某些子组件的颜色
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            <vs-button
              color="success"
            >
              Success
            </vs-button>
  # _______________________________________
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: 更改组件的样式及其状态
    default: null
    link: null
    usage: '#flat'
    code: >
            <vs-button
              flat
              >
              Flat
            </vs-button>
  # _______________________________________
  - name: active
    type: Boolean
    values: true, false
    description: 确定组件是否处于激活状态，并将其样式更改为该状态。
    default: false
    link: null
    usage: '#default'
    code: >
            <vs-button active >
              Default
            </vs-button>
  # _______________________________________
  - name: upload
    type: Boolean
    values: true, false
    description: 确定组件是否处于上传状态，通过更改样式并添加上传中动画。
    default: false
    link: null
    usage: '#upload'
    code: >
            <vs-button upload >
              <i class='bx bxs-wallet'></i> Wallet
            </vs-button>
  # _______________________________________
  - name: to
    type: String
    values: url - vue-router
    description: 将vue-router的功能添加到按钮，点击将进行路由跳转。
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button to="/" >
              Example prop - to
            </vs-button>
  # _______________________________________
  - name: href
    type: String
    values: href - link
    description: 为组件添加外部链接href的添加功能
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
  # _______________________________________
  - name: blank
    type: Boolean
    values: true, false
    description: 跳转是否替换当前窗口。
    default: false
    link: null
    usage: '#to-href'
    code: >
            <vs-button blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </vs-button>
  # _______________________________________
  - name: icon
    type: Boolean
    values: true, false
    description: 为组件添加一个图标，组件的宽度和高度相等。
    default: false
    link: null
    usage: '#icon'
    code: >
            <vs-button icon >
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: circle
    type: Boolean
    values: true, false
    description: 增加圆形样式
    default: false
    link: null
    usage: '#circle'
    code: >
            <vs-button icon circle >
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: square
    type: Boolean
    values: true, false
    description: 添加矩形样式
    default: false
    link: null
    usage: '#square'
    code: >
            <vs-button icon square > // <------
              <i class='bx bx-home-alt'></i>
            </vs-button>
  # _______________________________________
  - name: block
    type: Boolean
    values: true, false
    description: 将组件变为块级元素。
    default: false
    link: null
    usage: '#block'
    code: >
            <vs-button block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </vs-button>
  # _______________________________________
  - name: animationType
    type: Boolean
    values: true, false
    description: 更改动画类型，此属性仅在具有<code> slot </code>时有效.
    default: false
    link: null
    usage: '#animate'
    code: >
            <vs-button flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </vs-button>
  # _______________________________________
  - name: animateInactive
    type: Boolean
    values: true, false
    description: 确定动画是否处于激活状态.
    default: false
    link: null
    usage: '#toggle'
    code: >
            <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </vs-button>
  # _______________________________________
SLOTS:
  - name: animate
    type: slot
    values: null
    description: 添加动画重要现实的元素.
    default: null
    link: null
    code: >
          <vs-button >
            Home
            <template v-slot:animate >
              <i class='bx bx-home-alt' ></i>
            </template>
          </vs-button>
    usage: '#animated'
  # _______________________________________
NEWS:
  - 加载
  - 上传
  - 块级按钮
  - 动效
  - 浮动
  - 社交按钮
  - 按钮组
  - 切换
  - 跳转
---

# 按钮

<card>

## 默认

按钮是任何项目的基本组成部分，您可以使用一行代码轻松添加一个的按钮。所有按钮都具有激活、聚焦、悬停等所有状态

<template v-slot:example>
  <button-default />
</template>

<template v-slot:template>

@[code{1-17} html](../../.vuepress/components/button/default.vue)

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## 扁平

添加 `flat` 属性可以使按钮扁平化，此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <button-flat />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center">
        <vs-button
          flat
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          flat
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          flat
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## 边框

添加 `border` 属性可以为按钮增加边框，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-border />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          border
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          border
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          border
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## 渐变

添加 `gradient` 属性可以为按钮增加渐变效果，此属性是 `boolean` 类型，可以忽略其值。

::: tip 渐变颜色系统自动适配
  渐变的颜色系统会根据 `color` 属性自动适配，当前例子中颜色为 ` primary`。
:::

<template v-slot:example>
  <button-gradient />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div>
        <vs-button
          gradient
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          gradient
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          gradient
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```

</template>


<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## 悬浮

添加 `relief` 属性可以为按钮增加悬浮效果，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-relief />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div>
        <vs-button
          relief
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          relief
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          relief
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```
</template>


<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## 透明

添加 `transparent` 属性可以为按钮增加透明效果，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-transparent />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div>
        <vs-button
          transparent
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          transparent
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          transparent
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```

</template>


<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## 阴影

添加 `shadow` 属性可以为按钮增加阴影效果，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-shadow />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div>
        <vs-button
          shadow
          :active="active == 0"
          @click="active = 0"
        >
          激活
        </vs-button>
        <vs-button
          shadow
          :active="active == 1"
          @click="active = 1"
        >
          默认
        </vs-button>
        <vs-button
          shadow
          disabled
        >
          禁用
        </vs-button>
      </div>
    </template>
  ```

</template>


<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## 颜色

添加 `color` 属性(**#fff**, **rgba (100,10,5)** 或者 **使用lucid的内置颜色方案**)可以改变按钮增颜色。

<utils-color />

<template v-slot:example>
  <button-color />
</template>

<template v-slot:template>

  ```html{10}
    <template>
      <div class="center">
        <vs-button
          :active="active == 0"
          @click="active = 0"
        >
          Default
        </vs-button>
        <vs-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Success
        </vs-button>
        <vs-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          Danger
        </vs-button>
        <vs-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Warn
        </vs-button>
        <vs-button
          dark
          shadow
          :active="active == 4"
          @click="active = 4"
        >
          Dark
        </vs-button>
        <vs-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
            HEX
        </vs-button>
        <vs-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          RGB
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 图标

添加 `icon` 属性可以使按钮变为图标按钮，此属性是 `boolean` 类型，可以忽略其值。

此属性使按钮具有特定的大小，使其具有相同的宽度和高度，当按钮为图标时不可以设置文本。

<utils-icon />

<template v-slot:example>
  <button-icon />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          icon
          :active="active == 0"
          @click="active = 0"
        >
          <i class='bx bx-home-alt'></i>
        </vs-button>

        <vs-button
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class='bx bxs-phone-call' ></i>
        </vs-button>

        <vs-button
          icon
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class='bx bxs-heart' ></i>
        </vs-button>

        <vs-button
          icon
          color="warn"
          gradient
          :active="active == 3" @click="active = 3"
        >
          <i class='bx bxs-bell-ring' ></i>
        </vs-button>

        <vs-button
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class='bx bxs-paper-plane' ></i>
        </vs-button>

        <vs-button
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class='bx bxs-purchase-tag' ></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 带文本的图标按钮

如果需要为图标按钮添加文本，则使用默认插槽 `slot`。

<template v-slot:example>
  <button-iconText />
</template>

<template v-slot:template>

  ```html{7}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          :active="active == 0"
          @click="active = 0"
        >
          <i class="bx bx-home-alt"></i> 主菜单
        </vs-button>

        <vs-button
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i> 拨打
        </vs-button>

        <vs-button
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> 喜欢
        </vs-button>

        <vs-button
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          <i class="bx bxs-bell-ring"></i> 通知
        </vs-button>

        <vs-button
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i> 发送
        </vs-button>

        <vs-button
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i> 保存
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 圆形

添加 `circle` 属性可以使按钮变为圆形，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-circle />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          circle
          :active="active == 0"
          @click="active = 0"
        >
          主菜单
        </vs-button>

        <vs-button
          circle
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          circle
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> 喜欢
        </vs-button>

        <vs-button
          circle
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          通知 <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          circle
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>

        <vs-button
          circle
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```
</template>

</card>

<card>

## 方形

添加 `Square` 属性可以使按钮变为方形，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-square />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          square
          :active="active == 0"
          @click="active = 0"
        >
          主页
        </vs-button>

        <vs-button
          square
          icon
          success
          flat
          :active="active == 1" @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          square
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> 喜欢
        </vs-button>

        <vs-button
          square
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          通知 <i class="bx bxs-bell-ring"></i>
        </vs-button>
        <vs-button
          square
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>
        <vs-button
          square
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 尺寸

使用 `size` 属性可以改变整个按钮的尺寸 包括padding、font-size、border。

可选值:
  - xl
  - l
  - default
  - small
  - mini

<template v-slot:example>
  <button-size />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          size="xl"
          :active="active == 0"
          @click="active = 0"
        >
          超大尺寸
        </vs-button>
        <vs-button
          size="large"
          :active="active == 1"
          @click="active = 1"
        >
          大尺寸
        </vs-button>
        <vs-button
          :active="active == 2"
          @click="active = 2"
        >
          默认尺寸
        </vs-button>
        <vs-button
          size="small"
          :active="active == 3"
          @click="active = 3"
        >
          小尺寸
        </vs-button>
        <vs-button
          size="mini"
          :active="active == 4"
          @click="active = 4"
        >
          迷你尺寸
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 加载中 <Badge text="新增"/>

添加 `loading` 属性可以使按钮变为变为加载中状态，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-loading />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center">
        <vs-button
          loading
          :active="active == 0"
          @click="active = 0"
        >
          主菜单
        </vs-button>

        <vs-button
          loading
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          loading
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> 喜欢
        </vs-button>

        <vs-button
          loading
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          通知 <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          loading
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>
        <vs-button
          loading
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 上传 <Badge text="新增"/>

添加 `loading` 属性可以使按钮变为变为上传中状态，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-upload />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          upload
          :active="active == 0"
          @click="active = 0"
        >
          主菜单
        </vs-button>

        <vs-button
          upload
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </vs-button>

        <vs-button
          upload
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> 喜欢
        </vs-button>

        <vs-button
          upload
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          通知 <i class="bx bxs-bell-ring"></i>
        </vs-button>

        <vs-button
          upload
          color="dark"
          transparent
          :active="active == 5"
          @click="active = 5"
        >
          暗色
        </vs-button>

        <vs-button
          upload
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </vs-button>

        <vs-button
          upload
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 块级按钮 <Badge text="新增"/>

添加 `block` 属性可以使按钮变为块级按钮，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <button-block />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          block
        >
          <i class='bx bxs-paint-roll' ></i> 编辑主题
        </vs-button>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 动效 <Badge text="新增"/>

您可以通过添加 `slot="animate"`为组件创建动画，内容将是为组件设置动画时显示的内容

您还可以使用 `animation-type` 属性更改动画类型，允许的值为(`vertical`, `scale`,`rotate`)

<template v-slot:example>
  <button-animate />
</template>

<template v-slot:template>

  ```html{5,6,7}:no-line-numbers
    <template>
      <div class="center">
        <vs-button>
          主菜单
          <template #animate >
            <i class='bx bx-home-alt' ></i>
          </template>
        </vs-button>

        <vs-button
          flat
          success
          animation-type="vertical"
        >
          信息
          <template #animate >
            <i class='bx bx-mail-send' ></i> 发送
          </template>
        </vs-button>

        <vs-button
          gradient
          style="min-width: 60px"
          warn
          animation-type="scale"
        >
          <i class='bx bxs-shopping-bag' ></i>
          <template #animate >
            商城
          </template>
        </vs-button>

        <vs-button
          icon
          relief
          danger
          animation-type="rotate"
        >
          <i class='bx bx-like'></i>
          <template #animate >
            <i class='bx bxs-like' ></i>
          </template>
        </vs-button>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 社交按钮 <Badge text="新增"/>

使用社交网络的颜色在项目中非常常见，无论是登录按钮还是共享按钮，因此lucid使您可以轻松地搜索每种颜色，只需输入社交网络名称，就可以更改组件的整个样式

支持的颜色: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

<template v-slot:example>
  <button-social />
</template>

<template v-slot:template>

  ```html{5}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          icon
          color="facebook"
        >
          <i class='bx bxl-facebook-square'></i>
        </vs-button>

        <vs-button
          icon
          color="twitter"
        >
          <i class='bx bxl-twitter'></i>
        </vs-button>

        <vs-button
          icon
          color="youtube"
        >
          <i class='bx bxl-youtube'></i>
        </vs-button>

        <vs-button
          icon
          color="linkedin"
        >
          <i class='bx bxl-linkedin'></i>
        </vs-button>

        <vs-button
          icon
          color="whatsapp"
        >
          <i class='bx bxl-whatsapp'></i>
        </vs-button>

        <vs-button
          icon
          color="twitch"
        >
          <i class='bx bxl-twitch'></i>
        </vs-button>

        <vs-button
          icon
          color="medium"
        >
          <i class='bx bxl-medium'></i>
        </vs-button>

        <vs-button
          icon
          color="skype"
        >
          <i class='bx bxl-skype'></i>
        </vs-button>

        <vs-button
          icon
          color="slack"
        >
          <i class='bx bxl-slack-old'></i>
        </vs-button>

        <vs-button
          icon
          color="messenger"
        >
          <i class='bx bxl-messenger'></i>
        </vs-button>

        <vs-button
          icon
          color="tumblr"
        >
          <i class='bx bxl-tumblr'></i>
        </vs-button>

        <vs-button
          icon
          color="dribbble"
        >
          <i class='bx bxl-dribbble'></i>
        </vs-button>

        <vs-button
          icon
          color="google-plu
        s">
          <i class='bx bxl-google-plus'></i>
        </vs-button>

        <vs-button
          icon
          color="vimeo"
        >
          <i class='bx bxl-vimeo'></i>
        </vs-button>

        <vs-button
          icon
          color="pinterest"
        >
          <i class='bx bxl-pinterest'></i>
        </vs-button>

        <vs-button
          icon
          color="spotify"
        >
          <i class='bx bxl-spotify'></i>
        </vs-button>

        <vs-button
          icon
          color="discord"
        >
          <i class='bx bxl-discord'></i>
        </vs-button>

        <vs-button
          icon
          color="amazon"
        >
          <i class='bx bxl-amazon'></i>
        </vs-button>

        <vs-button
          icon
          color="reddit"
        >
          <i class='bx bxl-reddit'></i>
        </vs-button>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 浮动 <Badge text="新增"/>

添加 `Floating` 属性可以为按钮增加浮动效果，此属性是 `boolean` 类型，可以忽略其值。

这些按钮通常在特定情况下执行重要操作，并固定在下角

<template v-slot:example>
  <button-floating />
</template>

<template v-slot:template>

  ```html{6}:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          circle
          icon
          floating
        >
          <i class='bx bx-plus' ></i>
        </vs-button>

        <vs-button
          color="whatsapp"
          circle
          icon
          floating
        >
          <i class='bx bxl-whatsapp' ></i>
        </vs-button>

        <vs-button
          color="#ff3e4e"
          circle
          icon
          floating
        >
          <i class='bx bx-up-arrow-alt' ></i>
        </vs-button>

        <vs-button
          circle
          icon
          disabled
          floating
        >
          <i class='bx bxs-chat' ></i>
        </vs-button>
      </div>
    </template>
  ```
</template>

</card>

<card>

## 按钮组 <Badge text="新增"/>

如果需要一组按钮，可以使用**子组件**`<vs button group></vs button group>`并将要分组的按钮放入默认插槽中

<template v-slot:example>
  <button-group />
</template>

<template v-slot:template>

  ```html{3,16}
    <template>
      <div class="center">
        <vs-button-group>
          <vs-button>
            组1
          </vs-button>
          <vs-button>
            组2
          </vs-button>
          <vs-button>
            组3
          </vs-button>
          <vs-button>
            组4
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button flat icon>
            <i class='bx bx-play' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-pause' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-fast-forward' ></i>
          </vs-button>
          <vs-button flat icon>
            <i class='bx bx-shuffle' ></i>
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button border>
            <i class='bx bxs-pencil' ></i> 编辑
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-font-color' ></i>
          </vs-button>
          <vs-button border icon>
            <i class='bx bx-align-middle' ></i>
          </vs-button>
          <vs-button border>
            <i class='bx bx-font-size' ></i> 设置字体
          </vs-button>
        </vs-button-group>

        <span class="divider" />

        <vs-button-group>
          <vs-button relief>
            <i class='bx bx-home-alt' ></i> 主页
          </vs-button>
          <vs-button relief>
            <i class='bx bxs-phone-call' ></i> 电联
          </vs-button>
          <vs-button relief loading>
            <i class='bx bxs-cart-alt' ></i> 购物车
          </vs-button>
          <vs-button relief upload>
            <i class='bx bxs-envelope' ></i> 发送
          </vs-button>
        </vs-button-group>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 切换 <Badge text="新增"/>

这是一个简单逻辑和几行代码可以实现的切换示例。

<template v-slot:example>
  <button-toggle />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-button
          @click="handleClick"
          :icon="success"
          :upload="sending"
          :color="success ? 'success' : 'primary'"
        >
          <span v-if="!success">
            <i class='bx bx-mail-send' ></i>
              发送
          </span>

          <i class='bx bx-check' v-else ></i>
        </vs-button>

        <vs-button
          :animate-inactive="successFace"
          @click="handleClickFace"
          :loading="loadingFace"
          color="facebook"
        >
          <i class='bx bxl-facebook-square' ></i>
          {{ successFace ? '登出' : 'Facebook' }}
          <template #animate >
            <i class='bx bx-user' ></i> 登录
          </template>
        </vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          sending: false,
          success: false,

          loadingFace: false,
          successFace: false
        }),
        methods:{
          handleClick() {
            this.sending = true

            setTimeout(() => {
              this.sending = false
              this.success = !this.success
            }, 2000);
          },
          handleClickFace() {
            this.loadingFace = true

            setTimeout(() => {
              this.loadingFace = false
              this.successFace = !this.successFace
            }, 2000);
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```html:no-line-numbers
    <style scoped lang="stylus">
      span
        display flex
        align-items center
        justify-content center
      i.bx:not(.bx-check)
        padding-right 5px
        font-size 1.1rem
    </style>
  ```

</template>

</card>

<card>

## 跳转 <Badge text="新增"/>

如果需要使用vue-router链接或外部链接等按钮，可以使用属性（`to`:vue-router链接）或（`href`:html外部链接）

<template v-slot:example>
  <button-toHref />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-button
          to="/"
          flat
          >
          跳转
        </vs-button>
        <vs-button
          href="http://vuesax.com/"
          success
          flat
        >
          路由替换
        </vs-button>
        <vs-button
          href="http://vuesax.com/"
          blank
          danger
          flat
        >
          外部链接
        </vs-button>
      </div>
    </template>
  ```

</template>

</card>

<card>

  ## API

</card>

