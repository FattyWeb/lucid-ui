import {h, VNode} from 'vue'
import {Options} from "vue-class-component";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop, Watch} from "vue-property-decorator";

@Options({
  name:'vs-navbar-item'
})
export default class VsNavbarItem extends mixinsWithPlugin() {

  @Prop({default: false, type: Boolean})
  active: boolean

  @Prop({})
  to: string

  @Prop({})
  id: string

  @Prop({})
  href: string

  @Prop({default: '_blank'})
  target: string

  @Watch('active')
  handleWatchActive() {
    this.handleLine()
  }

  handleLine() {
    this.$nextTick(() => {
      if (this.active) {
        const parent: any = this.$parent
        const left = (this.$el as any).offsetLeft
        parent.setLeftLine(left)
        const width = (this.$el as any).scrollWidth
        parent.setWidthLine && parent.setWidthLine(width)
      }
    })
  }

  handleClick() {
    if (this.to) {
      (this as any).$router.push(this.to)
    } else if (this.href) {
      window.open(this.href, this.target)
    }
  }

  handleActive() {
    const parent: any = this.$parent
    parent.setModel(this.id)
    this.handleLine()
  }

  mounted() {
    setTimeout(() => {
      if (this.active) {
        const el: any = this.$el
        const parent: any = this.$parent
        const left = el.offsetLeft
        parent.setLeftLine(left)
        const width = el.scrollWidth
        parent.setWidthLine && parent.setWidthLine(width)
      }
    }, 150)
  }

  public render(): VNode {
    return h('button', {
      class: ['vs-navbar__item', {
        active: this.active
      }],
      onClick: (evt: any) => {
        this.$emit('click', evt)
        this.handleLine()
        this.handleClick()
        this.handleActive()
      }
    }, this.$slots.default && this.$slots.default())
  }
}
