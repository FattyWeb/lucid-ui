<template>
  <div class="center">
    <vs-button-group>
      <vs-button>
        组1
      </vs-button>
      <vs-button>
        组2
      </vs-button>
      <vs-button>
        组3
      </vs-button>
      <vs-button>
        组4
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button flat icon>
        <i class='bx bx-play' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-pause' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-fast-forward' ></i>
      </vs-button>
      <vs-button flat icon>
        <i class='bx bx-shuffle' ></i>
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button border>
        <i class='bx bxs-pencil' ></i> 编辑
      </vs-button>
      <vs-button border icon>
        <i class='bx bx-font-color' ></i>
      </vs-button>
      <vs-button border icon>
        <i class='bx bx-align-middle' ></i>
      </vs-button>
      <vs-button border>
        <i class='bx bx-font-size' ></i> 字体
      </vs-button>
    </vs-button-group>

    <span class="divider" />

    <vs-button-group>
      <vs-button relief>
        <i class='bx bx-home-alt' ></i> 主页
      </vs-button>
      <vs-button relief>
        <i class='bx bxs-phone-call' ></i> 电联
      </vs-button>
      <vs-button relief loading>
        <i class='bx bxs-cart-alt' ></i> 购物车
      </vs-button>
      <vs-button relief upload>
        <i class='bx bxs-envelope' ></i> 发送
      </vs-button>
    </vs-button-group>
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
  flex-wrap wrap
  >>>.vs-button-group
    margin 20px 20px
</style>

