---
PROPS:
  - name: color
    type: String
    values: lucid组件库内可定义的颜色,  RGB, HEX
    description: 定义组件的颜色
    default: primary
    link: null
    usage: '#color'
  
  - name: loading
    type: Boolean
    values: true, false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'
  - name: placeholder
    type: String
    values: String
    description: 同select的placeholder属性.
    default: null
    link: null
    usage: '#default'

  - name: label
    type: String
    values: String
    description: 定义label属性.
    default: null
    link: null
    usage: '#label'
    
  - name: label-placeholder
    type: String
    values: String
    description: 聚焦时 placeholder 会转化为 label.
    default: null
    link: null
    usage: '#label'

  - name: filter
    type: Boolean
    values: true, false
    description: 输入筛组价下拉内容
    default: false
    link: null
    usage: '#filter'

  - name: multiple
    type: Boolean
    values: true, false
    description: 开启多选.
    default: false
    link: null
    usage: '#multiple'

  - name: state
    type: String
    values: lucid组件库内可定义的颜色  (RGB 或 HEX)
    description: 定义组件状态
    default: false
    link: null
    usage: '#state'

  - name: disabled
    type: Boolean
    values: true, false
    description: 禁用组件.
    default: false
    link: null
    usage: null
    
  - name: collapse-chips
    type: Boolean
    values: true, false
    description: 多选时 标签是否折叠隐藏
    default: false
    link: null
    usage: '#multiple'

SLOTS:
  - name: message-{color}
    type: slot
    values: null
    description: 在组件下方新增提示信息
    default: null
    link: null
    usage: '#message'
    
  - name: title
    type: slot
    values: null
    description: 定义 vs-option-group组件分组标题
    default: null
    link: null
    usage: '#group'
    
NEWS:
  - 加载
  - 提示
  - 状态
  - 过滤搜索
---

# 下拉选项

<card>

## 默认

使用 `<vs-select>` 生成一个多选框 使用 `vs-option` 为多选框增加选项

<template v-slot:example>
   <select-default ></select-default>
</template>

<template v-slot:template>

  ```html{3,25}
    <template>
      <div class="center">
        <vs-select placeholder="技术选型" v-model="value">
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option disabled label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          value: '',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 色彩

通过 `color` (**RGB** 或 **HEX**) 属性改变组件的颜色，组件本身也内置了5种颜色

<template v-slot:example>
  <select-color />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          v-for="(color, i) in colors"
          :key="i"
          :color="color.color"
          placeholder="Select"
          v-model="color.value"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          colors: [
            {
              color: 'danger',
              value: '1'
            },
            {
              color: 'success',
              value: '2'
            },
            {
              color: 'warn',
              value: '3'
            },
            {
              color: 'dark',
              value: '4'
            },
            {
              color: '#7d33ff',
              value: '5'
            },
            {
              color: 'rgb(59,222,200)',
              value: '6'
            },

          ]
        })
      }
    </script>
  ```

</template>

</card>


<card>

## Label

添加 `label` 属性 可以为组件增加label 添加 `label-placeholder` 属性可以为placeholder增加聚焦动画，当聚焦时，placeholder会上浮变为label 添加 `placeholder` 属性 可以为组件增加placeholder

