---
PROPS:
    #__________________________________
  - name: type
    type: String
    values: waves, corners, border, points, square, gradient, rectangle, circles, square-rotate, scale
    description: 更改加载类型
    default: default
    link: null
    usage: '#type'
    #__________________________________
  - name: color
    type: String
    values: lucid组件库内可定义的颜色 (RGB 或 HEX)
    description: 定义加载动画的颜色
    default: primary
    link: /docs/theme/
    usage: '#color'
    #__________________________________
  - name: background
    type: String
    values: lucid组件库内可定义的颜色 (RGB 或 HEX)
    description: 定义加载动画的背景色
    default: '#fff'
    link: /docs/theme/
    usage: '#background'
    #__________________________________
  - name: text
    type: String
    values: String
    description: 定义加载时的文字提示
    default: null
    link: null
    usage: '#text'
    #__________________________________
  - name: percent
    type: String
    values: (0% - 100%)
    description: 定义加载进度的百分比
    default: null
    link: null
    usage: '#percent'
    #__________________________________
  - name: progress
    type: String || Number
    values: (0 - 100)
    description: 在加载中添加一个进度条 值就是进度
    default: null
    link: null
    usage: '#progress'
    #__________________________________
  - name: target
    type: String || html || ref
    values: String || html || ref
    description: 定义加载动画展示的目标容器元素
    default: null
    link: null
    usage: '#target'
    #__________________________________
  - name: opacity
    type: String || Number
    values: (0 - 1)
    description: 定义透明度
    default: '0.6'
    link: null
    usage: '#target'
    code: >
      #__________________________________
  - name: scale
    type: String || Number
    values: (0 - 1)
    description: 改变尺寸
    default: '1'
    link: null
    usage: '#target'
  #__________________________________
  - name: changePercent()
    type: function
    values: String
    description: 改变百分比
    default: null
    link: null
    usage: '#percent'
  #__________________________________
  - name: changeProgress()
    type: function
    values: String
    description: 改变进度
    default: null
    link: null
    usage: '#progress'
  #__________________________________
  - name: changeText()
    type: function
    values: String
    description: 改变文本
    default: null
    link: null
    usage: null
    code: null

UPDATE:
  - type

NEWS:
  - 文言
  - 百分比
  - 进度
  - 选定目标
---

# 加载

<card>

## 默认

调用lucid提供的全局函数 `$vs.loading(options)` 生成一个加载中提示

<template v-slot:example>
  <loading-default />
</template>

<template v-slot:template>

  ```html{2}
    <template>
      <vs-button @click="openLoading">激活加载</vs-button>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{5,7}
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading()
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 类型 <Badge text="Update" type="warn" />

通过 `type` 属性改变加载类型

支持以下值:
  - waves 波纹
  - corners 角
  - border 边框
  - points 点
  - square 方形
  - gradient 渐变
  - rectangle 长方形
  - circles 圆形
  - square-rotate 旋转
  - scale 长度

::: tip
  点击可在全屏展示效果
:::

<template v-slot:example>
  <loading-type />
</template>

<template v-slot:template>

  ```html
    <template>
      <div
        :class="{ hasOpenLoading }">
        <div
          v-for="(type, i) in types"
          :ref="`box${i}`"
          @click="handleClickLoading(type)"
          class="box-loading" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data: () => ({
          hasOpenLoading: false,
          types: [
            'default',
            'waves',
            'corners',
            'border',
            'points',
            'square',
            'gradient',
            'rectangle',
            'circles',
            'square-rotate',
            'scale'
          ]
        }),
        methods: {
          handleClickLoading(type) {
            const loading = this.$vs.loading({
              type
            })
            this.hasOpenLoading = true
            setTimeout(() => {
              loading.close()
              this.hasOpenLoading = false
            }, 3000)
          },
          openLoading(type, ref) {
            this.$vs.loading({
              target: this.$refs[ref][0],
              text: type,
              type
            })
          }
        },
        mounted() {
          this.types.forEach((type, i) => {
            this.openLoading(type, `box${i}`)
          })
        }
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```html{3,4,5}
    <style scoped lang="stylus">
      .hasOpenLoading
        .box-loading
          opacity 0
          transform scale(.7)
      .box-loading
        width 120px
        height 120px
        position relative
        margin 5px
        border-radius 20px
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
        overflow hidden
        cursor pointer
        transition all .25s ease
        &:hover
          transform translate(0,-5px)
          box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
        >>>.vs-loading
          padding 0px
    </style>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` 属性改变颜色 颜色支持(**RGB**, **HEX**)值

<template v-slot:example>
  <loading-color />
</template>

