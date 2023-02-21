# 配色

<card>

  ## 默认配色

  lucid在内部内置了多种颜色 组成了一套主题

  主题色可以根据每个开发人员的喜好进行更改和自定义 以实现更个性化的应用程序

  默认颜色 colors:

  - primary (主颜色)
  - success (成功色)
  - danger (危险色)
  - warn (警告色)
  - dark (暗色)

  <colors-default />

</card>

<card>

  ## 自定义主题色

  您可以根据需要随时更改颜色, lucid使用原生css变量，这意味着您可以随时访问和更改它们

  lucid提供了多种方案(css 或 javascript) 供您修改主题色

</card>

<card>

  ## javascript

  ```js:no-line-numbers
    Vue.use(Lucid, {
      colors: {
        primary:'#5b3cc4',
        success:'rgb(23, 201, 100)',
        danger:'rgb(242, 19, 93)',
        warning:'rgb(255, 130, 0)',
        dark:'rgb(36, 33, 69)'
      }
    })
  ```

</card>

<card>

  ## css

  与任何其他css变量一样，您可以通过css更改lucid变量

  ::: warning 只支持Hex格式

  注意 颜色的定义只支持数字HEX格式 例如 `rgb (255,100.50)` 相当于 `255,100.50`

  :::

  ```css:no-line-numbers
    :root {
      --vs-primary: 91, 60, 196
      --vs-success: 23, 201, 100
      --vs-danger: 242, 19, 93
      --vs-warn: 254, 130, 0
      --vs-dark: 36, 33, 69
    }
  ```

</card>

<card>

  ## 使用函数

  你可以在应用的任何位置更改配色 但只能在客户端使用 `$vs.setColor` 功能更改 dom对象

  ::: warning

  只有在可以获取文档对象(dom)时才能使用此函数，例如，由于文档和元素尚未渲染完毕，因此无法在 `created()` 中使用此函数

  :::

  ```html:no-line-numbers

    <script>
      export default {
        mounted() {
          this.$vs.setColor('primary', '#000')
        }
      }
    </script>

  ```

</card>

