<template>
  <ul
    class="sidebar-links"
    v-if="items.length"
  >
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="{'active': item.path === $route.path}"
    >
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="fixed || i === openGroupIndex || $vsTheme.sidebarCollapseOpen"
        :collapsable="true"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
        <!-- :collapsable="item.collapsable || item.collapsible" -->
      <SidebarLink
        v-else
        :sidebarDepth="sidebarDepth"
        :item="item"
      />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import { isActive } from '../util'
import {reactive} from 'vue';
export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },

  props: [
    'items',
    'depth',  // depth of current sidebar links
    'sidebarDepth', // depth of headers to be extracted
    'fixed'
  ],

  data () {
    return {
      openGroupIndex: 0,
      allOpen: false
    }
  },

  created () {
    this.refreshIndex()
    reactive(this.$theme)
    reactive(this.$vsTheme)
  },

  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>
