# 网格

<card>

## 默认

在网格系统中，我们根据行和列定义基本的布局数据，以确保每个区域都有一个稳定的布局

下面简要介绍一下它的工作原理:

- 在行定义的水平空间中建立一组列 (_缩写 col_)
- 您的内容项(item)应直接放置在列(column)中，并且行中只能放置列(row)
- 列(column)的宽度范围  **1** 到 **12**, 例如 列的宽度属性设为 `w="4"` 相当于该列要占整体行宽的 **33.3%**
- 如果一行中内容项(item)的总和大于 **12**，则溢出的内容项(item)作为一个整体将另起一行重新布局

使用 `w` 属性定义列(`vs-col`)宽 范围是  **1-12** 例如 `12 = 100%`,`6 = 50%`,`4 = 33% `

<template v-slot:example>
  <grid-default />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="center grid">
        <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          100%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" w="6">
          50%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
          33.3%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" w="3">
          25%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 6" vs-type="flex" vs-justify="center" vs-align="center" w="2">
          16.6%
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col :key="index" v-for="col,index in 12" vs-type="flex" vs-justify="center" vs-align="center" w="1">
          8.3%
        </vs-col>
      </vs-row>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 偏移

使用 `offset` 属性 设置偏移量(距左) 范围 **1-12** 例如 `12=100%`,`6=50%`,`4=33%`.

<template v-slot:example>
  <grid-offset />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div>
        <vs-row w="12">
          <vs-col offset="5" w="6">
            offset = 6
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="0" w="2">
            offset = 2
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="2" w="8">
            offset = 8
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="9" w="3">
            offset = 7
          </vs-col>
        </vs-row>

        <vs-row>
          <vs-col offset="4" w="4">
            offset = 4
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 水平对齐

使用 `justify` 属性为元素设置水平对齐 此属性的值与css justify-content值一致 `flex-start`, `center`,` flex-end`, `space-around`,` space-between`

<template v-slot:example>
  <grid-flexJustify />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="grid">
        <vs-row>
          <vs-col :key="index" v-for="col,index in 3" w="2">
            默认 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            居中 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="flex-end">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            右对齐 {{ index + 1 }}
          </vs-col>
        </vs-row>


        <vs-row justify="space-around">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            等间隔 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row justify="space-between">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            两端对齐 {{ index + 1 }}
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 垂直对齐

使用 `align` 属性为元素设置垂直对齐 此属性的值与css align-items值一致 ` flex-start`, `center`,` flex-end`, `space-around`,` space-between`

使用 `direction` 属性改变排列方向 此属性的值与css flex-direction值一致 (默认是 `row`)

<template v-slot:example>
  <grid-flexAlign />
</template>

<template v-slot:template>

  ```html
    <template>
      <div class="grid">
        <vs-row justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            默认 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row align="center" justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            居中 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row align="flex-end" justify="center">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            向下对其 {{ index + 1 }}
          </vs-col>
        </vs-row>


        <vs-row class="mh" align="center" justify="space-around" direction="column">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            等间隔 {{ index + 1 }}
          </vs-col>
        </vs-row>

        <vs-row class="mh" align="center" justify="space-between" direction="column">
          <vs-col :key="index" v-for="col,index in 3" w="2">
            两端对齐 {{ index + 1 }}
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 排序

使用 `order` 属性排序 排序只在同行(row)里的列(column)生效

<template v-slot:example>
  <grid-flexOrder />
</template>

<template v-slot:template>

  ```html
    <template>
      <div>
        <vs-row w="12">
          <vs-col w="3">
            1
          </vs-col>
          <vs-col w="3">
            2
          </vs-col>
          <vs-col order="-1" w="3">
            3
          </vs-col>
          <vs-col w="3">
            4
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</template>

</card>

<card>

## 响应式

在不同屏幕尺寸的设备中可以指定不同的大小 如下

- **lg**: 适用于台式机或笔记本电脑等大型设备
- **sm**: 适用于笔记本电脑或平板电脑等中型设备.
- **xs**: 适用于平板电脑和手机等小型设备

<template v-slot:example>
  <grid-responsive />
</template>

<template v-slot:template>

  ```html{4}
    <template>
      <div class="grid">
        <vs-row>
          <vs-col :w="num">
            {{ num }}
          </vs-col>
          <vs-col :w="num2">
            {{ num2 }}
          </vs-col>
          <vs-col :w="num">
            {{ num }}
          </vs-col>
        </vs-row>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html
    <script>
      export default {
        data() {
          return {
            num: 2,
            num2: 8
          }
        },
        mounted() {
          setInterval(() => {
            if(this.num == 2) {
              this.num = 4
              this.num2 = 4
            } else if (this.num == 4) {
              this.num = 1
              this.num2 = 10
            } else if (this.num == 1) {
              this.num = 5
              this.num2 = 2
            } else if (this.num == 5) {
              this.num = 2
              this.num2 = 8
            }
          }, 2000)
        }
      }
      </script>
  ```

</template>

</card>
