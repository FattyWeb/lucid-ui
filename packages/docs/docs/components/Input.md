---
PROPS:
  - name: placeholder
    type: String
    values: String
    description: 同input的placeholder属性.
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
    usage: '#label-placeholder'
  - name: color
    type: string
    values: lucid组件库内可定义的颜色 (RGB 或 HEX)
    description: 定义组件颜色
    default: null
    link: null
    usage: '#color'
  - name: state
    type: String
    values: lucid组件库内可定义的颜色  (RGB 或 HEX)
    description: 定义组件状态
    default: null
    link: null
    usage: '#state'
  - name: progress
    type: number
    values: 0 - 100
    description: 显示进度条
    default: null
    link: null
    usage: '#progress'

  - name: loading
    type: boolean
    values: boolean
    description: 定义input的加载中动画
    default: null
    link: null
    usage: '#loading'

  - name: type
    type: string
    values: html type
    description: 定义input的种类
    default: null
    link: null
    usage: '#Input-types'

  - name: border
    type: boolean
    values: boolean
    description: 为组件增加边框
    default: false
    link: null
    usage: '#border'

  - name: shadow
    type: boolean
    values: boolean
    description: 为组件增加阴影
    default: false
    link: null
    usage: '#shadow'

  - name: icon-after
    type: boolean
    values: boolean
    description: 为组件尾部添加图标
    default: false
    link: null
    usage: '#icon'

  - name: visible-password
    type: boolean
    values: boolean
    description: 如果输入为密码类型，则会对其进行修改以显示密码
    default: false
    link: null
    usage: '#progress'

SLOTS:
  - name: icon
    type: Slot
    values: null
    description: 为组件增加图标
    default: null
    link: null
    usage: '#icon'

  - name: message
    type: Slot
    values: null
    description: 在组件下方增加一条提示信息
    default: null
    link: null
    usage: '#message'

NEWS:
  - 状态
  - 进度
  - 加载
  - 边框
  - 阴影
  - 提示信息
---

# 输入框

<card>

## 默认

通过 `<vs-input>` 组件生成一个输入框

<template v-slot:example>
  <Input-default />
</template>

<template v-slot:template>

  ```html{3}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value" placeholder="Name" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Label

添加 `label` 属性 可以为组件增加label

<template v-slot:example>
  <Input-label />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          label="姓名"
          v-model="value"
          placeholder="尤雨溪"
        />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Label Placeholder

添加 `label-placeholder` 属性可以为placeholder增加聚焦动画，当聚焦时，placeholder会上浮变为label

<template v-slot:example>
  <Input-labelPlaceholder />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          label-placeholder="输入国籍"
          v-model="value"
        />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: ''
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
  <Input-color />
</template>

<template v-slot:template>

  ```html{4,9,14,19,24,29,34}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          primary
          v-model="value"
          placeholder="Primary" />

        <vs-input
          success
          v-model="value2"
          placeholder="Success 图标前缀" />

        <vs-input
          danger
          v-model="value3"
          placeholder="Danger 图标后缀" />

        <vs-input
          warn
          v-model="value4"
          placeholder="Warn" />

        <vs-input
          dark
          v-model="value5"
          placeholder="Dark" />

        <vs-input
          color="#7d33ff"
          v-model="value6"
          placeholder="HEX" />

        <vs-input
          color="rgb(59,222,200)"
          v-model="value7"
          placeholder="HEX" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: ''
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 图标

使用插槽可以将图标添加到输入框中，如果您希望图标位于输入之前，可以使用属性 `icon-before`

<utils-icon />

<template v-slot:example>
  <Input-icon />
</template>

<template v-slot:template>

  ```html{3,4,5}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value1" placeholder="用户名">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input type="password" icon-after v-model="value2" placeholder="密码">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```
</template>

<template v-slot:script>

  ```html{3,4,5}:no-line-numbers
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: ''
        })
      }
    </script>
  ```
</template>

</card>

<card>

## 提示信息 <Badge text="New"/>

您可以在输入下方添加一条提示信息，使用 `slot="message- {vuesax color}"` 来提示错误信息或者警告

