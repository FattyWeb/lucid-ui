
<template>
  <div class="center con-switch">
    <vs-switch v-model="active">
      订阅
    </vs-switch>
    <vs-switch v-model="active2">
      <template #off>
          关闭
      </template>
      <template #on>
          开启
      </template>
    </vs-switch>
    <vs-switch v-model="active3">
      <template #off>
          默认
      </template>
      <template #on>
          优质选项
      </template>
    </vs-switch>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
    active2: false,
    active3: false,
  }),
}
</script>
<style lang="stylus" scoped>
.con-switch
  display flex
  align-items center
  justify-content center
  >>>.vs-switch
    margin 10px
</style>
