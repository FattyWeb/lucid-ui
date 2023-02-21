<template>
  <div class="center">
    <vs-button @click="openNotification">
      激活提示
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$vs.notification({
        title: 'Lucid 文档',
        text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha'
      })
    }
  }
}
</script>
