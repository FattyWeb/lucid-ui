<template>
  <div class="center content-inputs">
    <vs-date-picker border label-placeholder="选择日期" v-model="date1"></vs-date-picker>
    <vs-date-picker warn placeholder="选择日期" v-model="date2"></vs-date-picker>
<!--    <vs-date-picker label-placeholder="选择日期" v-model="date"></vs-date-picker>-->
  </div>
</template>
<script>
export default {
  data:() => ({
    date1: null,
    date2: null,
  })
}
</script>
<style lang="stylus" scoped>
.content-inputs
  >>>.vs-input-content
    margin 10px
</style>
