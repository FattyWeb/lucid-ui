---
PROPS:
  - name: v-model
    type: boolean
    values: true,false
    description: 双向绑定组件的值(是否隐藏)
    default: false
    link: null
    usage: '#content'
    code: null

  - name: color
    type: String
    values: lucid组件库内可定义的颜色 (RGB 或 HEX)
    description: 改变组件颜色
    default: text
    link: null
    usage: '#color'

  - name: left, right, bottom
    type: Boolean
    values: true,false
    description: 定义组件出现的位置
    default: top
    link: null
    usage: '#position'

  - name: border
    type: Boolean
    values: true,false
    description: 定义组件边框效果
    default: primary
    link: null
    usage: '#border'

  - name: border-thick
    type: Boolean
    values: true,false
    description: 定义组件边框效果 类型Ⅱ
    default: false
    link: null
    usage: '#border'

  - name: square
    type: Boolean
    values: trie,false
    description: 定义组件方形外观
    default: false
    link: null
    usage: '#square'

  - name: circle
    type: boolean
    values: true,false
    description:  定义组件圆形外观
    default: false
    link: null
    usage: '#circle'

  - name: shadow
    type: boolean
    values: true,false
    description: 定义组件的阴影效果
    default: false
    link: null
    usage: '#shadow'

  - name: not-arrow
    type: boolean
    values: true,false
    description: 取消箭头指示
    default: false
    link: null
    usage: '#not-arrow'

  - name: not-hover
    type: boolean
    values: true,false
    description: 取消悬停触发
    default: false
    link: null
    usage: '#content'

  - name: interactivity
    type: boolean
    values: true,false
    description: 定义组件是否是交互式的 是否可以在不自动隐藏的情况下单击
    default: false
    link: null
    usage: '#content'

  - name: loading
    type: boolean
    values: true,false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'

SLOTS:
  - name: default
    type: slot
    values: null
    description: 定义一个能够触发组件显示的目标元素
    default: null
    link: null
    usage: '#default'
    
  - name: tooltip
    type: slot
    values: null
    description: 定义组件展示的内容
    default: null
    link: null
    usage: '#default'

NEWS:
  - 边框
  - 方形
  - 圆形
  - 阴影
  - 无箭头
  - 加载
  - 自定义内容
---

# 文字提示

<card>

## 默认

对目标外部包裹 `<vs-tooltip>` 组件 使目标具有文字提示效果, 目标相当于组件的默认 `default` 插槽

<template v-slot:example>
  <tooltip-default />
</template>

<template v-slot:template>

  ```html{3-10}
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button flat>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 位置

使用以下属性改变提示显示的位置

- top (默认)
- bottom
- left
- right

<template v-slot:example>
  <tooltip-position />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip left>
          <vs-button border>
            左侧
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip>
          <vs-button border>
            顶部
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip bottom>
          <vs-button border>
            底部
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip right>
          <vs-button border>
            右侧
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 色彩

<coloren />

<template v-slot:example>
  <tooltip-color />
</template>

<template v-slot:template>

  ```html{11}
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button shadow>
            Default
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip primary>
          <vs-button flat>
            Primary
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip success>
          <vs-button success flat>
            Success
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip danger>
          <vs-button danger flat>
            Danger
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip warn>
          <vs-button warn flat>
            Warning
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip dark>
          <vs-button dark flat>
            Dark
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="#7d33ff">
          <vs-button color="#7d33ff" flat>
            HEX
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="rgb(59,222,200)">
          <vs-button color="rgb(59,222,200)" flat>
            RGB
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 边框

使用 `border` 或 `border-thick` 属性 来为组件增加边框

::: tip
边框会颜色和 `color` 属性一致
:::

<template v-slot:example>
  <tooltip-border />
</template>

