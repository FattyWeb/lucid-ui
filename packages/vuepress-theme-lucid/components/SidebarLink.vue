<script>
import { isActive, hashRE, groupHeaders } from '../util'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
export default {
  functional: true,

  props: ['item', 'sidebarDepth'],

  render () {
    const NEWS = this.$page.frontmatter.NEWS || []
    const UPDATE = this.$page.frontmatter.UPDATE || []
    // console.log(NEWS)
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive(this.$route, this.item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = this.item.type === 'auto'
      ? selfActive || this.item.children.some(c => isActive(this.$route, this.item.basePath + '#' + c.slug))
      : selfActive
    const link = renderLink(h, this.item.path, this.item.title || this.item.path, active)

    const configDepth = this.$page.frontmatter.sidebarDepth
      || this.sidebarDepth
      || this.$themeLocale.sidebarDepth
      || this.$theme.sidebarDepth

    const maxDepth = configDepth == null ? 1 : configDepth

    const displayAllHeaders = this.$themeLocale.displayAllHeaders
      || this.$theme.displayAllHeaders

    if (this.item.type === 'auto') {
      return [link, renderChildren(h, this.item.children, this.item.basePath, this.$route, maxDepth,1, NEWS, UPDATE)]
    } else if ((active || displayAllHeaders) && this.item.headers && !hashRE.test(this.item.path)) {
      const children = groupHeaders(this.item.headers)
      return [link, renderChildren(h, children, this.item.path, this.$route, maxDepth,1, NEWS, UPDATE)]
    } else {
      return link
    }
  }
}

function renderLink (h, to, text, active, NEW = false, UPDATE = false) {
  var title = ''
  if(NEW) title = 'New'
  if(UPDATE) title = 'Update'
  return h(RouterLink, {
    to,
    activeClass: '',
    exactActiveClass: '',
    title,
    // attrs: {
    //   title
    // },
    // props: {
    //   to,
    //   activeClass: '',
    //   exactActiveClass: ''
    // },
    class: {
      active,
      'sidebar-link': true,
      'sidebar-new': NEW,
      'sidebar-update': UPDATE
    }
  }, {default : () => text})
}

function renderChildren (h, children, path, route, maxDepth, depth = 1, NEWS, UPDATE) {
  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', { class: 'sidebar-sub-header' }, [
      renderLink(h, path + '#' + c.slug, c.title, active, NEWS.includes(c.slug), UPDATE.includes(c.slug)),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1, NEWS, UPDATE)
    ])
  }))
}
</script>

<style lang="stylus">
getVar(var)
    unquote("var(--vs-"+var+")")
getColor(var, alpha = 1)
    unquote("rgba(var(--vs-"+var+"), "+alpha+")")

.sidebar-new
  position relative
  color #42b983 !important
  opacity 1 !important
  &:after
    background #42b983 !important
.sidebar-update
  position relative
  color rgb(255, 186, 0) !important
  opacity 1 !important
  &:after
    background rgb(255, 186, 0) !important

.sidebar .sidebar-sub-headers
  padding-left 1rem
  font-size 0.95em

a.sidebar-link
  font-size .95rem
  font-weight 400
  display inline-block
  // color $textColor
  color getVar(theme-color)
  padding 0.3rem 1rem 0.3rem 1.25rem
  width: 100%
  box-sizing: border-box
  transition all .25s ease
  opacity .5
  font-weight normal
  position relative
  margin-left 0px
  &:after
    content: ''
    position absolute
    top 50%
    transform translate(0,-50%)
    left 0px
    width 5px
    background getVar(theme-color)
    height 0px
    transition all .25s ease
    border-radius 0px 5px 5px 0px
  &.active, &:hover
    opacity 1
  &.active
    &:after
      height 30px
  .sidebar-group &
    padding-left 2rem
  .sidebar-sub-headers &
    padding-top 0.25rem
    padding-bottom 0.25rem
    border-left none
    &.active
      font-weight 500

      @keyframes sa {
        100%{
          height 30px
        }
      }
</style>
