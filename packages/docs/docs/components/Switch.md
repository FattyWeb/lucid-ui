---
PROPS:
  - name: v-model
    type: boolean, array
    values: boolean, array
    description: 双向绑定组件的值
    default: null
    link: null
    usage: '#dafault'

  - name: val
    type: string
    values: string
    description: 组件选中后的真实value
    default: null
    link: null
    usage: '#array-value'

  - name: color
    type: string
    values: lucid组件库内可定义的颜色, RGB 或 HEX
    description: 定义组件被激活后的颜色
    default: primary
    link: null
    usage: '#color'

  - name: loading
    type: boolean
    values: true, false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'

  - name: indeterminate
    type: boolean
    values: true,false
    description: 定义组件状态为未确定
    default: false
    link: null
    usage: '#indeterminate'

  - name: Square
    type: Boolean
    values: true,false
    description: 改变组件的外观为方形
    default: false
    link: null
    usage: '#square'

  - name: icon
    type: boolean
    values: true,false
    description: 将开关按钮变为透明(一般配合slot = "circle"为组件增加图标)
    default: false
    link: null
    usage: '#icons'

  - name: notValue
    type: String
    values: String
    description: 定义组件未激活时的值
    default: null
    link: null
    usage: null
    code: null

SLOTS:
  - name: default
    type: slot
    values: null
    description: 定义组件内的文本内容
    default: null
    usage: '#text'
    
  - name: on
    type: slot
    values: null
    description: 定义组件被激活时的文本内容
    default: null
    usage: '#icons'

  - name: off
    type: slot
    values: null
    description: 定义组件未被激活时的文本内容
    default: null
    usage: '#icons'

  - name: circle
    type: slot
    values: null
    description: 定义组件按钮中的内容
    default: null
    usage: '#icons'

NEWS:
  - 方形
  - 不确定值
  - 加载
  - 数组
---

# 开关

<card>

## 默认

通过 `<vs-switch>` 组件生成一个开关组件

<template v-slot:example>
  <switch-default />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center con-switch">
        <vs-switch v-model="active" />
        <vs-switch v-model="active2" />
        <vs-switch v-model="active3" disabled />
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
          active2: true,
          active3: false,
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` (**RGB** 或 **HEX**) 属性改变组件的颜色，组件本身也内置了5种颜色

<template v-slot:example>
  <switch-color />
</template>

<template v-slot:template>

  ```html{3,4,5,6,7,8,9}:no-line-numbers
    <template>
      <div class="center con-switch">
        <vs-switch v-model="active1" />
        <vs-switch success v-model="active2" />
        <vs-switch danger v-model="active3" />
        <vs-switch warn v-model="active4" />
        <vs-switch dark v-model="active5" />
        <vs-switch color="#7d33ff" v-model="active6" />
        <vs-switch color="rgb(59,222,200)" v-model="active7" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active1: true,
          active2: true,
          active3: true,
          active4: true,
          active5: true,
          active6: true,
          active7: true,
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 文本

使用默认插槽向组件添加文本，或者如果组件的每个状态需要不同的文本，可以使用 `on` 或 `off `插槽

:::tip 自适应
  组件会适应文本内容宽度
:::

<template v-slot:example>
  <switch-text />
</template>

<template v-slot:template>

  ```html{4,7,8,9,10,11,12}:no-line-numbers
    <template>
      <div class="center con-switch">
        <vs-switch v-model="active">
          订阅
        </vs-switch>
        <vs-switch v-model="active2">
          <template #off>
              关闭
          </template>
          <template #on>
              开启
          </template>
        </vs-switch>
        <vs-switch v-model="active3">
          <template #off>
              默认
          </template>
          <template #on>
              优质选项
          </template>
        </vs-switch>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          active: false,
          active2: false,
          active3: false,
        }),
      }
    </script>
  ```
</template>

</card>

<card>

## 图标

使用默认(或 `on` `off` )插槽 可以为组件添加图标

<template v-slot:example>
  <switch-icons />
</template>

