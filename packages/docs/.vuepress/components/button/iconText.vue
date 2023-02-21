<template>
  <div class="center">
    <vs-button
      :active="active == 0"
      @click="active = 0"
    >
      <i class="bx bx-home-alt"></i> 主菜单
    </vs-button>

    <vs-button
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      <i class="bx bxs-phone-call"></i> 拨打
    </vs-button>

    <vs-button
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      <i class="bx bxs-heart"></i> 喜欢
    </vs-button>

    <vs-button
      warn
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      <i class="bx bxs-bell-ring"></i> 通知
    </vs-button>

    <vs-button
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class="bx bxs-paper-plane"></i> 发送
    </vs-button>

    <vs-button
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class="bx bxs-purchase-tag"></i> 保存
    </vs-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>
