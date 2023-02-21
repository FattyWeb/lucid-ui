<template>
  <div class="center">
    <vs-button flat @click="open">点击提示</vs-button>

    <vs-button flat @click="open"></vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    open() {
      this.$vs.message({
        message: '这是一个消息提示',
        duration: 2000
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

