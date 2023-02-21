<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      选项 A
    </vs-radio>
    <vs-radio v-model="picked" val="2">
      选项 B
    </vs-radio>
    <vs-radio disabled v-model="picked" val="3">
      选项 C
    </vs-radio>
    <vs-radio v-model="picked" val="4">
      选项 D
    </vs-radio>
  </div>
</template>
<script>
export default {
  data:() => ({
    picked: 1,
  })
}
</script>
<style lang="stylus" scoped>
.center
  flex-direction column
  align-items flex-start
  .vs-radio-content
    margin 5px 0px
</style>
