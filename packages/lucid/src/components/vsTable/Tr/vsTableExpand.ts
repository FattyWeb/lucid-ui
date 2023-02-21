import { h, VNode, Transition } from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";
import {Prop, Watch} from "vue-property-decorator";

@Options({
  name: 'vs-table-expand'
})
export default class VsTableTr extends mixinsWithPlugin() {

  @Prop({})
  colspan: number

  @Prop({})
  slot: Function

  hidden: boolean = true

  @Watch('hidden')
  handleChangeHidden(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.$el.parentNode.removeChild(this.$el)
        // this.$destroy()
      }, 300)
    } else {
      this.$nextTick(() => {
        const content: any = this.$refs.content
        content.style.height = `${content.scrollHeight}px`
      })
    }
  }

  public render(): VNode {
    const subContent = h('div', {
      class: 'vs-table__expand__td__content__sub',
    }, [
      this.slot()
    ])

    const content = h('div', {
      class: 'vs-table__expand__td__content',
      ref: 'content'
    }, [
      subContent
    ])

    const td = h('td', {
      class: 'vs-table__expand__td',
      // attrs: {
        colspan: this.colspan
      // }
    }, [
      content
    ])

    const expand = h('tr', {
      class: 'vs-table__tr__expand'
    }, [
      td
    ])

    return h(Transition, {
      // props: {
        name: 'fade-expand'
      // }
    }, [!this.hidden && expand])
  }
}
