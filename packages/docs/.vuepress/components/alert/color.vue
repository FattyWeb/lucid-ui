<template>
  <div class="center alert-example">
    <vs-alert :color="color">
      <template #title>
        Lucid 组件库
      </template>
      Lucid是一个<b>基于Vuejs3.x创建的UI组件框架</b>, 用于轻松的创建项目，具有独特而精美的风格。
      Lucid是从零开始搭建的，专为所有类型的开发人员而设计，从前端爱好者到后端，他们都能够轻松地搭建一套风格独特应用
    </vs-alert>

    <vs-button :active="color == 'primary'" @click="color = 'primary'" flat>
      主色
    </vs-button>
    <vs-button :active="color == 'success'" @click="color = 'success'" success flat>
      成功
    </vs-button>
    <vs-button :active="color == 'danger'" @click="color = 'danger'" danger flat>
      危险
    </vs-button>
    <vs-button :active="color == 'warn'" @click="color = 'warn'" warn flat>
      警告
    </vs-button>
    <vs-button :active="color == 'dark'" @click="color = 'dark'" dark flat>
      暗色
    </vs-button>
    <vs-button :active="color == '#7d33ff'" @click="color = '#7d33ff'" color="#7d33ff" flat>
      HEX
    </vs-button>
    <vs-button :active="color == 'rgb(59,222,200)'" @click="color = 'rgb(59,222,200)'" color="rgb(59,222,200)" flat>
      RGB
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    color: 'danger'
  })
}
</script>
<style scoped lang="stylus">
.alert-example
  .vs-button--active
    transform translate(0, -5px)
    border-radius 0px 0px 12px 12px
</style>
