<template>
  <div class="content-i">
    <div class="con-text">
      <h2 v-html="data.title" />

      <p v-html="data.details" />

      <button @click="$router.push(data.action)" class="btn-action">
        {{ data.actionText }}
      </button>
    </div>
    <div class="con-ilus">
      <img class="not-darken" src="/lucid-white-2.svg" alt="">
      <img class="has-darken" src="/lucid-dark-2.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.btn-action
  display inline-block
  font-size 1rem
  color #fff
  background transparent
  padding 13px 20px
  border-radius 15px
  transition background-color .1s ease
  box-sizing border-box
  transition all .25s ease
  box-shadow 0px 0px 0px 0px getColor('primary', .6)
  background getColor('primary')
  font-size .8rem
  border 0px
  margin-top 10px
  i
    display none
  &:hover
    box-shadow 0px 10px 20px -10px getColor('primary', .6)
    transform translate(0,-5px)
.content-i
  width 100%
  padding 120px 70px
  display flex
  align-items center
  justify-content center
  max-width 1400px
  margin auto
  .con-text
    padding-left 50px
    width 50%
    h2
      border 0px
      font-size 2rem
      font-weight normal
  .con-ilus
    width 50%
    height 450px
    padding-left 50px
    max-width 600px
    img
      width 100%
      height auto
</style>
