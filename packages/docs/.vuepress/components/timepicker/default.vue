<template>
  <div class="center">
    <vs-time-picker label-placeholder="选择时间" v-model="date"></vs-time-picker>
  </div>
</template>
<script>
export default {
  data:() => ({
    date: undefined,
  })
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

