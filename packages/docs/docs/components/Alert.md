---
PROPS:
  - name: v-model
    type: boolean
    values: boolean
    description: 控制组件显示隐藏
    default: true
    link: null
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Lucid 组件库
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
    usage: '#closable'
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: 改变组件颜色
    default: primary
    link: null
    usage: '#color'
    code: >
            <vs-alert color="success">
              <template #title>
                Lucid 组件库
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: type
    type: boolean
    values: solid, border, shadow,gradient,relief
    description: 改变组建外观样式
    default: default
    link: null
    usage: '#solid'
    code: >
            <vs-alert solid>
              <template #title>
                Lucid 组件库
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: hidden-content
    type: boolean
    values: boolean
    description: 隐藏组件
    default: false
    link: null
    usage: '#hidden-content'
    code: >
            <template>
              <vs-alert :hidden-content="true" >
                <template #title>
                  Lucid 组件库
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>
  - name: page
    type: Number
    values: Number
    description: 分页 (使用插槽定义分页 slots="page-{n}").
    default: null
    link: null
    usage: '#pagination'
    code: >
            <template>
              <vs-alert :page="1" >
                <template #title>
                  Lucid 组件库
                </template>
                <template #page-1>
                  Page 1 - this page is a slot and here you can add either text, html elements or components
                </template>
              </vs-alert>
            </template>
  - name: progress
    type: Number
    values: 0 - 100
    description: 进度条
    default: null
    link: null
    usage: '#progress-bar'
    code: >
            <vs-alert progress="70">
              <template #title>
                Lucid 组件库
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
  - name: closable
    type: boolean
    values: boolean
    description: 是否支持可关闭选项
    default: false
    link: null
    usage: '#closable'
    code: >
            <template>
              <vs-button flat @click="active=!active">
                {{ active ? 'Close Alert' : 'Open Alert' }}
              </vs-button>

              <vs-alert closable v-model="active">
                <template #title>
                  Lucid 组件库
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </template>

            <script>
              export default {
                data:() => ({
                  active: true,
                })
              }
            </script>
SLOTS:
  - name: icon
    type: slot
    values: null
    description: 为组价增加图标
    default: null
    link: null
    usage: '#icon'
    code: >
          <template>
            <vs-alert>
              <template #icon>
                <i class='bx bxs-chat'></i>
              </template>
              <template #title>
                Vuesax Alert Icon
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
            </vs-alert>
          </template>
  - name: title
    type: slot
    values: null
    description: 为组价增加标题
    default: null
    link: null
    usage: '#title'
    code: >
          <template>
            <div class="center">
              <vs-alert>
                <template #title>
                  Vuesax Alert Title
                </template>
                Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
                created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
                Unique and pleasant style, Vuesax is created from scratch and designed for all types of
                developed from the frontend lover to the backend that wants to easily create
                your visual approach to the end user
              </vs-alert>
            </div>
          </template>
  - name: page-{n}
    type: slot
    values: (page-1 - page-{n})
    description: 分页 (使用插槽定义分页 slots="page-{n}")
    default: null
    link: null
    usage: '#pagination'
    code: >
          <template>
            <vs-alert :page.sync="page" >
              <template #title>
                Lucid 组件库
              </template>

              <template #page-1>
                Page 1 - this page is a slot and here you can add either text,
                html elements or components
              </template>
            </vs-alert>
          </template>
  - name: footer
    type: slot
    values: null
    description: 定义页脚区内容
    default: null
    link: null
    usage: '#footer'
    code: >
            <vs-alert>
              <template #title>
                Lucid 组件库
              </template>
              Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
              created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
              Unique and pleasant style, Vuesax is created from scratch and designed for all types of
              developed from the frontend lover to the backend that wants to easily create
              your visual approach to the end user
              <template #footer>
                <vs-button flat>
                  Cancel
                </vs-button>
                <vs-button>
                  Accept
                </vs-button>
              </template>
            </vs-alert>
NEWS:
  - 填充
  - 边框
  - 阴影
  - 渐变
  - 悬浮
  - 动画
  - 隐藏内容
  - 分页
  - 页脚
  - 进度条
  - 计时关闭
---

# 警告框

<card>

## 默认

