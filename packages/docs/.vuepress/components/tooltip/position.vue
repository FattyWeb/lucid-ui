<template>
  <div class="center">
    <vs-tooltip left>
      <vs-button border>
        左侧
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
    <vs-tooltip>
      <vs-button border>
        顶部
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
    <vs-tooltip bottom>
      <vs-button border>
        底部
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
    <vs-tooltip right>
      <vs-button border>
        右侧
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
  .vs-tooltip-content
    margin 0px 5px
</style>
