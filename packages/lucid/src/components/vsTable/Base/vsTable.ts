import * as LodashUtils from 'lodash'
import { h, VNode } from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Model, Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({name: 'vs-table'})
export default class VsTable extends mixinsWithPlugin() {

  @Model('modelValue',{})
  tableValue: any

  @Prop({ default: false, type: Boolean })
  striped: any

  @Prop({ default: false, type: Boolean })
  loading: boolean

  colspan: number = 0

  mounted() {
    const tds = (this.$refs.thead as any).querySelectorAll('th')
    this.colspan = tds.length
  }

  get isMultipleSelected() {
    return LodashUtils.isArray(this.tableValue)
  }

  selected(val: any) {
    if (this.isMultipleSelected) {
      this.selectedMultiple(val)
    } else {
      this.$emit('input', this.tableValue = val)
      // this.$forceUpdate()
    }
  }

  selectedMultiple(val: any) {
    const newVal = this.tableValue
    if (this.tableValue.includes(val)) {
      newVal.splice(this.tableValue.indexOf(val), 1)
    } else {
      newVal.push(val)
    }

    this.$emit('input', newVal)
  }

  public render(): VNode {
    const footer = h('footer', {
      class: 'vs-table__footer'
    }, [
      this.$slots.footer && this.$slots.footer()
    ])

    const header = h('header', {
      class: 'vs-table__header'
    }, [
      this.$slots.header && this.$slots.header()
    ])

    const thead = h('thead', {
      ref: 'thead',
      class: 'vs-table__thead'
    }, [
      this.$slots.thead && this.$slots.thead()
    ])

    const notFound = h('tbody', {
      class: 'vs-table_not-found'
    }, [
      h('tr', [
        h('td', {
          // attrs: {
            colspan: this.colspan
          // }
        }, [
          this.$slots.notFound ? this.$slots.notFound() : 'No matching records found'
        ])
      ])
    ])

    const tbody = h('tbody', {
      class: 'vs-table__tbody'
    }, [
      this.$slots.tbody && this.$slots.tbody(),
    ])

    const table = h('div', {
      class: ['vs-table',{
        isSelectedValue: this.tableValue !== undefined,
        striped: this.striped,
        isMultipleSelected: this.isMultipleSelected
      }]
    }, [
      h('table', {}, [
        thead,
        tbody,
        notFound
      ])
    ])

    return h('div', {
      class: 'vs-table-content',
    }, [
      this.$slots.header && header,
      table,
      this.$slots.footer && footer
    ])
  }
}
