<template>
  <router-link
    class="nav-link"
    :to="link"
    v-if="!isExternal(link)"
    :class="{'router-link-active': (exact || $route.path.indexOf('/guide/') !== -1 && item.text === '文档' || item.text === '按钮 Button') ?  $route.path === link : $route.path.indexOf(link) !== -1 }"
  >
    {{ item.text }}
    <i class="bx bx-chevron-down"></i>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <!-- <OutboundLink/> -->
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'

export default {
  props: {
    item: {
      required: true
    },
    arrow: false
  },

  computed: {
    link () {
      const ensureExt1 = ensureExt(this.item.link);
      return ensureExt1
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
<style lang="stylus">
.nav-item
  i.bx:not(.bx-dots-horizontal-rounded)
    display none
  i.bx.not-remove
    display block !important
  > div > .nav-link
    display flex !important
    align-items center
    justify-content center
    i.bx
      display block
      font-size 1rem
      transition all .2s ease
      transform-origin center
      width 16px
      height 16px
      position relative
</style>
