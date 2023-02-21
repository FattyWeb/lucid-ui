<template>
  <div class="center">
    <vs-date-picker label-placeholder="选择日期" v-model="date"></vs-date-picker>
  </div>
</template>
<script>
export default {
  data:() => ({
    date: null,
  })
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

