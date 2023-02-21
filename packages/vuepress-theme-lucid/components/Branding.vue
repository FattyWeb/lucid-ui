<template>
  <div class="con-branding">
    <div class="content-b">
<!--      插图-->
      <header>
        <img class="not-darken" src="/lucid-brand-white.svg" alt="">
        <img class="has-darken" src="/lucid-brand-dark.svg" alt="">
      </header>
      <div class="b-text">
        <h2>
          LOGO
        </h2>
        <p>
          请勿随意编辑、篡改logo
        </p>
      </div>


      <div
        v-for="(item,index) in images"
        :key="index"
        :class="{'black': item.black}"
        class="con-images">
        <div
          class="con-img">
          <h2>
            {{ item.mini.title }}
          </h2>
          <div class="img">
            <img :src="item.mini.img" :alt="`lucid-${item.mini.title}`">
          </div>
          <footer>
            <a :href="item.mini.svg" :download="`lucid-${item.mini.title}`" >
              <i class='bx bx-download'></i> .Svg
            </a>
            <a :href="item.mini.png" :download="`lucid-${item.mini.title}`">
              <i class='bx bx-download'></i> .Png
            </a>
          </footer>
        </div>

        <div
          class="con-img normal">
          <h2>
            {{ item.normal.title }}
          </h2>
          <div class="img">
            <img :src="item.normal.img" :alt="item.normal.title">
          </div>
          <footer>
            <a :href="item.normal.svg" :download="`lucid-${item.normal.title}`" >
              <i class='bx bx-download'></i> .Svg
            </a>
            <a :href="item.normal.png" :download="`lucid-${item.normal.title}`">
              <i class='bx bx-download'></i> .Png
            </a>
          </footer>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Footer from './Footer.vue'
export default {
  components: {
    Footer
  },
  data:() =>({
    images: [
      {
        mini: {
          img: '/logos/logo-lucid-logotipo-lucid-png-1.png',
          title: '黑色垂直排列',
          svg: '/logos/logo-lucid-svg-1.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-1.png'
        },
        normal: {
          img: '/logos/logo-lucid-logotipo-lucid-png-3.png',
          title: '黑色水平排列',
          svg: '/logos/logo-lucid-svg-3.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-3.png'
        },
      },
      {
        black: true,
        mini: {
          img: '/logos/logo-lucid-logotipo-lucid-png-2.png',
          title: '白色垂直排列',
          svg: '/logos/logo-lucid-svg-2.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-2.png'
        },
        normal: {
          img: '/logos/logo-lucid-logotipo-lucid-png-4.png',
          title: '白色水平排列',
          svg: '/logos/logo-lucid-svg-4.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-4.png'
        },
      },
      {
        mini: {
          img: '/logos/logo-lucid-logotipo-lucid-png-7.png',
          title: '黑色纯logo',
          svg: '/logos/logo-lucid-svg-7.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-7.png'
        },
        normal: {
          img: '/logos/logo-lucid-logotipo-lucid-png-5.png',
          title: 'logo文字',
          svg: '/logos/logo-lucid-svg-5.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-5.png'
        },
      },
      {
        black: true,
        mini: {
          img: '/logos/logo-lucid-logotipo-lucid-png-8.png',
          title: '白色纯logo',
          svg: '/logos/logo-lucid-svg-8.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-8.png'
        },
        normal: {
          img: '/logos/logo-lucid-logotipo-lucid-png-6.png',
          title: 'logo文字',
          svg: '/logos/logo-lucid-svg-6.svg',
          png: '/logos/logo-lucid-logotipo-lucid-png-6.png'
        },
      }
    ]
  })
}
</script>
<style lang="stylus" scoped>
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .con-branding
    .con-images
      &.black
        .img
          background #16181a !important
          border 2px solid #16181a !important

.con-branding
  ~ >>>.config
    left 0px
  .con-images
    display flex
    align-items flex-start
    justify-content space-between
    margin 60px 0px
    &.black
      .img
        background #000000 !important
        border 2px solid #000000 !important
    .con-img
      width 30%
      margin-right 20px

      &.normal
        width 70%
        margin-right 0px
        .img
          border-radius 25px 0px 25px 0px
          padding 20px 60px
      footer
        display flex
        align-items center
        justify-content flex-end
        padding 10px 0px
        a
          background transparent
          border 2px solid getVar(theme-bg2)
          padding 6px 15px
          margin-left 8px
          border-radius 10px
          font-weight bold
          font-size .75rem
          transition all .25s ease
          display flex
          align-items center
          justify-content center
          i
            margin-right 7px
          &:hover
            background getVar(theme-bg2)
      .img
        padding 30px
        background #f7f9f9
        border 2px solid darken(#f7f9f9, 5%)
        border-radius 0px 25px 0px 25px
        background-size: 20px 20px
        background-position 0 0,30px 30px
        display flex
        align-items center
        justify-content center
        min-height 224px
        // background-color getVar(theme-layout)
        // background-image linear-gradient(45deg,getVar(theme-bg) 25%,transparent 0,transparent 75%,getVar(theme-bg) 0,getVar(theme-bg)),linear-gradient(45deg,getVar(theme-bg) 25%,transparent 0,transparent 75%,getVar(theme-bg) 0,getVar(theme-bg))
        img
          max-width 100%
          max-height 160px
      h2
        padding 10px 0px
        font-size 1rem
  h2
    border 0px
    margin 0px
    padding 0px
  .b-text
    text-align left
    margin-top 0px
    padding-top 50px
    p
      margin 0px
  .content-b
    width 100%
    max-width 1000px
    margin auto
    padding 20px
    padding-top 0px
    header
      width 100%
      margin auto
      max-width 800px
      position relative

      &::after
        content: ''
        position absolute
        top 0px
        left 0px
        width 100%
        height 80px
        background-image: linear-gradient(180deg, getVar(theme-layout) 0%, transparent 100%);
        z-index 200

      img
        width 100%

@media (max-width: 800px)
  .con-branding
    .con-images
      .con-img
        .img
          padding 10px
        h2
          font-size .8rem
@media (max-width: 600px)
  .con-branding
    .con-images
      flex-direction column
      align-items center
      justify-content center
      .con-img
        margin 0px !important
        width 100% !important
        .img
          min-height auto
          padding 20px !important

</style>
