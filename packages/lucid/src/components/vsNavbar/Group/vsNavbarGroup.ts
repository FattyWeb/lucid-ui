import { h, VNode } from 'vue'
import VsComponent from '../../../mixins/component'
import {Options} from "vue-class-component";

@Options({name: 'vs-navbar-group'})
export default class VsNavbarGroup extends VsComponent {
  setModel(id: any) {
    const parent: any = this.$parent
    parent.setModel(id)
  }
  setLeftLine() {
    const parent: any = this.$parent
    const left = (this.$el as any).offsetLeft
    parent.setLeftLine(left)
    const width = (this.$refs.item as any).scrollWidth
    parent.setWidthLine(width)
  }

  public render(): VNode {
    const item = h('button', {
      class: 'vs-navbar__group__item',
      ref: 'item'
    }, [
      this.$slots.default && this.$slots.default()
    ])
    const items = h('div', {
      class: 'vs-navbar__group__items'
    }, [
      this.$slots.items && this.$slots.items()
    ])

    return h('div', {
      class: 'vs-navbar__group',
    }, [
      item,
      items
    ])
  }
}
