import { h, VNode } from 'vue'
import {Options} from "vue-class-component";
import {mixinsWithPlugin} from "../../../util/vue/generator";

@Options({
  name: 'vs-option-group',
})
export default class VsOptionGroup extends mixinsWithPlugin() {

  textFilter: string = null

  hiddenOptionGroup: boolean = false

  /**
   * 获取vsSelect父级
   *
   * @param returnVm 是否返回父级vm实例
   */
  getSelectParent(returnVm: boolean = true) {
    // vsSelect被Transition组件包裹 所以要再向上探一层
    return (this.$parent as any).isSelect && (returnVm ? this.$parent as any: '$parent.textFilter')
      ||
      (this.$parent.$parent as any).isSelect && (returnVm ? this.$parent.$parent as any: '$parent.$parent.textFilter');
  }

  created() {
    const watcherName = this.getSelectParent(false);
    this.$watch(watcherName, this.handler);
  }

  handler(val: string){
    if (val) {
      if (this.labels.toLowerCase().indexOf(val.toLowerCase()) === -1) {
        this.hiddenOptionGroup = true
      } else {
        this.hiddenOptionGroup = false
      }
    } else {
      this.hiddenOptionGroup = false
    }
    this.textFilter = val
  }

  clickOption(value: any, label: any) {
    // vsSelect被Transition内置组件包裹 所以要再向上探一层
    this.getSelectParent().clickOption(value, label)
  }

  get labels() {
    let labels: string = ''
    this.$slots.default().forEach((item) => {
      if (item) {
        labels += (item.props as any).label
      }
    })
    return labels
  }

  isHiddenOptionGroup(){
    return this.hiddenOptionGroup;
  }

  isOptionGroup(){
    return true;
  }

  isHidden(){
    return false
  }

  public render(): VNode {
    return h('div', {
      class: [
        'vs-select__option-group',
        {
          hiddenOptionGroup: this.hiddenOptionGroup
        }
      ]
    },
      [
        h('h5', {}, this.$slots.title && this.$slots.title()),
        this.$slots.default && this.$slots.default()
      ]
    )
  }
}