警告框组件，可以控制该组件隐藏和显示颜色变化和标题图标等功能

<template v-slot:example>
    <div>
      <div class="center">
        <vs-alert>
          <template #title>
            Lucid 组件库
          </template>
          Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>，用于轻松的创建项目，具有独特而精美的风格。
          Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
        </vs-alert>
      </div>
    </div>
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <vs-alert>
        <template #title>
          Lucid 组件库
        </template>
        Lucid是一个基于Vuejs3.x创建的UI组件框架，用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
      </vs-alert>
    </template>
  ```
</template>
</card>

<card>

## 填充 <Badge text="新增"/>

添加 `solid` 属性可以实现填充效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <div class="center">
    <vs-alert solid>
      <template #title>
        Lucid 组件库
      </template>
        Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{1}:no-line-numbers
    <vs-alert solid>
      <template #title>
        Lucid 组件库
      </template>
        Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```

</template>

</card>

<card>

## 边框 <Badge text="New"/>

添加 `border` 属性可以为组件增加边框效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <div class="center">
    <vs-alert border>
      <template #title>
        Lucid 组件库
      </template>
        Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html:no-line-numbers{1}
    <vs-alert border>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```
</template>
</card>

<card>

## 阴影 <Badge text="New"/>

添加 `shadow` 属性可以为组件增加阴影效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <div class="center">
    <vs-alert shadow>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{1}:no-line-numbers
    <vs-alert shadow>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```
</template>

</card>

<card>

## 渐变 <Badge text="New"/>

添加 `gradient` 属性可以为组件增加渐变效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <div class="center">
    <vs-alert gradient>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{1}:no-line-numbers
    <vs-alert gradient>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```
</template>

</card>

<card>

## 悬浮 <Badge text="New"/>

添加 `gradient` 属性可以为组件增加悬浮效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <div class="center">
    <vs-alert relief>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{1}:no-line-numbers
    <vs-alert relief>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```
</template>

</card>

<card>

## 动画

关闭和打开时 组件有精美的动画效果。

<template v-slot:example>
  <alert-animate />
</template>

<template v-slot:template>

  ```html{1}:no-line-numbers
    <vs-button @click="active=!active">{{ active ? 'Close Alert' : 'Open Alert' }}</vs-button>

    <vs-alert closable v-model:value="active">
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```

</template>

<template v-slot:script>

  ```js{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
            active: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 颜色

通过 `color` 属性改变整个警告框的颜色，组件本身也内置了5种颜色。

<template v-slot:example>
  <alert-color />
</template>

<template v-slot:template>

  ```html{2}:no-line-numbers
    <template>
      <vs-alert :color="color">
        <template #title>
          Lucid 组件库
        </template>
        Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
      </vs-alert>

      <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
        主色
      </vs-button>
      <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
        成功
      </vs-button>
      <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
        危险
      </vs-button>
      <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
        警告
      </vs-button>
      <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
        暗色
      </vs-button>
      <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
        HEX
      </vs-button>
      <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
        RGB
      </vs-button>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data: () => ({
          color: 'danger'
        })
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```html:no-line-numbers
    <style scoped lang="stylus">
      .alert-example
        .vs-button--active
          transform translate(0, -5px)
          border-radius 0px 0px 12px 12px
    </style>
  ```

</template>


</card>

<card>

## 图标
 
插槽 **icon** 可以为组添加图标。

<utils-icon />

<template v-slot:example>
  <div class="center">
    <vs-alert>
      <template #icon>
        <i class='bx bxs-chat'></i>
      </template>
      <template #title>
        Lucid 组件库图标
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{3,4,5}:no-line-numbers
    <template>
      <vs-alert>
        <template #icon>
          <i class='bx bxs-chat'></i>
        </template>
        <template #title>
          Vuesax Alert Icon
        </template>
        lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>，它可以轻松地创建项目，并具有独特而愉悦的风格。
        Vuesax是从头创建的，专为从前端到后端的所有类型的开发而设计，这些开发都希望轻松地为最终用户创建可视化方法
      </vs-alert>
    </template>
  ```
</template>

</card>

<card>

## 标题

插槽 `slot="title"` 可以为组件添加标题

<template v-slot:example>
  <div class="center">
    <vs-alert>
      <template #title>
        警告框标题
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{4,5,6}:no-line-numbers
    <template>
      <div class="center">
        <vs-alert>
          <template #title>
            警告框标题
          </template>
          Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
          Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
        </vs-alert>
      </div>
    </template>
  ```
