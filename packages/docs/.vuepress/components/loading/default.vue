<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">激活加载</vs-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$vs.loading()
      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
</script>
