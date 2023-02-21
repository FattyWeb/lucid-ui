<template>
  <div class="center">
      <vs-tooltip not-arrow left>
        <vs-button border>
          左侧 无箭头
        </vs-button>
        <template #tooltip>
          这是一个精美的按钮
        </template>
      </vs-tooltip>
      <vs-tooltip not-arrow>
        <vs-button border>
          顶部 无箭头
        </vs-button>
        <template #tooltip>
          这是一个精美的按钮
        </template>
      </vs-tooltip>
      <vs-tooltip not-arrow bottom>
        <vs-button border>
          底部 无箭头
        </vs-button>
        <template #tooltip>
          这是一个精美的按钮
        </template>
      </vs-tooltip>
      <vs-tooltip not-arrow right>
        <vs-button border>
          右侧 无箭头
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
    margin 5px
</style>
