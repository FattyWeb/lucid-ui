<template>
  <div class="center">
    <vs-tooltip square>
      <vs-button square flat>
        将光标移到此处
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false
  })
}
</script>
<style scoped lang="stylus">
  .vs-button
    margin 0px
</style>
