import { h, VNode } from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-button-group'
})
export default class VsButtonGroup extends mixinsWithPlugin() {
  public Class: string = ''

  public prototype: any

  public render(): VNode {

    const btnGroup = h('div', {
      class: 'vs-button-group'
    }, this.$slots.default() )

    return btnGroup
  }
}
