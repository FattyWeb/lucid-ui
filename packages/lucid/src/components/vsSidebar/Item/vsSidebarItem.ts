import { h, VNode } from 'vue'
import VsIconsArrow from '../../../icons/arrow'
import {Options} from "vue-class-component";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop} from "vue-property-decorator";

@Options({name: 'vs-sidebar-item'})
export default class VsSidebarItem extends mixinsWithPlugin() {
  @Prop({})
  to: string

  @Prop({})
  href: string

  @Prop({ default: '_blank' })
  target: string

  @Prop({ type: String })
  value: string

  @Prop({ type: String })
  id: string

  @Prop({ type: Boolean })
  arrow: boolean

  handleClick() {
    if (this.to) {
      (this as any).$router.push(this.to)
    } else if (this.href) {
      window.open(this.href, this.target)
    }
  }

  getRealParent(){
    return (this.$parent as any).handleClickItem ? (this.$parent as any) : (this.$parent as any).$parent
  }

  public render(): VNode {
    const icon = h('div', {
      class: 'vs-sidebar__item__icon'
    }, [
      this.$slots.icon && this.$slots.icon()
    ])

    const textTooltip = h('div', {
      class: 'vs-sidebar__item__text-tooltip'
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const text = h('div', {
      class: 'vs-sidebar__item__text'
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const iconArrow = h(VsIconsArrow)

    const arrow = h('div', {
      class: 'vs-sidebar__item__arrow'
    }, [
      this.$slots.arrow ? this.$slots.arrow() : iconArrow
    ])
    return h('button', {
      class: ['vs-sidebar__item',{
        active: (this.getRealParent() as any).getValue && this.id == (this.getRealParent() as any).getValue,
        hasIcon: !!this.$slots.icon
      }],
        onClick: () => {
          if (this.id) {
            (this.getRealParent() as any).handleClickItem(this.id)
          }
          this.handleClick()
        }
    }, [
      this.$slots.icon && icon,
      text,
      textTooltip,
      (this.$slots.arrow && this.$slots.arrow()) || (this.arrow ? arrow: '')
    ])
  }
}
