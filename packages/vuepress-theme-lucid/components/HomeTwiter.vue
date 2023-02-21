<template>
  <div class="con-twits">
    <header>
      <h2>
        <span>您的建议对</span> <b>Lucid</b><span> ui库来说非常重要, 感谢您的访问!</span>
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul"
      >
      <!-- @mousewheel="scrollH" -->
      <li
        v-for="(item,index) in twits"
        :key="index"
        >
        <div class="con-img-t">
          <img :src="item.img" alt="">
          <img class="filter" :src="item.img" alt="">
        </div>
        <h5>
          <a target="_blank" :href="item.link">
            {{ item.user }}
          </a>
        </h5>
        <p v-html="item.text" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    leftx: 0,
    notPulse: true,
    translatex: 0,
    scrolling: false,
    drag: false,
    activeView: false,
    active: 0,
    delta: 0,
    mousex: 0,
    change: 0,
    moving: false,
    notScrolling: false,
    twits: [
      {
        name: 'zhangdw',
        user: 'Lucid的作者',
        link: 'https://twitter.com/Atinux',
        text: '不得不说, Lucid 太😍了',
        img: 'https://bkimg.cdn.bcebos.com/pic/728da9773912b31bb0511d618d4c217adab44aed4b64?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
      },
      {
        name: 'xxxxxx',
        user: '虚位以待',
        link: 'https://twitter.com/PaurakhSharma',
        text: '期待您的加入！！！',
        img: 'https://pbs.twimg.com/profile_images/1160037349037768704/dtk4DCfv_400x400.jpg'
      },
      {
        name: 'xxxxxx',
        user: '虚位以待',
        link: 'https://twitter.com/__illy___',
        text: '期待您的加入！！！',
        img: 'https://pbs.twimg.com/profile_images/1184434161873870848/9e37ffmP_400x400.jpg'
      },
      {
        name: 'xxxxxx',
        user: '虚位以待',
        link: 'https://twitter.com/lvzy12',
        text: '期待您的加入！！！',
        img: 'https://pbs.twimg.com/profile_images/1210388192207097857/Xj8nbZKE_400x400.jpg'
      }
    ]
  }),
  watch:{
    translatex() {
      if(this.translatex > 100) {
        this.notScrolling = true
      } else {
        this.notScrolling = false

      }
    }
  },
  mounted() {
    // this.smooth() todo
    document.addEventListener('keydown', this.keydownx)
  },
  methods: {
    smooth() {
      const element = document.querySelector('.con-projects-ul'),
      speed = 0.08

      var raf

      var offset = 0

      let _this = this
      function smoothScroll() {
        let leftx = _this.translatex
        offset += (leftx - offset) * speed

        var scroll = "translateX(-" + offset + "px) translateZ(0)"
        element.style.transform = scroll

        raf = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    },
    mouseleaveUl() {
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 50)
    },
    mousemovex(e) {
      if(this.notPulse) {
        return
      }
      // }, 10)
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      let move
      if(e.type=='touchmove'){
        move = this.mousex - (e.targetTouches[0].clientX - 200)
      } else {
        move = this.mousex - (e.clientX - 200)
      }
      if(move > 40 || move < -40) {
        this.moving = true
      }
      if(move > 50) {
        this.translatex -= -80
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      } else if (move < -50) {
        this.translatex -= 80
        if(this.translatex < 0) {
          this.translatex = 0
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      }
    },
    mouseupx(e) {
      e.preventDefault()
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      // if(e.type=='touchend'){
      //   // this.translatex -= -this.mousex + (e.targetTouches[0].clientX - 200)
      // } else {
      //   // this.translatex -= -this.mousex + (e.clientX - 200)
      // }

      if(this.translatex < 0) {
        this.translatex = 0
      }

      if(this.translatex > element.clientWidth - parent.clientWidth) {
        this.translatex = element.clientWidth - parent.clientWidth
      }



      // element.style.transform = `translate(-${this.translatex}px)`
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 1);

    },
    mousedownx(e) {
      e.preventDefault()
      setTimeout(() => {
        this.notPulse = false
      }, 20)
      if(e.type=='touchstart'){
        this.mousex = e.targetTouches[0].clientX - 200
      } else {
        this.mousex = e.clientX - 200
      }
    },
    keydownx(evt) {
      let keyx = evt.key
      const element = document.querySelector('.con-projects-ul');
      const parent = document.querySelector('.con-projects')

      if(keyx == 'ArrowRight') {
        this.translatex -= -300
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      } else if (keyx == 'ArrowLeft') {
        this.translatex -= 300
        if(this.translatex < 0) {
          this.translatex = 0
        }
      }
    },
    scrollH(e) {
      this.scrolling = true
      let _this = this
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      // console.dir(element)
      if (delta == 1 && this.translatex > 0) {

        this.translatex -= 250
        if(this.translatex < 0) {
          this.translatex = 0
        }

      } else if (delta == -1 && this.translatex < (element.clientWidth - parent.clientWidth)) {
        this.translatex += 250
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
getColor(colorx, alpha = 1)
    unquote("rgba(var(--vs-"+colorx+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")

.darken
  .con-twits
    ul
      li
        background getVar(theme-bg)
        .filter
          opacity .2

.con-twits
  display flex
  align-items flex-start
  justify-content center
  flex-direction column
  overflow hidden
  position relative
  margin-top 150px
  margin-bottom 70px
  header
    width 100%
    text-align center
    position absolute
    top 0px
    h2
      font-size 1.2rem
      font-weight normal
      border 0px
      padding 0px
      margin 0px
      padding 50px
      span
        opacity .6
  ul
    display flex
    align-items center
    justify-content flex-start
    padding-bottom 100px
    padding-top 130px
    li
      width 320px
      list-style-type none
      display flex
      align-items center
      justify-content center
      flex-direction column
      position relative
      box-shadow 0px 10px 30px -5px rgba(0,0,0,.05)
      border-radius 40px
      padding 20px
      padding-top 0px
      transition all .25s ease
      margin 20px
      &:hover
        background getColor('primary')
        box-shadow 0px 10px 30px -5px getColor('primary', .4)
        transform translate(0,-10px)
        color #fff
        h5
          a
            color #fff !important
        .con-img-t
          transform translate(0,-5px)
        p
          opacity 1
      h5
        margin 0px
        margin-top 12px
        a
          font-weight bold
      p
        opacity .7
        font-size .8rem
        text-align center
      .con-img-t
        width 90px
        position relative
        transition all .3s ease
      img
        width 100%
        border-radius 35%
        margin-top -40px
        z-index 100
        position relative
        &.filter
          z-index 50
          position absolute
          left 0px
          top 10px
          opacity .35
          filter blur(12px)

@media (max-width: 600px)
  .con-twits
    margin-top 50px
    margin-bottom 0px
    ul
      padding 50px 20px
      padding-top 100px
    header
      h2
        padding 10px
    .con-projects-ul
      overflow auto
      width 100%
      li
        position relative
        min-width 320px
      &::-webkit-scrollbar
        height 0px
</style>
