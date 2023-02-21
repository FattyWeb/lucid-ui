<template>
  <div class="con-patrons">
    <h2>
      赞助商
    </h2>
    <div class="ul">
      <a target="_blank" href="https://www.xiangleba.com.cn/">
        <img class="type" style="border-radius: 10px" src="xlb.jpg" alt="">
        <img class="type themeDarken" src="/xlb.jpg" alt="">
      </a>
      <a class="plus" target="_blank" href="https://weibo.com/u/7068377737">
        <i class='bx bx-plus'></i>
      </a>
    </div>
    <p>
      这有助于让开发者拿出专门的开发时间
      以便开发团队能够向前发展
    </p>
    <button @click="openUrl">
      <img src="Patreon_Mark_Primary.png" alt="">
      成为赞助商
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    openUrl() {
      open('https://weibo.com/u/7068377737')
    }
  }
}
</script>
<style lang="stylus">
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.darken
  .con-patrons
    button
      // box-shadow 0px 10px 20px -5px rgba(0,0,0,.3)
      background getVar(theme-bg)
    .ul
      a
        // box-shadow 0px 20px 35px -5px rgba(0,0,0,.2)
        background getVar(theme-bg)
        img
          display none
        .themeDarken
          display block
.con-patrons
  display flex
  align-items center
  justify-content center
  padding 20px 20px
  z-index 1000
  flex-direction column
  position relative
  button
    padding 14px 25px
    border 0px
    background transparent
    color getVar(theme-color)
    font-weight bold
    box-shadow 0px 5px 20px 0px rgba(0,0,0,.06)
    border-radius 14px
    font-size .75rem
    display flex
    align-items center
    justify-content center
    margin-top 20px
    transition all .25s ease
    &:hover
      transform translate(0, 4px)
      box-shadow 0px 0px 0px 0px rgba(0,0,0,.06)
    img
      width 15px
      margin-right 7px
  p
    font-size .8rem
    opacity .5
    text-align center
  h2
    border 0px
    font-size 1.1rem
    font-weight 600
    margin 0px
  .ul
    display flex
    align-items center
    justify-content center
    a
      list-style none
      width 130px
      height 130px
      margin 15px
      display flex
      align-items center
      justify-content center
      border-radius 35px
      padding 15px
      box-shadow 0px 10px 35px -5px rgba(0,0,0,.06)
      cursor pointer
      transition all .25s ease
      &:hover
        transform translate(0, 8px)
        box-shadow 0px 0px 0px 0px rgba(0,0,0,.06)
      i
        font-size 2rem
      img
        width 100%
      .type
        width 80%

      .themeDarken
        display none

@media (max-width: 800px)
  .con-patrons
    .ul
      a
        margin 15px 10px
        width 110px
        height 110px
@media (max-width: 600px)
  .con-patrons
    padding 0px
    .ul
      flex-wrap wrap
      a
        margin 15px 8px
        width 90px
        height 90px
        padding 8px
        &.plus
          display none
</style>
