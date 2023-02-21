---
PROPS:
  - name: fixed
    type: boolean
    values: true,false
    description: 定义组件是否固定(fixed)在屏幕上。
    default: false
    link: null
    usage: null

  - name: shadow
    type: boolean
    values: true,false
    description: 定义组件的阴影效果
    default: primary
    link: null
    usage: null

  - name: shadowScroll
    type: boolean
    values: true,false
    description: 在scrollTop大于0时向组件添加阴影。
    default: false
    link: null
    usage: null

  - name: hideScroll
    type: boolean
    values: true,false
    description: 定义组件导航栏向下滚动时隐藏
    default: false
    link: null
    usage: '#hide-scroll'

  - name: textWhite
    type: boolean
    values: true,false
    description: 定义组件字体为白色
    default: false
    link: null
    usage: '#color'

  - name: square
    type: boolean
    values: true,false
    description: 定义组件外观为方形
    default: false
    link: null
    usage: '#square'

  - name: paddingScroll
    type: boolean
    values: true,false
    description: 去掉组件的定位条
    default: false
    link: null
    usage: '#padding-scroll'

  - name: notLine
    type: boolean
    values: true,false
    description: 定义是否显示导航栏定位条
    default: false
    link: null
    usage: '#not-line'

  - name: leftCollapsed
    type: boolean
    values: true,false
    description: 当此left插槽的元素无法正确执行时，可以将其删除
    default: false
    link: null
    usage: '#default'

  - name: centerCollapsed
    type: boolean
    values: true,false
    description: 当此center插槽的元素无法正确执行时，可以将其删除
    default: false
    link: null
    usage: '#default'

  - name: rightCollapsed
    type: boolean
    values: true,false
    description:  当此right插槽的元素无法正确执行时，可以将其删除
    default: false
    link: null
    usage: '#default'

  - name: targetScroll
    type: boolean
    values: true,false
    description: 为滚动隐藏(paddingScroll)指定目标对象
    default: document
    link: null
    usage: '#padding-scroll'

  - name: item:active
    type: boolean
    values: true,false
    description: 指定导航被激活的条件
    default: false
    link: null
    usage: '#default'

  - name: item:to
    type: string
    values: url
    description: 定义跳转链接(vue-router)
    default: false
    link: null
    usage: null

  - name: item:id
    type: string
    values: id
    description: 导航item的唯一标识
    default: false
    link: null
    usage: null

  - name: item:href
    type: string
    values: url
    description: 定义一个外部跳转链接
    default: false
    link: null
    usage: null

  - name: item:target
    type: string
    values: html-target
    description: 新跳转是新打开还是替换当前
    default: '_blank'
    link: null
    usage: null

SLOTS:
  - name: default
    type: slot
    values: null
    description: 定义组件中间的内容
    default: null
    link: null
    usage: '#default'
    
  - name: left
    type: slot
    values: null
    description: 定义组件左侧的内容
    default: null
    link: null
    usage: '#default'

  - name: right
    type: slot
    values: null
    description: 定义组件右侧的内容
    default: null
    link: null
    usage: '#default'

NEWS:
  - name
---

# 导航

<card>

## 默认

使用 `<vs-navbar>` 生成一个导航栏组件 组件有三个插槽(**left**, **center** (默认), **right**)

您可以通过子组件 `<vs-navbar-item>` 和 ` <vs-navbar-group>` 进一步定义 子项目 和 分组功能

:::tip
更详细的例子您可以点击 [这里](/examples/navbar.html)
:::

