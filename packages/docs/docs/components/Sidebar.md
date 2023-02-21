---
PROPS:
  - name: open
    type: Boolean
    values: true,false
    description: 定义组件的展开/隐藏状态
    default: false
    link: null
    usage: '#open'

  - name: v-model
    type: String
    values: id
    description: 双向绑定组件被选中的导航
    default: null
    link: null
    usage: '#default'

  - name: absolute
    type: boolean
    values: true,false
    description: 定义组件是否为绝对定位(position absolute)
    default: false
    link: null
    usage: '#default'

  - name: relative
    type: Boolean
    values: true,false
    description: 定义组件是否为绝对定位(position relative)
    default: false
    link: null
    usage: '#default'

  - name: reduce
    type: Boolean
    values: true,false
    description: 定义组件是否为收缩状态
    default: false
    link: null
    usage: '#reduce'

  - name: hover-expand
    type: Boolean
    values: true,false
    description: 定义组件是否激活鼠标悬浮展开功能
    default: false
    link: null
    usage: '#hover-expand'

  - name: square
    type: Boolean
    values: true,false
    description: 定义组件的方形外观
    default: false
    link: null
    usage: null

  - name: notShadow
    type: Boolean
    values: true,false
    description: 定义组件是否保留阴影效果
    default: false
    link: null
    usage: null

  - name: background
    type: String
    values: lucid组件库内可定义的颜色 RGB, HEX
    description: 定义组件背景色
    default: false
    link: null
    usage: '#color'

  - name: textWhite
    type: Boolean
    values: true,false
    description: 定义组件字体为白色
    default: false
    link: null
    usage: '#color'

  - name: notLineActive
    type: Boolean
    values: true,false
    description: 定义是否显示导航栏定位条
    default: false
    link: null
    usage: null

  - name: vs-sidebar-item:to
    type: String
    values: url
    description: 定义跳转链接(vue-router)
    default: null
    link: null
    usage: null

  - name: vs-sidebar-item:href
    type: String
    values: url
    description: 定义一个外部跳转链接
    default: null
    link: null
    usage: null

  - name: right
    type: Boolean
    values: true,false
    description: 定义组件是否右侧显示
    default: null
    link: null
    usage: null

SLOTS:
  - name: logo
    type: slot
    values: null
    description: 定义组件顶部的logo位置内容
    default: null
    link: null
    usage: '#default'

  - name: footer
    type: slot
    values: null
    description: 定义组件顶部的底部位置内容
    default: null
    link: null
    usage: '#default'

  - name: header
    type: slot
    values: null
    description: 定义组件顶部的头部位置内容
    default: null
    link: null
    usage: null

  - name: vs-sidebar-item#icon
    type: slot
    values: null
    description: 定义导航栏item的图标 或 首字母
    default: null
    link: null
    usage: '#default'

NEWS:
  - name
---

# 侧边栏

<card>

## 默认

使用 `<vs-sidebar>` 组件生成一个侧边栏

您可以通过子组件 `<vs-sidebar-item>` 和 ` <vs-sidebar-group>` 进一步定义 子项目 和 分组功能

<template v-slot:example>
  <sidebar-default />
</template>

<template v-slot:template>

  ```html{4,5,6}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            市场概况
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            音乐
          </vs-sidebar-item>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            捐赠
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            饮品
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            购物
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            聊天
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>
                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 分组

使用 `vs-sidebar-group` 子组件定义分组功能

:::tip
  该组件有一个插槽 `header`, 我们在其中添加了一个子组件 `vs sidebar item`, 该组件带有属性**arrow** 并且没有属性id，以便在单击时不更改激活状态
:::

<template v-slot:example>
  <sidebar-group />
</template>

<template v-slot:template>

  ```html{4-6}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            市场概况
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            音乐
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                社交媒体
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                编程
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            捐赠
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            饮品
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            购物
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            聊天
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 收缩

使用 `reduce` 属性使组件宽度收缩为 50px 只会展示图标

:::tip
  为了使侧边栏正常工作，您可以将图标槽添加到item中，可以使用图标，也可以使用文本的第一个字母
:::

<template v-slot:example>
  <sidebar-reduce />
</template>

<template v-slot:template>

  ```html{4-7}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          reduce
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            市场概况
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            音乐
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                社交媒体
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                编程
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            捐赠
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            饮品
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            购物
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            聊天
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 悬浮展开

使用 `hoverExpand` 属性为组件添加悬浮展开状态

<template v-slot:example>
  <sidebar-reduceExpand />
</template>

<template v-slot:template>

  ```html{4-8}
    <template>
      <div class="hidden">
        <vs-sidebar
          absolute
          hover-expand
          reduce
          v-model="active"
          open
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Market Overview
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            Music
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                Social media
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                Coding
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            Donate
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            Drink
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            Shopping
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            Chat
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>

              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        active: 'home',
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 色彩

