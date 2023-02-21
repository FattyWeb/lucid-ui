<template>
  <div class="center">
    <vs-button>
      主菜单
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </vs-button>

    <vs-button
      flat
      success
      animation-type="vertical"
    >
      信息
      <template #animate >
        <i class='bx bx-mail-send' ></i> 发送
      </template>
    </vs-button>

    <vs-button
      gradient
      style="min-width: 60px"
      warn
      animation-type="scale"
    >
      <i class='bx bxs-shopping-bag' ></i>
      <template #animate >
        商城
      </template>
    </vs-button>

    <vs-button
      icon
      relief
      danger
      animation-type="rotate"
    >
      <i class='bx bx-like'></i>
      <template #animate >
        <i class='bx bxs-like' ></i>
      </template>
    </vs-button>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 0
  })
}
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

