<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link
      :to="$routeLocale"
      class="home-link"
    >
      <!-- <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      >
      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'can-hide': $site.themeConfig.logo }"
      >{{ $siteTitle }}</span>
      lucid -->
      <svg class="logo-nav" viewBox="0 0 420 118" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1">
       <defs>
        <linearGradient y2="0.60352" x2="0.62942" y1="0.19809" x1="0.12136" id="SVGID_1_">
         <stop stop-color="#1AC7FC" offset="0"/>
          <stop stop-color="#195EFF" offset="0.6397"/>
        </linearGradient>
         <linearGradient y2="0.60973" x2="0.66914" y1="-0.00778" x1="-0.32655" id="SVGID_2_">
         <stop stop-color="#1AC7FC" offset="0"/>
           <stop stop-color="#195EFF" offset="0.6397"/>
        </linearGradient>
       </defs>
        <g>
          <title>Layer 1</title>
                  <path id="svg_1" fill="url(#SVGID_1_)" d="m99.35,85.93c-1.76,1.01 -3.53,2.01 -5.28,3.02c-4.65,2.69 -9.29,5.38 -13.94,8.07c-3.83,2.22 -7.66,4.45 -11.5,6.67c-3.92,2.27 -7.84,4.52 -11.76,6.79c-0.83,0.48 -1.65,0.97 -2.47,1.46c-0.21,0.12 -0.43,0.23 -0.74,0.38c-0.02,-0.3 -0.05,-0.51 -0.05,-0.72c-0.01,-2.48 -0.02,-4.97 0.01,-7.45c0,-0.21 0.2,-0.5 0.39,-0.6c7.18,-4.16 14.38,-8.31 21.57,-12.45c5.26,-3.03 10.52,-6.08 15.79,-9.09c0.52,-0.3 0.73,-0.61 0.72,-1.22c-0.02,-12.28 -0.02,-24.56 -0.02,-36.84c0,-3.4 0,-6.8 0.02,-10.21c0,-0.37 -0.09,-0.58 -0.43,-0.78c-3.7,-2.09 -7.4,-4.21 -11.09,-6.32c-3,-1.72 -5.99,-3.45 -8.99,-5.17c-4.63,-2.64 -9.26,-5.27 -13.9,-7.91c-2.16,-1.23 -4.32,-2.44 -6.46,-3.69c-0.35,-0.2 -0.61,-0.2 -0.95,0.01c-4.37,2.62 -8.76,5.22 -13.14,7.83c-2.65,1.57 -5.31,3.14 -7.97,4.71c-1.06,0.63 -2.11,1.26 -3.15,1.92c-0.17,0.11 -0.32,0.38 -0.32,0.57c-0.03,2.44 -0.03,4.89 -0.03,7.33c-0.02,11.59 -0.03,23.19 -0.04,34.78c0,1.68 0.03,3.36 0.02,5.04c0,0.46 0.19,0.68 0.57,0.9c7.83,4.35 15.64,8.72 23.48,13.04c0.82,0.45 1.12,0.91 1.12,1.86c-0.04,8.62 -0.03,17.24 -0.02,25.87c-0.04,0 -0.08,0 -0.12,0c-0.15,-0.11 -0.29,-0.25 -0.45,-0.34c-1.16,-0.68 -2.33,-1.35 -3.5,-2.02c-5.56,-3.2 -11.13,-6.41 -16.69,-9.61c-4.65,-2.68 -9.31,-5.34 -13.96,-8.02c-3.2,-1.84 -6.4,-3.66 -9.59,-5.51c-1.55,-0.9 -3.08,-1.85 -4.61,-2.77c0,-18.69 0,-37.39 0,-56.08c5.46,-3.14 10.92,-6.28 16.38,-9.43c10.76,-6.2 21.52,-12.4 32.28,-18.61c0.31,-0.18 0.53,-0.2 0.85,-0.01c1.67,1 3.37,1.98 5.05,2.97c6.31,3.72 12.62,7.44 18.93,11.15c6.7,3.94 13.4,7.88 20.1,11.81c1.29,0.76 2.6,1.49 3.91,2.23c-0.02,18.81 -0.02,37.63 -0.02,56.44z" class="st0"/>
                  <path id="svg_2" fill="url(#SVGID_2_)" d="m62.21,75.77615c-0.85,0.55 -1.62,1.04 -2.38,1.53c-1.34,0.85 -2.68,1.68 -4.01,2.54c-0.3,0.2 -0.54,0.21 -0.85,0.03c-3.53,-2.04 -7.07,-4.07 -10.62,-6.08c-3.19,-1.82 -6.38,-3.62 -9.58,-5.43c-0.49,-0.28 -0.8,-0.58 -0.8,-1.22c-0.01,-12.03 -0.03,-24.05 -0.08,-36.08c0,-0.72 0.21,-1.12 0.84,-1.47c5.24,-2.98 10.45,-6 15.69,-8.99c0.2,-0.11 0.58,-0.12 0.78,0c3.26,1.86 6.49,3.74 9.74,5.61c2.01,1.16 4.03,2.31 6.03,3.48c1.22,0.72 2.41,1.5 3.63,2.21c1.13,0.67 2.29,1.29 3.44,1.94c0.47,0.27 0.93,0.57 1.4,0.83c1.36,0.75 2.72,1.49 4.07,2.25c1.24,0.7 2.46,1.43 3.69,2.13c0.38,0.22 0.44,0.55 0.44,0.95c-0.01,1.76 -0.01,3.52 -0.01,5.28c0,10.4 0,20.8 0.01,31.21c0,0.43 -0.13,0.67 -0.5,0.88c-4.31,2.49 -8.62,4.98 -12.93,7.49c-3.98,2.31 -7.96,4.64 -11.94,6.96c-1.43,0.83 -2.87,1.66 -4.31,2.49c-0.06,0.04 -0.14,0.05 -0.29,0.09c-0.02,-0.22 -0.05,-0.4 -0.05,-0.59c0,-2.37 0.01,-4.73 -0.01,-7.1c0,-0.34 0.12,-0.52 0.4,-0.68c7.14,-4.16 14.26,-8.33 21.4,-12.48c0.35,-0.2 0.49,-0.41 0.48,-0.82c-0.01,-9.46 -0.01,-18.93 0,-28.39c0,-0.53 -0.15,-0.88 -0.65,-1.17c-4.81,-2.79 -9.6,-5.61 -14.4,-8.42c-3,-1.75 -6,-3.5 -8.99,-5.27c-0.36,-0.21 -0.62,-0.18 -0.95,0.02c-2.99,1.73 -5.98,3.45 -8.98,5.15c-0.34,0.19 -0.45,0.42 -0.45,0.79c0.01,8.84 0.01,17.68 0.01,26.51c0,0.14 0.03,0.28 0.01,0.41c-0.25,1.15 0.44,1.63 1.33,2.12c2.08,1.15 4.11,2.4 6.17,3.59c1.38,0.8 2.78,1.57 4.17,2.37c1.55,0.89 3.1,1.8 4.65,2.69c1.24,0.72 2.5,1.42 3.74,2.14c0.19,0.13 0.38,0.29 0.66,0.5z" class="st1"/>
                  <g id="svg_3">
           <g id="svg_4">
            <path id="svg_5" fill="#195EFF" d="m146.37,32.81802l0,1.56c-1.15,0.29 -1.91,0.65 -2.29,1.08c-0.38,0.43 -0.57,1.17 -0.57,2.21l0,30.95l26.47,0c1.08,0 1.81,-0.18 2.21,-0.54c0.4,-0.36 0.74,-1.1 1.02,-2.21l1.51,0l0,17.31l-1.51,0c-0.29,-1.15 -0.63,-1.9 -1.02,-2.24c-0.4,-0.34 -1.13,-0.51 -2.21,-0.51l-43.73,0l0,-1.56c1.19,-0.29 1.97,-0.64 2.35,-1.05c0.38,-0.41 0.57,-1.12 0.57,-2.13l0,-38.01c0,-1.04 -0.2,-1.78 -0.59,-2.21c-0.4,-0.43 -1.17,-0.79 -2.32,-1.08l0,-1.56l20.11,0l0,-0.01z" class="st9"/>
             <path id="svg_6" fill="#195EFF" d="m207.89,57.99802c0,4.13 0.84,7.08 2.51,8.84c1.67,1.76 4.39,2.64 8.17,2.64c3.95,0 6.78,-0.84 8.49,-2.53c1.71,-1.69 2.56,-4.6 2.56,-8.73l0,-20.54c0,-1.04 -0.19,-1.78 -0.57,-2.21c-0.38,-0.43 -1.14,-0.79 -2.29,-1.08l0,-1.56l20,0l0,1.51c-1.11,0.29 -1.86,0.64 -2.24,1.05c-0.38,0.41 -0.57,1.18 -0.57,2.29l0,23.35c0,6.72 -2.13,11.8 -6.39,15.23c-4.26,3.43 -10.59,5.15 -19.01,5.15c-8.45,0 -14.73,-1.72 -18.84,-5.15c-4.12,-3.43 -6.17,-8.71 -6.17,-15.83l0,-22.75c0,-1.04 -0.2,-1.78 -0.59,-2.21c-0.4,-0.43 -1.17,-0.79 -2.32,-1.08l0,-1.56l20,0l0,1.51c-1.08,0.29 -1.81,0.65 -2.18,1.08c-0.38,0.43 -0.57,1.19 -0.57,2.26l0,20.32l0.01,0z" class="st9"/>
             <path id="svg_7" fill="#195EFF" d="m306.29,50.39802l-1.35,-0.43c0.07,-0.14 0.13,-0.29 0.16,-0.43c0.04,-0.14 0.05,-0.27 0.05,-0.38c0,-1.37 -1.46,-2.61 -4.37,-3.72c-2.91,-1.11 -6.24,-1.67 -9.97,-1.67c-5.18,0 -9.33,1.16 -12.46,3.48c-3.13,2.32 -4.69,5.4 -4.69,9.25c0,3.81 1.5,6.82 4.5,9.03c3,2.21 7.14,3.32 12.43,3.32c2.48,0 4.75,-0.26 6.82,-0.78c2.07,-0.52 4.29,-1.41 6.66,-2.67c0.5,-0.29 0.86,-0.56 1.08,-0.81c0.22,-0.25 0.32,-0.52 0.32,-0.81c0,-0.25 -0.03,-0.49 -0.08,-0.7c-0.05,-0.22 -0.14,-0.47 -0.24,-0.75l1.35,-0.54l9.38,14.88l-1.13,0.7c-0.58,-0.5 -0.99,-0.84 -1.24,-1c-0.25,-0.16 -0.5,-0.24 -0.75,-0.24c-0.18,0 -0.79,0.25 -1.83,0.75c-6.43,3.09 -13.25,4.64 -20.43,4.64c-9.67,0 -17.33,-2.26 -23,-6.79c-5.66,-4.53 -8.49,-10.57 -8.49,-18.12c0,-7.33 2.78,-13.31 8.33,-17.93c5.55,-4.62 12.86,-6.93 21.92,-6.93c4.78,0 11.92,1.4 21.41,4.21c0.4,0 0.75,-0.1 1.08,-0.3c0.32,-0.2 0.74,-0.58 1.24,-1.16l1.24,0.43l-7.94,15.47z" class="st9"/>
             <path id="svg_8" fill="#195EFF" d="m343.06,75.68802c0,1.01 0.18,1.72 0.54,2.13c0.36,0.41 1.13,0.76 2.32,1.05l0,1.56l-20,0l0,-1.56c1.15,-0.25 1.91,-0.57 2.26,-0.97c0.36,-0.39 0.54,-1.13 0.54,-2.21l0,-38.01c0,-1.08 -0.18,-1.82 -0.54,-2.24c-0.36,-0.41 -1.11,-0.78 -2.26,-1.11l0,-1.51l20,0l0,1.56c-1.15,0.29 -1.91,0.65 -2.29,1.08c-0.38,0.43 -0.57,1.17 -0.57,2.21l0,38.02z" class="st9"/>
             <path id="svg_9" fill="#195EFF" d="m361.12,80.42802l0,-1.56c1.15,-0.25 1.91,-0.57 2.26,-0.97c0.36,-0.39 0.54,-1.13 0.54,-2.21l0,-38.01c0,-1.08 -0.18,-1.82 -0.54,-2.24c-0.36,-0.41 -1.11,-0.78 -2.26,-1.11l0,-1.51l25.61,0c10.14,0 17.62,1.94 22.46,5.82c4.83,3.88 7.25,9.87 7.25,17.95c0,8.09 -2.42,14.08 -7.25,17.98c-4.84,3.9 -12.32,5.85 -22.46,5.85l-25.61,0l0,0.01zm24.86,-35.69l-7.82,0l0,23.89l7.82,0c5.43,0 9.42,-0.98 11.97,-2.94c2.55,-1.96 3.83,-4.99 3.83,-9.09c0,-4.1 -1.26,-7.1 -3.77,-9c-2.52,-1.91 -6.53,-2.86 -12.03,-2.86z" class="st9"/>
           </g>
          </g>
         </g>
        </svg>
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <NavLinks class="can-hide"/>
    </div>

    <div
      :class="{'remove-links': focused}"
      class="external-links-search">
      <a
        title="Previous Version"
        class="v-old"
        target="_blank" href="">
        v1.x-beta
      </a>
      <div class="con-links">
        <a title="Github" target="_blank" href="https://github.com/FattyWeb/lucid-ui">
          <i class="bx bxl-github"></i>
        </a>
      </div>

      <SearchBox
        @focus="focused = true"
        @blur="focused = false"
        @showSuggestions="handleShowSuggestions"
        v-if="themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <!-- <NavLinksLanguages class="can-hide"/> -->
      <!-- <button @click="handlePaddle">
        Buy Now!
      </button> -->
      <div class="user-info">
        <!-- <button class="btn-login" v-if="!$user.user" @click="handleLogin">
          Login
        </button>

        <div v-else class="user-dropdown">
          <div class="user">
            <img :src="$user.user.photoURL" alt="">
          </div>

          <div class="dropdown">
            <div class="dropdown-content">
              <span class="name-user">
                {{ $user.user.displayName }}
              </span>
              <button class="logout" @click="handleLogOut">
                Logout
              </button>
            </div>
          </div>
        </div> -->

        <!-- <button @click="handleVuesaxPass" v-if="$user.user">
          Comprar Components Pass
        </button> -->
      </div>
    </div>
  </header>
