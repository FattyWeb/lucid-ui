<template>
  <div class="center">
    <vs-card type="4">
      <template #title>
        <h3>水培龟背竹</h3>
      </template>
      <template #img>
        <img src="/foto2.jpg" alt="">
      </template>
      <template #text>
        <p>
         为常绿藤本植物，茎粗壮。属天南星科龟背竹属,又名蓬莱燕,属草质藤本。茎木质化,叶片大,轮廓像心形,叶柄长。原产墨西哥,现各地均有栽培。
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