<template v-slot:example>
  <select-label />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center con-selects">
        <vs-select
          label="Label"
          v-model="value1"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          label-placeholder="Label-placeholder"
          v-model="value2"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Placeholder"
          v-model="value3"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```

</template>

</card>


<card>

## 分组

组件 `vs-option-group` 可以为下拉选择增加分组展示, 插槽 `title` 添加分组标题

<template v-slot:example>
  <select-group />
</template>

<template v-slot:template>

  ```html{8,21}
    <template>
      <div class="center con-selects">
        <vs-select
          label="分组"
          placeholder="分组"
          v-model="value1"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Lucid" value="1">
              Lucid
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>

        <vs-select
          label="分组筛选"
          filter
          placeholder="筛选"
          v-model="value2"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Lucid" value="1">
              Lucid
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>

        <vs-select
          label="分组多选筛选"
          filter
          multiple
          placeholder="分组多选筛选"
          v-model="value3"
        >
          <vs-option-group>
            <div slot="title">
              Vuejs
            </div>
            <vs-option label="Lucid" value="1">
              Lucid
            </vs-option>
            <vs-option label="Vue" value="2">
              Vue
            </vs-option>
            <vs-option label="Javascript" value="3">
              Javascript
            </vs-option>
          </vs-option-group>
          <vs-option-group>
            <div slot="title">
              Others
            </div>
            <vs-option label="Sass" value="4">
              Sass
            </vs-option>
            <vs-option label="Typescript" value="5">
              Typescript
            </vs-option>
            <vs-option label="Webpack" value="6">
              Webpack
            </vs-option>
            <vs-option label="Nodejs" value="7">
              Nodejs
            </vs-option>
          </vs-option-group>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: ['3'],
          value2: ['4'],
          value3: ['1'],
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 过滤搜索 <Badge text="New"/>

使用 `filter` 属性 可以搜索过滤您输入的选项, 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <select-filter />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center con-selects">
        <vs-select
          filter
          placeholder="Filter"
          v-model="value"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
        <vs-select
          filter
          multiple
          placeholder="Filter Multiple"
          v-model="value2"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5}
    <script>
      export default {
        data:() => ({
          value: '',
          value2: ''
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 多选

使用 `multiple` 属性可以使组件变为多选 此属性是 `boolean` 类型，可以忽略其值。

:::tip
下拉选的value必须是数组
:::

<template v-slot:example>
  <select-multiple />
</template>

<template v-slot:template>

  ```html{5}
    <template>
      <div class="center con-selects">
        <vs-select
          label="多选"
          multiple
          placeholder="搜索过滤"
          v-model="value"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
        <vs-select
          label="多选 搜索过滤"
          filter
          multiple
          placeholder="多选 搜索过滤"
          v-model="value2"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          label="多选 折叠隐藏"
          filter
          multiple
          collapse-chips
          placeholder="多选 折叠隐藏"
          v-model="value3"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value: ['1', '2', '3'],
          value2: ['4',],
          value3: ['1', '4', '5', '6'],
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

使用 `loading` 属性 可以添加加载中状态 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <select-loading />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          placeholder="请选择"
          v-model="value1"
          loading
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="请选择"
          v-model="value2"
          loading
          multiple
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
      export default {
        data:() => ({
          value1: '3',
          value2: ['4','1','3'],
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 状态 <Badge text="New"/>

使用 `state` 属性可更改组件的状态 只支持内置的5种颜色

:::tip
此属性可用于提示用户 该组件的校验状态
:::

<template v-slot:example>
  <select-state />
</template>

<template v-slot:template>

  ```html{6}
    <template>
      <div class="center con-selects">
        <vs-select
          v-for="(color, i) in colors"
          :key="i"
          :state="color.color"
          :label="color.color"
          placeholder="Select"
          v-model="color.value"
        >
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          colors: [
            {
              color: 'primary',
              value: '1'
            },
            {
              color: 'danger',
              value: '1'
            },
            {
              color: 'success',
              value: '2'
            },
            {
              color: 'warn',
              value: '3'
            },
            {
              color: 'dark',
              value: '4'
            }
          ]
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 提示 <Badge text="New"/>

通过插槽 `#message-*` 可向组件添加提示信息

<template v-slot:example>
  <select-message />
</template>

<template v-slot:template>

  ```html{7,8,9}
    <template>
      <div class="center con-selects">
        <vs-select
          placeholder="Success"
          v-model="value1"
        >
          <template #message-success>
            检验通过
          </template>
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Warn"
          v-model="value2"
        >
          <template #message-danger>
            必填字段
          </template>
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>

        <vs-select
          placeholder="Danger"
          v-model="value3"
        >
          <template #message-warn>
            请选择技术选型
          </template>
          <vs-option label="Lucid" value="1">
            Lucid
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-select>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5,6}
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
