<template>
  <div class="center">
    <vs-button
      upload
      :active="active == 0"
      @click="active = 0"
    >
      主菜单
    </vs-button>

    <vs-button
      upload
      icon
      success
      flat
      :active="active == 1"
      @click="active = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </vs-button>

    <vs-button
      upload
      danger
      border
      :active="active == 2"
      @click="active = 2"
    >
      <i class="bx bxs-heart"></i> 喜欢
    </vs-button>

    <vs-button
      upload
      warn
      gradient
      :active="active == 3"
      @click="active = 3"
    >
      通知 <i class="bx bxs-bell-ring"></i>
    </vs-button>

    <vs-button
      upload
      dark
      transparent
      :active="active == 5"
      @click="active = 5"
    >
      暗色
    </vs-button>

    <vs-button
      upload
      icon
      color="#7d33ff"
      relief
      :active="active == 5"
      @click="active = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </vs-button>

    <vs-button
      upload
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active == 6"
      @click="active = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
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
