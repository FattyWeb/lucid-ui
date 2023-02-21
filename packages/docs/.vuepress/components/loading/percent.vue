<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">激活加载 <b>百分比</b></vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    percent: 0
  }),
  methods: {
    openLoading() {

      const loading = this.$vs.loading({
        percent: this.percent
      })
      const interval = setInterval(() => {
        if (this.percent <= 100) {
          loading.changePercent(`${this.percent++}%`)
        }
      }, 40)
      setTimeout(() => {
        loading.close()
        clearInterval(interval)
        this.percent = 0
      }, 4100)
    }
  }
}
</script>
<style scoped lang="stylus">
  b
    margin-left 5px
</style>