<template v-slot:template>

  ```html
    <template>
      <div
        :class="{ hasOpenLoading }"
        class="center">
        <div :style="`background: ${color};`" class="con-input">
          <input v-model="color" type="color">
          <i class='bx bxs-color-fill'></i>
        </div>
        <div ref="loadings" class="con-loadings">
          <div
            v-for="(type, i) in types"
            :ref="`box${i}`"
            @click="handleClickLoading(type)"
            class="box-loading" />
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data: () => ({
          color: '#d5397b',
          hasOpenLoading: false,
          types: [
            'default',
            'waves',
            'corners',
            'border',
            'points',
            'square',
            'gradient',
            'rectangle',
            'circles',
            'square-rotate',
            'scale'
          ]
        }),
        methods: {
          handleClickLoading(type) {
            const loading = this.$vs.loading({
              type,
              color: this.color
            })
            this.hasOpenLoading = true
            setTimeout(() => {
              loading.close()
              this.hasOpenLoading = false
            }, 3000)
          },
          openLoading(type, ref) {
            this.$vs.loading({
              target: this.$refs[ref][0],
              text: type,
              type,
              color: this.color
            })
          }
        },
        watch: {
          color() {
            this.$refs.loadings.querySelectorAll('.box-loading').forEach((item) => {
              item.innerHTML = ''
            })
            this.types.forEach((type, i) => {
              this.openLoading(type, `box${i}`)
            })
          }
        },
        mounted() {
          this.types.forEach((type, i) => {
            this.openLoading(type, `box${i}`)
          })
        }
      }
      </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style scoped lang="stylus">
      getColor(vsColor, alpha = 1)
          unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")
      .con-input
        border-radius 10px
        border 4px solid getVar(theme-layout)
        box-shadow 0px 4px 10px 0px rgba(0,0,0,.1)
        display flex
        align-items center
        justify-content center
        transition all .25s ease
        &:hover
          transform translate(0, -4px)
          box-shadow 0px 8px 10px 0px rgba(0,0,0,.1)
        input
          opacity 0
          width 30px
          height 30px
          border 0px
          cursor pointer
        i
          position absolute
          color getVar(theme-layout)
          pointer-events none
      .con-loadings
        display flex
        align-items center
        justify-content center
        flex-wrap wrap
      .center
        flex-wrap wrap
        z-index 200
        position relative
        padding 20px 10px
        &.hasOpenLoading
          .box-loading
            opacity 0
            transform scale(.7)
      .box-loading
        width 120px
        height 120px
        position relative
        margin 5px
        border-radius 20px
        box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
        overflow hidden
        cursor pointer
        transition all .25s ease
        &:hover
          transform translate(0,-5px)
          box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
        >>>.vs-loading
          padding 0px
          background transparent !important
          &.vs-loading--gradient, &.vs-loading--square
            .vs-loading__load__animation__2
              background getVar(theme-layout) !important
      </style>
  ```

</template>

</card>

<card>

## 背景

使用 `background` 属性指定加载时的背景色

<template v-slot:example>
  <loading-background />
</template>

<template v-slot:template>

  ```html
    <div ref="target" id="target" class="center">
      <div :style="`background: ${color};`" class="con-input">
        <input v-model="color" type="color">
        <i class='bx bxs-color-fill'></i>
      </div>
      <vs-button flat :color="color" @click="openLoading">激活加载</vs-button>
    </div>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data: () => ({
          color: '#7a76cb',
        }),
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              background: this.color,
              color: '#fff'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 文言 <Badge text="New" />

使用`text`属性 添加加载中的文言

<template v-slot:example>
  <loading-text />
</template>

<template v-slot:template>

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">激活加载 <b>文言</b></vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              text: '加载中...'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 百分比 <Badge text="New" />

使用 `percent` 属性指定加载中进度的百分比 通过实例方法 `changePercent` 改变百分比

<template v-slot:example>
  <loading-percent />
</template>

<template v-slot:template>

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">激活加载 <b>百分比</b></vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data: () => ({
          percent: 0
        }),
        methods: {
          openLoading() {

            const loading = this.$vs.loading({
              percent: this.percent
            })
            const interval = setInterval(() => {
              if (this.percent <= 100) {
                loading.changePercent(`${this.percent++}%`)
              }
            }, 40)
            setTimeout(() => {
              loading.close()
              clearInterval(interval)
              this.percent = 0
            }, 4100)
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 进度 <Badge text="New" />

通过 `progress` 属性为组件增加进度条 范围为(0 - 100)

<template v-slot:example>
  <loading-progress />
</template>

<template v-slot:template>

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <vs-button flat @click="openLoading">激活加载 <b>进度条</b></vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data: () => ({
          progress: 0
        }),
        methods: {
          openLoading() {

            const loading = this.$vs.loading({
              progress: 0
            })
            const interval = setInterval(() => {
              if (this.progress <= 100) {
                loading.changeProgress(this.progress++)
              }
            }, 40)
            setTimeout(() => {
              loading.close()
              clearInterval(interval)
              this.progress = 0
            }, 4100)
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## 选定目标 <Badge text="New" />

使用 `target` 属性为组件选定目标容器 您可以传入字符串值来指定容器元素的 `id` 或 `class` 结果必须是单一的 您也可以使用 `$refs` 来指定

<template v-slot:example>
  <loading-target />
</template>

<template v-slot:template>

  ```html
    <template>
      <div ref="target" id="target" class="center">
        <div class="con-btns">
          <vs-button ref="button"
                     flat 
                     @click="openLoadingButton">
            激活加载 <b>按钮</b>
          </vs-button>
          <vs-button dark 
                     flat
                     @click="openLoading">
            激活加载 <b>选定目标</b>
          </vs-button>
        </div>

        <div ref="content" class="content-div">
          目标容器
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        methods: {
          openLoading() {
            const loading = this.$vs.loading({
              target: this.$refs.content,
              color: 'dark'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          },
          openLoadingButton() {
            console.log(this.$refs.button.$el)
            const loading = this.$vs.loading({
              target: this.$refs.button,
              scale: '0.6',
              background: 'primary',
              opacity: 1,
              color: '#fff'
            })
            setTimeout(() => {
              loading.close()
            }, 3000)
          }
        }
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style scoped lang="stylus">
      .con-btns
        display flex
        align-items center
        justify-content center
        b
          margin-left 5px
      .center
        flex-direction column
        .content-div
          width 200px
          height 200px
          box-shadow 0px 6px 25px -10px rgba(0,0,0,.1)
          border-radius 20px
          position relative
          display flex
          align-items center
          justify-content center
          flex-direction column
          text-align center
          font-size .6rem
    </style>
  ```

</template>

</card>

<card>

## API

</card>
