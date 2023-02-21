import {h, VNode, Transition} from 'vue'
import {Options} from "vue-class-component";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop, Watch} from "vue-property-decorator";

@Options({
  name: 'vs-sidebar-group'
})
export default class VsSidebarGroup extends mixinsWithPlugin() {

  @Prop({type: Boolean}) open: boolean

  group: boolean = true

  openState: boolean = false

  @Watch('open')
  handleOpen(val: boolean) {
    this.$nextTick(() => {
      const h = (this.$refs.content as any).scrollHeight
      const parent: any = this.$parent
      if (parent.group) {
        if (val) {
          parent.$refs.content.style.height = `${parent.$refs.content.scrollHeight + h - 1}px`
        } else {
          parent.$refs.content.style.height = `${parent.$refs.content.scrollHeight - h + 1}px`
        }
      }
    })
  }

  getRealParent(){
    return (this.$parent as any).handleClickItem ? (this.$parent as any) : (this.$parent as any).$parent
  }

  handleClickItem(id: string) {
    (this.getRealParent() as any).handleClickItem(id)
  }

  get getValue() {
    return (this.$parent as any).getValue
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any, done: any) {
    const h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  mounted() {
    if (this.$el.querySelector('.active') || this.open) {
      this.openState = true
    }
  }

  public render(): VNode {
    const header = h('div', {
      class: 'vs-sidebar__group__header',
      onClick: () => {
        this.openState = !this.openState
      }
    }, [
      this.$slots.header && this.$slots.header()
    ])

    const content = h('div', {
      class: 'vs-sidebar__group__content',
      ref: 'content',
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const transition = h(Transition, {
      onBeforeEnter: this.beforeEnter,
      onEnter: this.enter,
      onLeave: this.leave
    }, {default: () => [this.openState && content]})

    return h('div', {
      class: ['vs-sidebar__group',{
        open: this.openState
      }]
    }, [
      header,
      transition
    ])
  }
}