</template>

<script>
// import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SidebarButton from './SidebarButton.vue'
import NavLinks from './NavLinks.vue'
// import NavLinksLanguages from '@theme/components/NavLinksLanguages.vue'
import SearchBox from './SearchBox.vue'

import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

const firebaseConfig = {
  apiKey: "AIzaSyCO1X9AaKblBqNA3OL1HvAC-7n9xhJxmdU",
  authDomain: "vuesax-framework.firebaseapp.com",
  databaseURL: "https://vuesax-framework.firebaseio.com",
  projectId: "vuesax-framework",
  storageBucket: "vuesax-framework.appspot.com",
  messagingSenderId: "150226273019",
  appId: "1:150226273019:web:0f4faefcb7549d5cbe665e",
  measurementId: "G-ELFGE3FQQF"
};
// Initialize Firebase

// Vue.prototype.$firebase = firebase

export default {
  components: { SidebarButton, NavLinks, SearchBox },

  data () {
    return {
      linksWrapMaxWidth: null,
      showSuggestions: false,
      focused: false,
      themeConfig: useThemeData().value
    }
  },

  created() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  },

  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // this.$user.user = user
        const userId = firebase.auth().currentUser.uid
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
          // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
          this.$user.user = snapshot.val()
          // ...
        });
        // ...
      } else {
        // User is signed out.
        // ...
        this.$user.user = null
      }
    });

    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    window.addEventListener('scroll',() => {
      if(window.pageYOffset > 0) {
        this.$el.classList.add('fixed')
      } else {
        this.$el.classList.remove('fixed')
      }
    })
  },

  computed: {
    getUserPass() {
      if(this.$user.user) {
        return Object.keys(this.$user.user.pass) || []
      }
    },

    algolia () {
      return this.$themeLocale.algolia || this.$theme.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  methods:{
    handleLogOut() {
      firebase.auth().signOut().then(() => {
        this.$user.user = null
      }).catch(function(error) {
        // An error happened.
      });
    },
    handleLogin() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.handleUserDB(user)
        // ...
      })
    },
    handleUserDB(user) {
      const userId = firebase.auth().currentUser.uid
      firebase.database().ref(`users/${userId}`).once("value", snapshot => {
        if (!snapshot.exists()){
          const db = firebase.database()
          const userId = firebase.auth().currentUser.uid
          db.ref('users/' + userId).set({
            displayName: user.displayName,
            email: user.email,
            photoURL : user.photoURL,
            uid: user.uid
          }).then(() => {
            firebase.database().ref(`users/${userId}`).once("value", snapshot => {
              this.$user.user = snapshot.val()
            })
          })
        } else {
          this.$user.user = snapshot.val()
        }
      })
    },
    handleShowSuggestions(active) {
      this.showSuggestions = active
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
getVar(var)
    unquote("var(--vs-"+var+")")

.user-info
  position relative
  margin-left 10px
  .user-dropdown
    display flex
    align-items center
    justify-content center
    padding-right 10px
    &:hover
      .dropdown
        opacity 1
        visibility visible
    .dropdown
      width 160px
      visibility hidden
      opacity 0
      position absolute
      right 10px
      bottom 0px
      transform translate(0,100%)
      box-shadow 0px 10px 20px -10px rgba(0,0,0,.15)
      transition all .25s ease
      .dropdown-content
        width 160px
        border-radius 15px 5px 15px 15px
        padding 10px
        background getVar(theme-layout)
        margin-top 15px
        position relative
      .name-user
        border-bottom 1px solid getVar(theme-bg2)
        margin-bottom 10px
        width 100%
        padding 5px 10px
        padding-top 0px
        font-size .8rem
        text-align center
      .logout
        background: getVar(theme-color)
        color: getVar(theme-layout)
        border 0px
        padding 8px 25px
        border-radius 10px
        transition all .25s ease
        box-shadow 0px 0px 0px 0px getVar(theme-color)
        width 100%
        &:hover
          box-shadow 0px 5px 15px -5px getVar(theme-color)
          transform translate(0,-4px)
    .user
      img
        width 40px
        border-radius 30%
  .btn-login
    background: getVar(theme-color)
    color: getVar(theme-layout)
    border 0px
    padding 10px 15px
    border-radius 10px 10px 20px 10px
    margin-right 10px
    padding-right 17px
    transition all .25s ease
    box-shadow 0px 0px 0px 0px getVar(theme-color)
    &:hover
      box-shadow 0px 5px 15px -5px getVar(theme-color)
      transform translate(0,-4px)

.logo-nav
  fill getVar(theme-color)
  height 38px
.home-link
  position absolute
  left 0px
  overflow hidden
  font-weight bold
  padding-left 30px
.v-old
  padding 10px
  color inherit
  opacity .5
  transition all .25s ease
  &:hover
    opacity 1

.external-links-search
  display flex
  align-items center
  justify-content center
  position absolute
  right 0px
  &.remove-links
    // width calc(100% - 60px)
    .con-links, .v-old
      display none
  .con-links
    display flex
    align-items center
    justify-content center
    margin-right 10px
    a
      list-style none
      display flex
      align-items center
      justify-content center
      padding 4px
      box-sizing border-box
      box-icon
        width 20px !important
        height 20px !important

.navbar
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  padding 0px 20px
  // line-height $navbarHeight - 1.4rem
  display flex
  align-items center
  justify-content center
  border-radius 0px 0px 30px 0px
  transition all .25s ease
  &.transparent
    background transparent
  &.fixed
    border-radius 0px
    background getVar(theme-layout)
    .btn-login
      border-radius 10px
    // backdrop-filter blur(20px)
    // background rgba(255,255,255,0.6) !important
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color getVar(theme-color)
    position relative
  .links
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    // right $navbar-horizontal-padding
    position relative
    display flex
    align-items center
    justify-content center
    // left 50%
    // transform translate(-50%)
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: 1500px)
  .navbar
    justify-content flex-start
  .home-link
    position relative
    padding-left 0px
    padding-right 20px

