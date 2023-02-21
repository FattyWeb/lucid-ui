---
PROPS:
  - name: message
    type: string
    description: 定义提示内容
  - name: type
    type: string
    values: info success danger warn
    description: 定义提示框类型
    default: info

NEWS:
  - 默认
  - 类型
---
# 消息提示

<card>

## 默认 <Badge text="New"/>

调用 lucid 提供的全局函数 `$vs.message` 生成一个消息提示

`duration` 属性 设置持续时间 默认4s 单位ms

::: warning

注意此组件为 **轻** 提示,文字内容应尽量短、尽量保持单行。
如果内部文字过多 需要换行 建议使用 [通知(Notification)](/docs/components/Notification.html)组件来实现功能更为复杂的提示

:::

<template v-slot:example>
  <message-default />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
         <vs-button flat @click="open">点击提示</vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      methods: {
        open() {
          this.$vs.message({
            message: '这是一个消息提示',
            duration: 2500
          })
        }
      }
    }
    </script>
  ```

</template>

</card>

<card>

## 类型 <Badge text="New"/>

使用 `type` 属性改变提示的类型 可选类型 `info` `success` `warn` `danger` 默认为 `info`

<template v-slot:example>
  <message-type />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-button flat @click="open">消息提示</vs-button>
        <vs-button flat warn @click="open('warn', '操作有误！！！')">警告提示</vs-button>
        <vs-button flat danger @click="open('danger', '操作失败！！！')">错误提示</vs-button>
        <vs-button flat success @click="open('success', '操作成功！！！')">成功提示</vs-button>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
      export default {
        methods: {
          open(type, message = '点击按钮！！！') {
            this.$vs.message({
              type: type,
              message: message,
              duration: 2000
             })
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
