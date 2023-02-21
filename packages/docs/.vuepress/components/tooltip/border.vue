<template>
  <div class="center">
    <vs-tooltip border>
      <vs-button transparent>
        将光标移到此处
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
    <vs-tooltip danger border>
      <vs-button danger transparent>
        将光标移到此处
      </vs-button>
      <template #tooltip>
        这是一个精美的按钮
      </template>
    </vs-tooltip>
    <vs-tooltip color="#7d33ff" border-thick>
      <vs-button color="#7d33ff" transparent>
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
    .vs-tooltip-content
      margin 10px
</style>
