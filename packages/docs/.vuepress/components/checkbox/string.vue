<template>
  <div class="center con-checkbox">
    <vs-checkbox val="自动" v-model="option">
      自动保存数据
    </vs-checkbox>

    <span class="data">
      {{ option ? option : 'null'}}
    </span>
  </div>
</template>
<script>
export default {
  data:() => ({
    option: null,
  })
}
</script>
<style scoped lang="stylus">
.con-checkbox
  flex-direction column
  >>>.vs-checkbox-content
    min-width 80px
  .data
    background rgba(0,0,0,.03)
    padding 10px 20px
    border-radius 18px
</style>