@media (max-width: 1000px)
  .navbar
    padding 9px
    padding-top 8px
    padding-left 2.5rem
    display flex
    justify-content space-between
    .home-link
      position relative
      padding-left 0px
      margin-left 25px
    .external-links-search
      position relative
      padding-left 0px
      right 0px
    .can-hide
      display none
    .links
      padding-left 1.5rem
      display none

@media (max-width: 500px)
  .home-link
    width 24px !important
    overflow hidden
    padding 0px
    margin-top 3px
    .logo-nav
      height 24px
  .user-info
    .btn-login
      margin-right 0px

@media (max-width: 390px)
  .external-links-search
    .con-links
      display none

</style>
<style type="text/css">
.st0{fill:url(#SVGID_1_);}
.st1{fill:url(#SVGID_2_);}
.st2{fill:url(#SVGID_3_);}
.st3{fill:url(#SVGID_4_);}
.st4{fill:url(#SVGID_5_);}
.st5{fill:url(#SVGID_6_);}
.st6{fill:url(#SVGID_7_);}
.st7{fill:url(#SVGID_8_);}
.st8{fill:url(#SVGID_9_);}
.st9{fill:#195EFF;}
.st10{fill:url(#SVGID_10_);}
.st11{fill:url(#SVGID_11_);}
</style>
