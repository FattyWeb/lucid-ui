---
PROPS:
  - name: v-model
    type: date
    description: 定义日期组件的绑定数据
  - name: disabledDate
    type: function
    description: 定义禁止选择的日期 传入参数为date类型 返回布尔值

NEWS:
  - 默认
  - 禁用日期
  - 输入框样式
---

# 日期选择

<card>

## 默认 <Badge text="New"/>

使用 `<vs-date-picker>` 生成一个日期选择器; `v-model` 绑定日期值, 该值为 `Date` 类型

<template v-slot:example>
  <datepicker-default />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-date-picker v-model="date" 
                        label-placeholder="选择日期">
        </vs-date-picker>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        data: null
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 禁用日期 <Badge text="New"/>

使用 `disabledDate` 属性 选择将哪些日期禁用

<template v-slot:example>
  <datepicker-disabledDate />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-date-picker v-model="date" 
                        label-placeholder="选择日期"
                        :disabledDate="disabledDate">
        </vs-date-picker>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        data: null,
        disabledDate: (time) => {
         return time.getDate() in [1, 2, 3];
        }
      })
    }
    </script>
  ```

</template>

</card>

<card>

## 输入框样式 <Badge text="New"/>

输入框支持的样式与 `<vs-input>` [点击跳转](/docs/components/Input.html) 支持的样式一致

<template v-slot:example>
  <datepicker-style />
</template>

<template v-slot:template>

  ```html{3}
    <template>
       <div class="center content-inputs">
          <vs-date-picker border 
                          label-placeholder="选择日期" 
                          v-model="date1">
          </vs-date-picker>
          <vs-date-picker warn placeholder="选择日期" v-model="date2"></vs-date-picker>
       </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script>
    export default {
      data:() => ({
        data: null,
        disabledDate: (time) => {
         return time.getDate() in [1, 2, 3];
        }
      })
    }
    </script>
  ```

</template>

</card>

<card>

## API

</card>
