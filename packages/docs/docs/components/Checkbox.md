---
PROPS:
  - name: v-model
    type: boolean, string, array
    values: boolean, string, array
    description: 双向绑定复选框的值
    default: false
    link: null
    usage: '#default'

  - name: color
    type: string
    values: lucid组件库内可定义的颜色 RGB, HEX
    description: 定义组件的颜色
    default: false
    link: null
    usage: '#color'

  - name: val
    type: string, object
    values: string, object
    description: 组件选中后的真实value
    default: true
    link: null
    usage: '#string-value'

  - name: loading
    type: boolean
    values: true, false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'

  - name: line-through
    type: boolean
    values: true, false
    description: 为文字添加穿梭线
    default: false
    link: null
    usage: '#linethrough'

  - name: indeterminate
    type: boolean
    values: true, false
    description: 定义未确定(或部分选中)数据样式
    default: false
    link: null
    usage: '#Indeterminate'

  - name: label-before
    type: boolean
    values: true, false
    description: 定义label位置(前置、后置)
    default: false
    link: null
    usage: '#label'

  - name: checked
    type: boolean
    values: true, false
    description: 定义是否被选中 (会使v-model 置为 true)
    default: false
    link: null
    usage: null

SLOTS:
  - name: icon
    type: slot
    values: null
    description: 定义组件内图标
    default: null
    link: null
    usage: '#icon'

  - name: default
    type: slot
    values: null
    description: 定义label
    default: null
    link: null
    usage: '#default'
   
NEWS:
  - 部分选中
  - 加载
  - 穿梭线
---

# 多选框

<card>

## 默认

通过 `<vs-checkbox>` 组件生成一个多选框

<template v-slot:example>
  <checkbox-default />
</template>

<template v-slot:template>

  ```html{3,4,5}:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox v-model="option">
          选项
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` (**RGB** y **HEX**) 属性改变组件的颜色，组件本身也内置了5种颜色

<template v-slot:example>
  <checkbox-color />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          Primary
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          Success
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          Danger
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          warning
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          dark
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          HEX
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          RGB
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: true,
          option3: true,
          option4: true,
          option5: true,
          option6: true,
          option7: true
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 布尔值

默认情况下，该组件与布尔值一起使用，选中时返回 `true`，未选中时返回 `false`

<template v-slot:example>
  <checkbox-boolean />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          {{ option1 }}
        </vs-checkbox>
        <vs-checkbox v-model="option2">
          {{ option2 }}
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: false,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 字符串

有时您可能需要返回一个字符串。将 `val` 属性与要返回的 `string` 一起使用

<template v-slot:example>
  <checkbox-string />
</template>

<template v-slot:template>

  ```html{3}:no-line-numbers
    <template>
      <div class="center con-checkbox">
        <vs-checkbox val="自动" v-model="option">
          自动保存数据
        </vs-checkbox>

        <span class="data">
          {{ option ? option : 'null'}}
        </span>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: null,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 数组值

有时您可能需要返回一个字符串。将 `val` 属性与要返回的 `array` 一起使用

<template v-slot:example>
  <checkbox-array />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center con-checkbox">
        <vs-checkbox val="html" v-model="options">
          Html
        </vs-checkbox>
        <vs-checkbox val="css" v-model="options">
          Css
        </vs-checkbox>
        <vs-checkbox val="javascript" v-model="options">
          Javascript
        </vs-checkbox>
        <vs-checkbox val="vue" v-model="options">
          Vue
        </vs-checkbox>
        <vs-checkbox val="lucid" v-model="options">
          lucid
        </vs-checkbox>

        <span class="data">
          {{ options }}
        </span>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
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

## 数组对象

组件的 `val` 属性可以是对象(`object`)

<template v-slot:example>
  <checkbox-object />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center con-checkbox">
        <vs-checkbox :val="{ github: 'https://github.com/webpack/webpack', name: 'Webpack' }" v-model="options">
          Webpack
        </vs-checkbox>
        <vs-checkbox :val="{ github: 'https://github.com/microsoft/TypeScript', name: 'Typescript' }" v-model="options">
          Typescript
        </vs-checkbox>
        <vs-checkbox :val="{ github: 'https://github.com/sass/sass', name: 'Sass' }" v-model="options">
          Sass
        </vs-checkbox>

        <pre class="data">
          <code>
      {{ options }}
          </code>
        </pre>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          options: [
            {
              "github": "https://github.com/webpack/webpack",
              "name": "Webpack"
            }
          ],
        }),
      }
    </script>
  ```

</template>

</card>

<card>

## 图标

使用插槽 `slot="icon"` 可以将图标添加到复选框中

<utils-icon />

<template v-slot:example>
  <checkbox-icon />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox v-model="option1">
          <template #icon>
            <i class='bx bx-check' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          <template #icon>
            <i class='bx bx-check-double'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          <template #icon>
            <i class='bx bx-x'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          <template #icon>
            <i class='bx bxs-shield'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          <template #icon>
            <i class='bx bxs-heart' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          <template #icon>
            <i class='bx bx-brightness' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          <template #icon>
            <i class='bx bxs-paint' ></i>
          </template>
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option1: true,
          option2: true,
          option3: true,
          option4: true,
          option5: true,
          option6: true,
          option7: true
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Label

使用默认插槽 `slot="icon"` 可以为组件添加label

<template v-slot:example>
  <checkbox-label />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center con-checkbox">
        <vs-checkbox v-model="option">
          Label
        </vs-checkbox>
        <vs-checkbox label-before v-model="option2">
          Label 前置
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: true,
          option2: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

添加 `loading` 属性 为组件增加加载中效果

<template v-slot:example>
  <checkbox-loading />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center con-checkbox">
        <vs-checkbox loading v-model="option">
          加载中 选中
        </vs-checkbox>
        <vs-checkbox loading v-model="option2">
          加载中 未选中
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: true,
          option2: false,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 穿梭线 <Badge text="New"/>

添加 `line-through` 属性 为选中组件的增加穿梭线效果

<template v-slot:example>
  <checkbox-linethrough />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox line-through v-model="option">
          选项
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 部分选中 <Badge text="New"/>

有些情况下，您有多个复选框，并且需要一个复选框来管理所有其他复选框。为此，您可以使用部分选中 `indeterminate` 属性来执行此操作，该属性会向复选框添加不同的样式

<template v-slot:example>
  <checkbox-indeterminate />
</template>

<template v-slot:template>

  ```html:no-line-numbers
    <template>
      <div class="center">
        <vs-checkbox indeterminate v-model="option">
          选项
        </vs-checkbox>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          option: true,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