<template v-slot:example>
  <Input-message />
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input v-model="value1" placeholder="邮箱">
          <template #message-success>
            邮箱验证通过
          </template>
        </vs-input>
    
        <vs-input v-model="value2" placeholder="姓名">
          <template #message-danger>
            必填项
          </template>
        </vs-input>
    
        <vs-input type="password" v-model="value3" placeholder="密码">
          <template #message-warn>
            不安全的密码
          </template>
        </vs-input>
    
        <vs-input v-model="value4" label="邮箱校验示例" placeholder="dewenzhang012@gmail.com">
          <template v-if="validEmail" #message-success>
            邮箱验证通过
          </template>
          <template v-if="!validEmail && value4 !== ''" #message-danger>
            邮箱验证不通过
          </template>
        </vs-input>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          value1: 'dewenzhang012@gmail.com',
          value2: '',
          value3: '123456',
          value4: ''
        }),
        computed: {
          validEmail() {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4)
          }
        }

      }
    </script>
  ```

</template>

</card>

<card>

## 状态 <Badge text="New"/>

通过更改些状态来控制颜色，允许值 (primary, success, danger, warn, dark)

<template v-slot:example>
  <Input-state />
</template>

<template v-slot:template>

  ```html{6}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          primary
          v-model="value"
          state="primary"
          placeholder="Primary" />

        <vs-input state="success" success v-model="value2" placeholder="Success 图标前缀">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input state="danger" danger icon-after v-model="value2" placeholder="Danger 图标前缀">
          <template #icon>
            <i class='bx bx-mail-send' ></i>
          </template>
        </vs-input>

        <vs-input
          warn
          state="warn"
          v-model="value4"
          placeholder="Label Warn"
          label="Warn" />

        <vs-input
          dark
          state="dark"
          v-model="value5"
          label-placeholder="Dark" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: ''
        })
      }
    </script>
  ```
</template>

</card>

<card>

## 进度 <Badge text="New"/>

添加验证进度条，最常见的是用于验证密码和输入中的正确数据，其值为（0-100）

:::tip 该示例验证密码强度

  - 特殊字符
  - 超过6位
  - 小写字母
  - 大写字母
  - 数字
:::

<template v-slot:example>
  <Input-progress />
</template>

<template v-slot:template>

  ```html{7}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          type="password"
          v-model="value"
          label-placeholder="密码"
          :progress="getProgress"
          :visiblePassword="hasVisiblePassword"
          icon-after
          @click-icon="hasVisiblePassword = !hasVisiblePassword">
          <template #icon>
            <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
            <i v-else class='bx bx-hide'></i>
          </template>

          <template v-if="getProgress >= 100" #message-success>
            密码安全
          </template>

        </vs-input>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: '',
          hasVisiblePassword: false
        }),
        computed: {
          getProgress() {
            let progress = 0

            // 至少一位数字

            if (/\d/.test(this.value)) {
              progress += 20
            }

            // 大写字母

            if (/(.*[A-Z].*)/.test(this.value)) {
              progress += 20
            }

            // 小写字母

            if (/(.*[a-z].*)/.test(this.value)) {
              progress += 20
            }

            // 超过6位

            if (this.value.length >= 6) {
              progress += 20
            }

            // 至少1个特殊字符

            if (/[^A-Za-z0-9]/.test(this.value)) {
              progress += 20
            }

            return progress
          }
        }
      }
      </script>
  ```

</template>

</card>

<card>

## 加载 <Badge text="New"/>

添加 `loading` 属性可以为输入框增加加载中动画，此属性是 `boolean` 类型，可以忽略其值。

<template v-slot:example>
  <Input-loading />
</template>

<template v-slot:template>

  ```html{3}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input loading v-model="value" placeholder="姓名" />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: ''
        })
      }
    </script>
  ```

</template>

</card>

<card>

## 类型

更改 `type` 属性可以更改原生的html input的输入类型，默认值为 `text`

<template v-slot:example>
  <Input-types/>
</template>

<template v-slot:template>

  ```html{4}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input
          type="text"
          v-model="value1"
          label="文本"
        />
        <vs-input
          type="password"
          v-model="value2"
          label="密码"
        />
        <vs-input
          type="search"
          v-model="value3"
          label="搜索"
        />
        <vs-input
          type="number"
          v-model="value4"
          label="数字"
        />
        <vs-input
          type="url"
          v-model="value5"
          label="Url"
        />
        <vs-input
          type="time"
          v-model="value6"
          label="时间"
        />
        <vs-input
          type="date"
          v-model="value7"
          label="日期"
        />
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: '',
        })
      }
    </script>
  ```
</template>

</card>

<card>

## 边框 <Badge text="New"/>

添加 `border` 属性可以为组件增加边框效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <Input-border />
</template>

<template v-slot:template>

  ```html{3}:no-line-numbers
    <template>
      <div class="center content-inputs">
        <vs-input border v-model="value" placeholder="姓名" />

        <vs-input color="#7d33ff" border type="password" v-model="value2" placeholder="密码">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input border warn type="email" icon-after v-model="value3" label-placeholder="地址">
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```
</template>

<template v-slot:script>

  ```html:no-line-numbers
    <script>
      export default {
        data:() => ({
          value: '',
          value2: '',
          value3: '',
        })
      }
    </script>
  ```
</template>

</card>

<card>

## 阴影 <Badge text="New"/>

添加 `shadow` 属性可以为组件增加阴影效果, 此属性是 `boolean` 类型, 可以忽略其值。

<template v-slot:example>
  <Input-shadow />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center content-inputs">
        <vs-input shadow v-model="value" placeholder="姓名" />

        <vs-input color="#7d33ff" shadow type="password" v-model="value2" placeholder="密码">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input shadow warn type="email" icon-after v-model="value3" label-placeholder="地址">
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data:() => ({
          value: '',
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