<template v-slot:example>
  <navbar-default />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-navbar center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            导航
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            文档
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            组件
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            协议
          </vs-navbar-item>
          <template #right>
            <vs-button flat >登录</vs-button>
            <vs-button>开始使用</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            子元素 1
          </div>
          <div class="child">
            子元素 2
          </div>
          <div class="child">
            子元素 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` 属性改变组件颜色

使用 `text-white` 可以使字体变为白色

<template v-slot:example>
  <navbar-color />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar text-white :color="active" center-collapsed v-model="active">
          <template #left>
            <img src="/logos/logo-lucid-logotipo-lucid-png-4.png" alt="">
          </template>
          <template #right>
            <vs-navbar-item :active="active == 'primary'" id="primary">
              Primary
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'success'" id="success">
              Success
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'danger'" id="danger">
              Danger
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'warn'" id="warn">
              Warn
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'dark'" id="dark">
              Dark
            </vs-navbar-item>
            <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
              HEX
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
              RGB
            </vs-navbar-item>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'primary'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 滚动隐藏

使用 `hide-scroll` 属性设置导航为滚动隐藏 `target-scroll` 用来指定目标对象

<template v-slot:example>
  <navbar-hideScroll />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center examplex">
        <vs-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            Guide
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            license
          </vs-navbar-item>
          <template #right>
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
        <div id="hide-scroll-content" class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 分组

使用 `<vs-navbar-group>` 组件增加一个分组 分组中的子项目用 `vs-navbar-item` 组件包裹

<template v-slot:example>
  <navbar-group />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-group>
            文档
            <template #items>
              <vs-navbar-item :active="active == 'guide'" id="guide">
                导航
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'docs'" id="docs">
                文档
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'components'" id="components">
                组件
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-group>
            生态

            <template #items>
              <h5 class="title">
                社交
              </h5>

              <vs-navbar-item :active="active == 'Github'" id="Github">
                Github
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Discord'" id="Discord">
                微信
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
                微博
              </vs-navbar-item>
              <vs-navbar-item :active="active == 'Medium'" id="Medium">
                知乎
              </vs-navbar-item>
            </template>
          </vs-navbar-group>

          <vs-navbar-item :active="active == 'License'" id="License">
            License
          </vs-navbar-item>

          <template #right>
            <vs-button flat >登录</vs-button>
            <vs-button>开始使用</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            子元素 1
          </div>
          <div class="child">
            子元素 2
          </div>
          <div class="child">
            子元素 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 滚动动态边距

使用 `padding-scroll` 属性 当滚动到顶部时增加导航栏边距

<template v-slot:example>
  <navbar-paddingScroll />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            导航
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            文档
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            组件
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            协议
          </vs-navbar-item>
          <template #right>
            <vs-button flat >登录</vs-button>
            <vs-button>开始使用</vs-button>
          </template>
        </vs-navbar>
        <div id="padding-scroll-content" class="square">
          <div class="child">
            子元素 1
          </div>
          <div class="child">
            子元素 2
          </div>
          <div class="child">
            子元素 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 方形

通过 `square` 属性并去掉 `border-radius` 属性来为组件添加方形效果

<template v-slot:example>
  <navbar-square />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center examplex">
        <vs-navbar color="#7d33ff" text-white square center-collapsed v-model="active">
          <template #left>
            <img src="/logos/logo-lucid-logotipo-lucid-png-4.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            文档
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            Components
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            license
          </vs-navbar-item>
          <template #right>
            <vs-button color="#fff" flat >Login</vs-button>
            <vs-button color="#fff" border >Get Started</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            child 1
          </div>
          <div class="child">
            child 2
          </div>
          <div class="child">
            child 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 无定位条

使用 `not-line` 属性去掉组件的定位条

<template v-slot:example>
  <navbar-notLine />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center example-nav">
        <vs-navbar not-line center-collapsed v-model="active">
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            导航
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            文档
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            组件
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'license'" id="license">
            协议
          </vs-navbar-item>
          <template #right>
            <vs-button flat >登录</vs-button>
            <vs-button>开始使用</vs-button>
          </template>
        </vs-navbar>
        <div class="square">
          <div class="child">
            子元素 1
          </div>
          <div class="child">
            子元素 2
          </div>
          <div class="child">
            子元素 3
          </div>
        </div>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
    export default {
      data:() => ({
        active: 'guide'
      })
    }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