你可以改变侧边栏的颜色 必要的话可以使用 `textWhite` 属性将文本变为白色

<template v-slot:example>
  <sidebar-color />
</template>

<template v-slot:template>

  ```html{4-8}
    <template>
      <div class="hidden">
        <vs-sidebar
          background="primary"
          textWhite
          absolute
          v-model="active"
          open
          >
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            市场概况
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            音乐
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                社交媒体
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                编程
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            捐赠
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            饮品
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            购物
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            聊天
          </vs-sidebar-item>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        active: 'home',
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 展开隐藏

通过 `open` 属性控制组件的展开隐藏 默认为false

<template v-slot:example>
  <sidebar-open />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="hidden">
        <vs-navbar shadow square center-collapsed v-model="active">
          <template #left>
            <vs-button @click="activeSidebar = !activeSidebar" flat icon>
              <i class='bx bx-menu'></i>
            </vs-button>
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
            <vs-button flat >Login</vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
        <vs-sidebar
          absolute
          v-model="active"
          :open.sync="activeSidebar"
          >
          <template #logo>
            <!-- ...img logo -->
          </template>
          <vs-sidebar-item id="home">
            <template #icon>
              <i class='bx bx-home'></i>
            </template>
            主菜单
          </vs-sidebar-item>
          <vs-sidebar-item id="market">
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            市场概况
          </vs-sidebar-item>
          <vs-sidebar-item id="Music">
            <template #icon>
              <i class='bx bxs-music'></i>
            </template>
            音乐
          </vs-sidebar-item>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-group'></i>
                </template>
                社交媒体
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
              <template #icon>
                <i class='bx bxl-instagram'></i>
              </template>
              Instagram
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
              <template #icon>
                <i class='bx bxl-twitter' ></i>
              </template>
              Twitter
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
              <template #icon>
                <i class='bx bxl-facebook' ></i>
              </template>
              Facebook
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-group>
            <template #header>
              <vs-sidebar-item arrow>
                <template #icon>
                  <i class='bx bx-code-alt' ></i>
                </template>
                编程
              </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="github">
              <template #icon>
                <i class='bx bxl-github' ></i>
              </template>
              Github
            </vs-sidebar-item>
            <vs-sidebar-item id="codepen">
              <template #icon>
                <i class='bx bxl-codepen'></i>
              </template>
              Codepen
            </vs-sidebar-item>
            <vs-sidebar-item id="discord">
              <template #icon>
                <i class='bx bxl-discord'></i>
              </template>
              Discord
            </vs-sidebar-item>
            <vs-sidebar-item id="Javascript">
              <template #icon>
                <i class='bx bxl-javascript' ></i>
              </template>
              Javascript
            </vs-sidebar-item>
            <vs-sidebar-item id="git">
              <template #icon>
                <i class='bx bxl-git' ></i>
              </template>
              Git
            </vs-sidebar-item>
          </vs-sidebar-group>
          <vs-sidebar-item id="donate">
            <template #icon>
              <i class='bx bxs-donate-heart' ></i>
            </template>
            捐赠
          </vs-sidebar-item>
          <vs-sidebar-item id="drink">
            <template #icon>
              <i class='bx bx-drink'></i>
            </template>
            饮品
          </vs-sidebar-item>
          <vs-sidebar-item id="shopping">
            <template #icon>
              <i class='bx bxs-shopping-bags'></i>
            </template>
            购物
          </vs-sidebar-item>
          <vs-sidebar-item id="chat">
            <template #icon>
              <i class='bx bx-chat' ></i>
            </template>
            聊天
          </vs-sidebar-item>
          <template #footer>
            <vs-row justify="space-between">
              <vs-avatar>
                <img src="/avatars/avatar-5.png" alt="">
              </vs-avatar>

              <vs-avatar badge-color="danger" badge-position="top-right">
                <i class='bx bx-bell' ></i>

                <template #badge>
                  28
                </template>
              </vs-avatar>
            </vs-row>
          </template>
        </vs-sidebar>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5,6}
    <script>
    export default {
      data:() => ({
        active: 'home',
        activeSidebar: false
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 右侧展示

通过 `right` 属性 使组件右侧展示

<template v-slot:example>
  <sidebar-right />
</template>

<template v-slot:template>

  ```html{2}
    <vs-sidebar
      right
      absolute
      v-model="active"
      open
      >
      <template #logo>
        ...
      </template>
      <template #header>

      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        主菜单
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        市场概况
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class='bx bxs-music'></i>
        </template>
        音乐
      </vs-sidebar-item>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class='bx bxs-donate-heart' ></i>
        </template>
        捐赠
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class='bx bx-drink'></i>
        </template>
        饮品
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class='bx bxs-shopping-bags'></i>
        </template>
        购物
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat' ></i>
        </template>
        聊天
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 'home',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
