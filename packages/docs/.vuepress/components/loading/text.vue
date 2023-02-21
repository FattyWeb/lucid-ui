<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">激活加载 <b>文言</b></vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: '加载中...'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>
<style scoped lang="stylus">
  b
    margin-left 5px
</style>
