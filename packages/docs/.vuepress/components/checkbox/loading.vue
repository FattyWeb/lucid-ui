<template>
  <div class="center con-checkbox">
    <vs-checkbox loading v-model="option">
      加载中 选中
    </vs-checkbox>
    <vs-checkbox loading v-model="option2">
      加载中 未选中
    </vs-checkbox>
  </div>
</template>
<script>
export default {
  data:() => ({
    option: true,
    option2: false,
  })
}
</script>
<style scoped lang="stylus">
.con-checkbox
  flex-direction column
  align-items flex-start
</style>
