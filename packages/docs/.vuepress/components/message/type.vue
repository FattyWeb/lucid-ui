<template>
  <div class="center">
    <vs-button flat @click="open">消息提示</vs-button>
    <vs-button flat warn @click="open('warn', '操作有误！！！')">警告提示</vs-button>
    <vs-button flat danger @click="open('danger', '操作失败！！！')">错误提示</vs-button>
    <vs-button flat success @click="open('success', '操作成功！！！')">成功提示</vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(type, message = '点击按钮！！！') {
      this.$vs.message({
        type: type,
        message: message,
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