<template v-slot:template>

  ```html{5,8}
    <template>
      <div class="center con-switch">
        <vs-switch v-model="active1">
          <template #off>
              <i class='bx bxs-volume-mute' ></i>
          </template>
          <template #on>
              <i class='bx bxs-volume-full' ></i>
          </template>
        </vs-switch>
        <vs-switch danger v-model="active2">
          <i class='bx bxs-microphone' ></i>
        </vs-switch>
        <vs-switch success v-model="active3">
          <template #off>
              <i class='bx bx-x' ></i>
          </template>
          <template #on>
              <i class='bx bx-check' ></i>
          </template>
        </vs-switch>
        <vs-switch warn v-model="active4">
          <template #off>
              <i class='bx bxs-plane-alt' ></i>
          </template>
          <template #on>
              激活
          </template>
        </vs-switch>
        <vs-switch dark v-model="active5">
          <template #circle>
              <i v-if="!active5" class='bx bxs-moon' ></i>
              <i v-else class='bx bxs-sun' ></i>
          </template>
        </vs-switch>
        <vs-switch color="#7d33ff" icon v-model="active6">
          <template #circle>
              <i v-if="active6" class='bx bxl-instagram-alt'></i>
              <i v-else class='bx bxl-instagram' ></i>
          </template>
        </vs-switch>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active1: false,
          active2: false,
          active3: false,
          active4: false,
          active5: false,
          active6: false,
        }),
      }
    </script>
  ```

</template>

</card>


<card>

## 数组 <Badge text="New"/>

可以使用数组接收开关组的值

<template v-slot:example>
  <switch-array />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-switch">
        <vs-switch val="html" v-model="options">
          Html
        </vs-switch>
        <vs-switch val="css" v-model="options">
          Css
        </vs-switch>
        <vs-switch val="javascript" v-model="options">
          Javascript
        </vs-switch>
        <vs-switch val="vue" v-model="options">
          Vue
        </vs-switch>
        <vs-switch val="lucid" v-model="options">
          Lucid
        </vs-switch>

        <span class="data">
          {{ options }}
        </span>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          options: [
            'javascript',
            'vue'
          ],
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

使用 `loading` 属性 可以添加加载中状态 此属性是 `boolean` 类型，可以忽略其值

<template v-slot:example>
  <switch-loading />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center con-switch">
        <vs-switch v-model="activeLoading">
          Active Loading
        </vs-switch>
        <vs-switch :loading="activeLoading" v-model="active2" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          activeLoading: true,
          active2: false
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 不确定值 <Badge text="New"/>

使用 `indeterminate` 属性 可以使组件变为不确定状态 此属性是 `boolean` 类型，可以忽略其值

<template v-slot:example>
  <switch-indeterminate />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center con-switch">
        <vs-switch indeterminate v-model="active" />
        <vs-switch indeterminate v-model="active2" />
        <vs-switch indeterminate v-model="active3" disabled />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: false,
          active2: true,
          active3: false,
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 方形 <Badge text="New"/>

使用 `square` 属性 使组件变为方形

<template v-slot:example>
  <switch-square />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center con-switch">
        <vs-switch square v-model="active" />
        <vs-switch square v-model="active2" />
        <vs-switch square v-model="active3" disabled />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active: false,
          active2: true,
          active3: false,
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 例子

一些场景的使用例子

<template v-slot:example>
  <switch-example />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center con-switch">
        <ul>
          <li>
            <p>
              邮件信息
            </p>
            <vs-switch v-model="active1" />
          </li>
          <li>
            <p>
              切换主题
            </p>
            <vs-switch v-model="active2">
              <template #circle>
                  <i v-if="!active2" class='bx bxs-moon' ></i>
                  <i v-else class='bx bxs-sun' ></i>
              </template>
            </vs-switch>
          </li>
          <li>
            <p>
              桌面通知
            </p>
            <vs-switch v-model="active3">
              <i class='bx bxs-message' ></i>
            </vs-switch>
          </li>
          <li>
            <p>
              用户类型
            </p>
            <vs-switch v-model="active4">
              <template #on>
                管理员
              </template>
              <template #off>
                默认用户
              </template>
            </vs-switch>
          </li>
          <li>
            <p>
              是否允许
            </p>
            <vs-switch success v-model="active5">
              <template #off>
                  <i class='bx bx-x' ></i>
              </template>
              <template #on>
                  <i class='bx bx-check' ></i>
              </template>
            </vs-switch>
          </li>
        </ul>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          active1: true,
          active2: false,
          active3: false,
          active4: true,
          active5: true,
        }),
      }
    </script>
  ```

</template>

<template v-slot:style>

  ```html
    <style lang="stylus" scoped>
    .con-switch
      display flex
      align-items center
      justify-content center
      ul
        width 100%
        padding 0px
        li
          width 100%
          display flex
          align-items center
          justify-content space-between
          padding 0px
          p
            margin 0px
      >>>.vs-switch
        margin 5px
    </style>
  ```

</template>

</card>

<card>

## API

</card>
