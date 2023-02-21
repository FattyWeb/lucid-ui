---
PROPS:
  - name: v-model
    type: Number
    values: Number
    description: 双向绑定组件当前页数
    default: 1
    link: null
    usage: '#default'
    
  - name: length
    type: Number
    values: Number
    description: 分页的长度
    default: null
    link: null
    usage: '#default'

  - name: color
    type: lucid组件库内可定义的颜色 , RGB, HEX
    values: String
    description: 定义组件的颜色
    default: primary
    link: null
    usage: '#color'

  - name: disabled
    type: Boolean
    values: true, false
    description: 定义组件是否被禁用
    default: false
    link: null
    usage: '#disabled'

  - name: not-arrows
    type: Boolean
    values: true, false
    description: 定义组件是否包含切换上下页的箭头按钮
    default: false
    link: null
    usage: '#not-arrows'
    
  - name: only-arrows
    type: Boolean
    values: true, false
    description: 定义组件是否只包含切换上下页的箭头按钮
    default: false
    link: null
    usage: '#only-arrows'
    
  - name: circle
    type: Boolean
    values: true, false
    description: 定义组件外观为圆形
    default: false
    link: null
    usage: '#circle'

  - name: square
    type: Boolean
    values: true, false
    description: 定义组件外观为方形
    default: false
    link: null
    usage: '#square'

  - name: buttons-dotted
    type: Boolean
    values: true, false
    description: 定义组件外观为圆点状按钮
    default: false
    link: null
    usage: '#buttons-dotted'

  - name: disabled-items
    type: Boolean
    values: true, false
    description: 禁用指定页数的按钮
    default: false
    link: null
    usage: '#disabled-items'

  - name: loading-items
    type: Boolean
    values: true, false
    description: 指定页数的按钮变为加载中状态
    default: false
    link: null
    usage: '#loading-items'
    
  - name: not-margin
    type: Boolean
    values: true, false
    description: 定义组件按钮之间无间隔
    default: false
    link: null
    usage: '#not-margin'
    
  - name: progress
    type: Boolean
    values: true, false
    description: 定义组件是否显示进度条
    default: false
    link: null
    usage: '#progress'

  - name: dotted-number
    type: Number
    values: Number
    description: 定义组件快进步幅
    default: false
    link: null
    usage: '#dotted-number'
    
  - name: infinite
    type: Boolean
    values: true,false
    description: 当触碰到分页边界时返回最后一页(或第一页)
    default: false
    link: null
    usage: '#infinite'

SLOTS:
  - name: default
    type: '#slot'
    values: null
    description: 可以在两个切换按钮之间自定义内容
    default: null
    link: null
    usage: '#slot'

NEWS:
  - 禁用
  - 只使用切换
  - 无切换
  - 圆形
  - 方形
  - 圆点状按钮
  - 禁用指定按钮
  - 加载
  - 无间隔
  - 插槽
  - 进度
  - 自定义快进
  - 无边界
---

# 分页

<card>

## 默认

使用 `<vs-pagination>` 组件生成一个分页框 分页长度 `length` 属性和数据绑定 `v-model` 是必填项

<template v-slot:example>
  <pagination-default />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
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

## 色彩

<Coloren />

<template v-slot:example>
  <pagination-color />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="center con-pagination">
        <div class="con-radio">
          <vs-radio success v-model="color" val="success">
            Success
          </vs-radio>
          <vs-radio danger v-model="color" val="danger">
            Danger
          </vs-radio>
          <vs-radio warn v-model="color" val="warn">
            Warning
          </vs-radio>
          <vs-radio dark v-model="color" val="dark">
            Dark
          </vs-radio>
          <vs-radio color="#7d33ff" v-model="color" val="#7d33ff">
            HEX
          </vs-radio>
          <vs-radio color="rgb(59,222,200)" v-model="color" val="rgb(59,222,200)">
            RGB
          </vs-radio>
        </div>
        <vs-pagination :color="color" v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
        color: 'success'
      }),
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    .con-pagination
      .con-radio
        display flex
        align-items center
        justify-content flex-start
        .vs-radio-content
          margin 10px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</template>

</card>

<card>

## 禁用

使用 `disabled` 属性可以禁用分页组件, 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <pagination-disabled />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination disabled v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 无切换

使用 `not-arrows` 属性 可以禁用左右切换箭头

<template v-slot:example>
  <pagination-not-arrows />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-arrows v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 只使用切换

使用 `only-arrows` 属性 可以只展示切换功能

<template v-slot:example>
  <pagination-only-arrow />
</template>

<template v-slot:template>

  ```html{3,5}
    <template>
      <div class="center con-pagination">
        <vs-pagination only-arrows v-model="page" :length="10" />
        <code>
          Page: <b>{{ page }}</b>
        </code>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 圆形

使用 `circle` 属性可将分页按钮变为圆形 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <pagination-circle />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination circle v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 方形

使用 `square` 属性可将分页按钮变为方形 此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <pagination-square />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination square v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 圆点状按钮

使用 `buttons-dotted` 属性 可以将分页按钮形状变为圆点 并隐藏分页值

<template v-slot:example>
  <pagination-buttons-dotted />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination buttons-dotted v-model="page" :length="6" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{3,4,5}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 禁用指定按钮

使用 `disabled-items` 属性来禁用指定的按钮 此属性接收一个指定禁用页数的数组

:::tip
当更改值时，处于禁用状态的按钮将跳过，例如在 “上一页” 或 “下一页”按钮上
:::

<template v-slot:example>
  <pagination-disabledItems />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 加载

使用 `loading-items` 属性为组件添加加载中状态, 此属性接收一个指定加载页数的数组

:::tip
当更改值时，处于加载中状态的按钮将跳过，例如在 “上一页” 或 “下一页”按钮上
:::

<template v-slot:example>
  <pagination-loadingItems />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 无间隔

使用 `not-margin` 属性使组件变为无间隔样式

<template v-slot:example>
  <pagination-not-margin />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination not-margin v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 插槽

使用 `default` 默认插槽 可以在两个切换按钮之间自定义内容

<template v-slot:example>
  <pagination-slot />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination v-model="page" :length="20">
          <vs-select v-model="page">
            <vs-option
              v-for="numberPage in 20"
              :label="numberPage"
              :value="numberPage">
              {{ numberPage }}
            </vs-option>
          </vs-select>
        </vs-pagination>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

<template v-slot:style>

  ```stylus
    <style lang="stylus">
    .con-pagination
      .vs-select-content
        max-width 60px
        margin 0px 4px
      .vs-pagination-content
        margin 10px 0px
    </style>
  ```

</template>

</card>

<card>

## 进度

使用 `progress` 属性为分页增加一个进度条

<template v-slot:example>
  <pagination-progress />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination progress v-model="page" :length="20" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 自定义快进

使用 `dotted-number` 属性可以定义快进功能的页数 默认是**5**

<template v-slot:example>
  <pagination-dotted-number />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center con-pagination">
        <vs-pagination :dotted-number="10" v-model="page" :length="100" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        page: 1,
      }),
    }
    </script>
  ```

</template>

</card>

<card>

## 无边界

使用 `infinite` 属性 当触碰到分页边界时返回最后一页(或第一页)

<template v-slot:example>
  <pagination-infinite />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-pagination infinite v-model="page" :length="10" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
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

## API

</card>
