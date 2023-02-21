import {createApp, h, VNode} from 'vue'
import expand from './vsTableExpand'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";
import {Prop, Watch} from "vue-property-decorator";

@Options({
  name: 'vs-table-tr'
})
export default class VsTableTr extends mixinsWithPlugin() {

  @Prop({})
  data: any

  @Prop({type: Boolean, default: false})
  isSelected: boolean

  @Prop({type: Boolean, default: false})
  notClickSelected: boolean

  @Prop({type: Boolean, default: false})
  openExpandOnlyTd: boolean

  expand: boolean = false
  instanceExpand: any = null

  @Watch('data')
  handleChangeData() {
    (this.$el as HTMLElement).style.removeProperty(`--vs-color`)
    if (this.instanceExpand) {
      this.instanceExpand.$data.hidden = true
      this.instanceExpand = null
      // this.expand = false
    }
  }

  insertAfter(element: any) {
    if (this.$el.nextSibling) {
      this.$el.parentNode.insertBefore(element, this.$el.nextSibling)
    } else {
      this.$el.parentNode.appendChild(element)
    }
  }

  handleClickHasExpand() {
    if (this.instanceExpand) {
      this.instanceExpand.hidden = !this.instanceExpand.$data.hidden
      this.instanceExpand = null
    } else {
      const colspan = this.$parent.$el.querySelectorAll('thead th').length
      this.instanceExpand = createApp(expand, {colspan, slot: this.$slots.expand}).mount(document.createElement('div'));
      this.instanceExpand.hidden = false
      this.insertAfter(this.instanceExpand.$el)
    }
  }

  public render(): VNode {
    return h('tr', {
      onClick: (evt: any) => {
        if (this.$slots.expand) {
          if (
            (this.openExpandOnlyTd ? evt.target.nodeName == 'TD' : true) &&
            !evt.target.className.includes('isEdit')) {
            this.handleClickHasExpand()
          }
        }
        if (evt.target.nodeName == 'TD' && !this.notClickSelected) {
          (this.$parent as any).selected(this.data)
          this.$emit('selected', this.data)
        }

        this.$emit('click', evt)
      },
      class: ['vs-table__tr', {
        selected: this.isSelected,
        isExpand: !!this.instanceExpand,
        expand: this.$slots.expand
      },
        {[`vs-component--primary`]: !this.danger && !this.success && !this.warn && !this.dark && !this.color},
        {[`vs-component--danger`]: !!this.danger},
        {[`vs-component--warn`]: !!this.warn},
        {[`vs-component--success`]: !!this.success},
        {[`vs-component--dark`]: !!this.dark},
      ]
    }, this.$slots.default && this.$slots.default())
  }
}
