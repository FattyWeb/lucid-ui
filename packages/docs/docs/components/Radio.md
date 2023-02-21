---
PROPS:
  - name: color
    type: string
    values: lucid组件库内可定义的颜色  RGB, HEX
    description: 定义组件的颜色
    default: primary
    link: null
    usage: '#color'

  - name: disabled
    type: boolean
    values: true,false
    description: 定义组件是否是禁用状态
    default: false
    link: null
    usage: '#default'

  - name: loading
    type: Boolean
    values: true,false
    description: 定义加载中状态(动画)
    default: false
    link: null
    usage: '#loading'

  - name: val
    type: String
    values: String
    description: 定义组件的value
    default: null
    link: null
    usage: '#default'

SLOTS:
  - name: default
    type: slot
    values: null
    description: 定义label
    default: null
    link: null
    usage: '#label'

  - name: icon
    type: slot
    values: null
    description: 定义图标
    default: null
    link: null
    usage: '#icon'

NEWS:
  - 加载
  - 图标
  - label
---

# 单选框

<card>

## 默认

使用 `<vs-radio/>` 组件 生成一个单选框

<template v-slot:example>
  <radio-default />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center">
          <vs-radio v-model="picked" val="1">
            Option A
          </vs-radio>
          <vs-radio v-model="picked" val="2">
            Option B
          </vs-radio>
          <vs-radio disabled v-model="picked" val="3">
            Option C
          </vs-radio>
          <vs-radio v-model="picked" val="4">
            Option D
          </vs-radio>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 色彩

<coloren />

<template v-slot:example>
  <radio-color />
</template>

<template v-slot:template>

  ```html{6,7,8}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Primary
        </vs-radio>
        <vs-radio success v-model="picked" val="2">
          Success
        </vs-radio>
        <vs-radio danger v-model="picked" val="3">
          Danger
        </vs-radio>
        <vs-radio warn v-model="picked" val="4">
          Warning
        </vs-radio>
        <vs-radio dark v-model="picked" val="5">
          Dark
        </vs-radio>
        <vs-radio color="#7d33ff" v-model="picked" val="6">
          HEX
        </vs-radio>
        <vs-radio color="rgb(59,222,200)" v-model="picked" val="7">
          RGB
        </vs-radio>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 2,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Label <Badge text="New"/>

使用默认 `default` 插槽为组件新增label `label-before` 属性可以使label前置

<template v-slot:example>
  <radio-label />
</template>

<template v-slot:template>

  ```html{3-8}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Label
        </vs-radio>
        <vs-radio label-before v-model="picked" val="2">
          label 前置
        </vs-radio>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

使用 `loading` 属性 可以添加加载中状态

<template v-slot:example>
  <radio-loading />
</template>

<template v-slot:template>

  ```html{3,4,5}
    <template>
      <div class="center">
        <vs-radio loading v-model="picked" val="1">
          Option 1
        </vs-radio>
        <vs-radio loading v-model="picked" val="2">
          Option 2
        </vs-radio>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 图标 <Badge text="New"/>

使用 `icon` 插槽可以为组件添加图标

<template v-slot:example>
  <radio-icons />
</template>

<template v-slot:template>

  ```html{5,6,7}
    <template>
      <div class="center">
        <vs-radio v-model="picked" val="1">
          Yen
          <template #icon>
            <i class='bx bx-yen' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="2">
          Won
          <template #icon>
            <i class='bx bx-won' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="3">
          Pound
          <template #icon>
            <i class='bx bx-pound' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="4">
          Euro
          <template #icon>
            <i class='bx bx-euro' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="5">
          Rupee
          <template #icon>
            <i class='bx bx-rupee' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="6">
          Bitcoin
          <template #icon>
            <i class='bx bx-bitcoin' ></i>
          </template>
        </vs-radio>
        <vs-radio v-model="picked" val="7">
          Dollar
          <template #icon>
            <i class='bx bx-dollar' ></i>
          </template>
        </vs-radio>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        data:() => ({
          picked: 1,
        })
      }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
