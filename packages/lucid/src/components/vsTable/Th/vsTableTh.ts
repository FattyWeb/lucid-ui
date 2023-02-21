import {h, VNode} from 'vue'
import VsIconsArrow from '../../../icons/arrow'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {splitAttrsInVue2} from "../../../util";
import {Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({name: 'vs-table-th'})
export default class VsTableTh extends mixinsWithPlugin() {

  @Prop({ default: false, type: Boolean })
  sort: boolean

  mounted() {
    (this.$el as HTMLElement).style.width = `${this.$el.scrollWidth}px`
  }

  public render(): VNode {
    const icon2 = h(VsIconsArrow, {
      class: 'icon-sort-2'
    })
    const icon = h(VsIconsArrow, {
      class: 'icon-sort-1'
    })

    const icons = h('div', {
      class: 'vs-table__th__content__icons'
    }, [
      icon,
      icon2
    ])

    const content = h('div', {
      class: 'vs-table__th__content',
    }, [
      this.$slots.default && this.$slots.default(),
      this.sort && icons
    ])

    return h('th', {
      class: ['vs-table__th', {
        sort: this.sort
      }],
      ...splitAttrsInVue2(this.$attrs).listeners
    }, [
      content
    ])
  }
}