</template>

</card>

<card>

## 隐藏内容 <Badge text="New"/>

你可以隐藏组建的内容，此时组件只会显示一个标题。

<template v-slot:example>
  <alert-hiddenContent />
</template>

<template v-slot:template>

  ```html{2}:no-line-numbers
    <template>
      <vs-alert :hidden-content.sync="hidden" >
        <template #title>
          Lucid 组件库
        </template>
        Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
        Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
      </vs-alert>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          hidden: true
        })
      }
    </script>
  ```
</template>
</card>

<card>

## 分页 <Badge text="New"/>

当内容过多且您不想让警告框占用过大时，您可以使用分页来显示内容。

<template v-slot:example>

  <alert-pagination />

</template>

<template v-slot:template>

  ```html{2,7,12,17}:no-line-numbers
    <template>
      <vs-alert :page.sync="page" >
        <template #title>
            Lucid 组件库
        </template>

        <template #page-1>
          分页 1 - 这个页面是一个插槽，在这里你可以添加文本，HTML元素或组件。
        </template>

        <template #page-2>
          分页 2 - 在另一个页面上，你也可以放任何你需要的东西，它是动态的，所以你可以添加你需要的页面。
        </template>

        <template #page-3>
          分页 3 - 这是例子的最后一页。
        </template>
      </vs-alert>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          page: 1
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 页脚 <Badge text="New"/>

使用 `footer` 插槽可以自定义警告框页脚内容

<template v-slot:example>
  <div class="center">
    <vs-alert>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
      <template #footer>
        <vs-button flat>
          取消
        </vs-button>
        <vs-button>
          确认
        </vs-button>
      </template>
    </vs-alert>
  </div>
</template>

<template v-slot:template>

  ```html{10,11,12,13,14,15,16,17}:no-line-numbers
    <vs-alert>
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  ```
</template>

</card>

<card>

## 进度条 <Badge text="New"/>

可以为警告框增加一个进度条 范围(`0 - 100`)

<template v-slot:example>
  <vs-alert :progress="70">
    <template #title>
      Lucid 组件库
    </template>
    Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
    Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
  </vs-alert>
</template>

<template v-slot:template>

  ```html{4,5,6}:no-line-numbers
    <vs-alert progress="70">
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  ```

</template>

</card>

<card>

## 关闭 <Badge text="New"/>

添加 `closable` 属性可以为组件增加可关闭选项, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <alert-closable />
</template>

<template v-slot:template>

  ```html{6}:no-line-numbers
    <template>
      <vs-button flat @click="active=!active">
        {{ active ? '关闭' : '打开' }}
      </vs-button>

      <vs-alert closable v-model="active">
        <template #title>
          Lucid 组件库
        </template>
        lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>，它可以轻松地创建项目，并具有独特而愉悦的风格。
        Vuesax是从头创建的，专为从前端到后端的所有类型的开发而设计，这些开发都希望轻松地为最终用户创建可视化方法
      </vs-alert>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{6}:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 计时关闭 <Badge text="New"/>

组件支持倒计时隐藏，设置倒计时时间，时间到后会自动隐藏组件

<template v-slot:example>
  <alert-time />
</template>

<template v-slot:template>

  ```html{6}:no-line-numbers
    <template>
      <div class="center">
        <vs-button dark flat @click="active=true">
          打开警告框 10s
        </vs-button>
        <vs-alert dark :progress="progress" v-model="active">
          <template #title>
            Lucid 组件库
          </template>
          Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
          Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
        </vs-alert>
      </div>
  </template>
  ```

</template>

<template v-slot:script>

  ```html{6}:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: false,
          time: 6000,
          progress: 0
        }),
        watch: {
          active(val) {
            if(val) {
              var interval = setInterval(() => {
                this.progress++
              }, this.time / 100);

              setTimeout(() => {
                this.active = false
                clearInterval(interval)
                this.progress = 0
              }, this.time);
            }
          }
        }
      }
    </script>
  ```

</template>

</card>

<card>

## API

</card>

