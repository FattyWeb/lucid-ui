<template>
  <div class="center">
    <vs-button flat @click="active=!active">{{ active ? '关闭' : '打开' }}</vs-button>

    <vs-alert closable v-model="active">
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: true,
  })
}
</script>
