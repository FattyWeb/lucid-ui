---
PROPS:
  - name: v-model
    type: date
    description: 定义日期组件的绑定数据

NEWS:
  - 默认
---
# 时间选择

<card>

## 默认 <Badge text="New"/>

使用 `<vs-time-picker>` 生成一个日期选择器; `v-model` 绑定日期值, 该值为 `Date` 类型

<template v-slot:example>
  <timepicker-default />
</template>

<template v-slot:template>

  ```html{3}
    <template>
      <div class="center">
        <vs-time-picker v-model="date" 
                        label-placeholder="选择日期">
        </vs-time-picker>
      </div>
    </template>
  ```

</template>

<template v-slot:script>

  ```html{4}
    <script setup>
     import {ref} from 'vue';
     
     const date = ref();
    </script>
  ```

</template>

</card>

<card>

## API

</card>
