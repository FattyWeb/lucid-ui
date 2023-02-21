<template>
  <div class="center con-avatars">
    <vs-button border @click="openNotification(null)">
      默认持续时间 (4s)
    </vs-button>
    <vs-button border @click="openNotification(6000)">
      持续时间 6s
    </vs-button>
    <vs-button border @click="openNotification(10000)">
      持续时间 10s
    </vs-button>
    <vs-button border @click="openNotification('none')">
      持续时间 none
    </vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification(duration) {
      const noti = this.$vs.notification({
        duration,
        progress: 'auto',
        title: 'Lucid 文档',
        text: 'Lucid 是一个基于vue3的 ui组件库 目前版本是1.0.0-alpha 如果您有任何意见 请访问此地址👉🏻https://github.com/FattyWeb/lucid-ui/issues给我们提issues',
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
  transform-origin center
  &.b-r
    transform rotate(90deg)
  &.t-r
    transform rotate(0deg)
  &.t-l
    transform rotate(-90deg)
  &.b-l
    transform rotate(-180deg)
</style>