<template v-slot:template>

  ```html{3,19}
    <template>
      <div class="center">
        <vs-tooltip border>
          <vs-button transparent>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip danger border>
          <vs-button danger transparent>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
        <vs-tooltip color="#7d33ff" border-thick>
          <vs-button color="#7d33ff" transparent>
           将光标移到此处
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 方形

使用 `square` 属性 使组件变为方形

<template v-slot:example>
  <tooltip-square />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip square>
          <vs-button square flat>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 圆形

使用 `circle` 属性 使头像变为圆形

::: tip
该属性只作用于单行文本
:::

<template v-slot:example>
  <tooltip-circle />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip circle>
          <vs-button circle flat>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 阴影

使用 `shadow` 使组具有阴影效果

<template v-slot:example>
  <tooltip-shadow />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip shadow>
          <vs-button flat>
            Do hover here
          </vs-button>
          <template #tooltip>
            This is a beautiful button
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>


<card>

## 无箭头

使用 `not-arrow` 属性 移除组件的箭头

<template v-slot:example>
  <tooltip-notArrow />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip not-arrow left>
          <vs-button border>
            左侧 无箭头
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow>
          <vs-button border>
            顶部 无箭头
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow bottom>
          <vs-button border>
            底部 无箭头
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip not-arrow right>
          <vs-button border>
            右侧 无箭头
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 加载

使用 `loading` 属性 可以添加加载中状态

<template v-slot:example>
  <tooltip-loading />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-tooltip loading>
          <vs-button flat>
            将光标移到此处
          </vs-button>
          <template #tooltip>
            这是一个精美的按钮
          </template>
        </vs-tooltip>
        <vs-tooltip loading>
          <vs-button flat>
            将光标移到此处
          </vs-button>
          <template #tooltip></template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 自定义内容

您可以对默认插槽自定义内容

<template v-slot:example>
  <tooltip-content />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center">
        <vs-tooltip>
          <vs-button gradient>
            什么是Lucid?
          </vs-button>
          <template #tooltip>
            <div class="content-tooltip">
              <h4>
                什么是Lucid?
              </h4>
              <p>
                Lucid 是一个基于vue3的 ui组件库
              </p>
            </div>
          </template>
        </vs-tooltip>
        <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
          <vs-button danger @click="activeTooltip1=!activeTooltip1">
            点击删除用户
          </vs-button>
          <template #tooltip>
            <div class="content-tooltip">
              <h4 class="center">
                确认
              </h4>
              <p>
                确定要删除此用户吗? 删除后数据不可恢复
              </p>
              <footer>
                <vs-button @click="activeTooltip1=false" danger block>
                  删除
                </vs-button>
                <vs-button @click="activeTooltip1=false" transparent dark block>
                  取消
                </vs-button>
              </footer>
            </div>
          </template>
        </vs-tooltip>
        <vs-tooltip shadow interactivity>
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
          <template #tooltip>
            <div class="content-tooltip">
              <div class="body">
                <div class="text">
                    已完成任务
                  <span>
                    89
                  </span>
                </div>
                <vs-avatar circle size="80" @click="activeTooltip1=!activeTooltip1">
                  <img src="/avatars/avatar-5.png" alt="">
                </vs-avatar>
                <div class="text">
                    未完成任务
                  <span>
                    8
                  </span>
                </div>
              </div>
              <footer>
                <vs-button circle icon border>
                  <i class='bx bxs-share-alt'></i>
                </vs-button>
                <vs-button circle>
                  发送信息
                </vs-button>
                <vs-button circle icon border>
                  <i class='bx bx-like' ></i>
                </vs-button>
              </footer>
            </div>
          </template>
        </vs-tooltip>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          activeTooltip1: false
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
      getColor(colorx, alpha = 1)
          unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
      getVar(var)
          unquote("var(--vs-"+var+")")

      .content-tooltip
        .body
          display flex
          align-items flex-start
          justify-content center
          .vs-avatar-content
            margin-top -30px
            border 3px solid getVar('theme-layout')
            box-shadow 0px 4px 15px 0px rgba(0,0,0,.1)
          .text
            display flex
            align-items center
            justify-content center
            flex-direction column
            font-size .55rem
            padding 10px
            font-weight normal
            span
              font-weight bold
              font-size .7rem
        footer
          display flex
          align-items center
          justify-content center
        h4
          padding 8px
          margin 0px
          text-align left
        p
          text-align left
          padding 0px
          margin 0px
          line-height 1rem
          padding-bottom 5px
          padding-left 8px
      </style>
  ```

</template>

</card>

<card>

## API

</card>
