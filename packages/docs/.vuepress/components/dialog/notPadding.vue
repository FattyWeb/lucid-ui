<template>
  <div class="center">
    <vs-button flat @click="active=!active">
      打开对话框 无padding
    </vs-button>
    <vs-dialog not-close auto-width not-padding v-model="active">
      <div class="con-image">
        <img src="/foto1.png" alt="">
      </div>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
  })
}
</script>
<style lang="stylus">
.con-image
  border-radius inherit
  img
    display block
    position relative
    border-radius inherit
    max-width 350px
</style>
