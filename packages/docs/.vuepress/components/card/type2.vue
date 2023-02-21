<template>
  <div class="center">
    <vs-card type="2">
      <template #title>
        <h3>时代周刊（Time）</h3>
      </template>
      <template #img>
        <img src="/foto6.png" alt="">
      </template>
      <template #text>
        <p>
          创刊于1923年，是近一个世纪以来最先出现的新闻周刊之一，特为新的日益增长的国际读者群开设一个了解全球新闻的窗口。
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
