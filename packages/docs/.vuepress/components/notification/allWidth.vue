<template>
  <div class="center">
    <vs-button shadow icon @click="openNotification(null, '')">
      <i class='bx bx-border-bottom' ></i>
    </vs-button>
    <vs-button flat icon @click="openNotification('top-center', 'primary', 'auto')">
      <i class='bx bx-border-radius b-r'></i>
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(position = null, color, width = '100%') {
      const noti = this.$vs.notification({
        width,
        color,
        title: 'Lucid 文档',
        text: 'Lucid 是一个基于vue3的 ui组件库  目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻https://github.com/FattyWeb/lucid-ui/issues给我们提issues'
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.vs-button
  margin 10px
i
  margin 2px
  font-size 1.2rem
  &.b-r
    transform rotate(90deg)
</style>
