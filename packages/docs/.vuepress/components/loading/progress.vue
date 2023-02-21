<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">激活加载 <b>进度</b></vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    progress: 0
  }),
  methods: {
    openLoading() {

      const loading = this.$vs.loading({
        progress: 0
      })
      const interval = setInterval(() => {
        if (this.progress <= 100) {
          loading.changeProgress(this.progress++)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.progress = 0
      }, 4100)
    }
  }
}
</script>
<style scoped lang="stylus">
  b
    margin-left 5px
</style>
