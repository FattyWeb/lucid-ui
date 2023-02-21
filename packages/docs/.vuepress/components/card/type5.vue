<template>
  <div class="center">
    <vs-card type="5">
      <template #title>
        <h3>塔克拉玛干沙漠</h3>
      </template>
      <template #img>
        <img src="/foto13.png" alt="">
      </template>
      <template #text>
        <p>
          位于新疆南疆的塔里木盆地中心地带，是中国最大的沙漠，亦是世界第二大流动沙漠。
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
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
  .btn-chat
    i
      font-size 1.2rem
    .span
      padding-left 5px
      font-weight bold
</style>
