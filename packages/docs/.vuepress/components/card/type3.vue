<template>
  <div class="center">
    <vs-card type="3">
      <template #title>
        <h3>金州勇士队</h3>
      </template>
      <template #img>
        <img src="/foto1.png" alt="">
      </template>
      <template #text>
        <p>
          于1946年成立并加盟BAA(1949年加盟NBA)，是一支属于美国加利福尼亚州旧金山市的职业篮球队，是美国职业篮球联赛（NBA）西部联盟太平洋赛区的一部分。
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
