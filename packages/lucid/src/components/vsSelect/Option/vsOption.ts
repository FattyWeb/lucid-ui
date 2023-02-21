import {h, VNode} from 'vue'
import '../../vsCheckbox/Base/style.scss'
import vsCheckbox from '../../vsCheckbox/Base/vsCheckbox'
import {Options} from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {splitAttrsInVue2} from "../../../util";
import {mixinsWithPlugin} from "../../../util/vue/generator";

@Options({
  name: 'vs-option'
})
export default class VsOption extends mixinsWithPlugin() {

  @Prop({})
  value!: any

  @Prop({type: Boolean, default: false})
  disabled: boolean

  @Prop({})
  label!: any

  activeOption: boolean = false

  hiddenOption: boolean = false

  _: { uid: number }

  myIndex: 0

  isHidden() {
    return this.hiddenOption;
  }

  get isActive() {
    return typeof this.getSelectParent().selectValue == 'number' ?
      this.getSelectParent().selectValue == this.value : this.getSelectParent().selectValue.indexOf(this.value) !== -1
  }

  get isHover() {
    return this.getSelectParent().uids.indexOf(this._.uid) == this.getSelectParent().hoverOption
  }

  get isMultiple() {
    return this.getSelectParent().multiple
  }

  /**
   * 获取vsSelect父级
   *
   * @param returnVm 是否返回父级vm实例
   */
  getSelectParent(returnVm: boolean = true) {
    // vsSelect被Transition组件包裹 所以要再向上探一层
    return (this.$parent as any).isSelect && (returnVm ? this.$parent as any: '$parent.textFilter') || (this.$parent.$parent as any).isSelect && (returnVm ? this.$parent.$parent as any: '$parent.$parent.textFilter')
      || (this.$parent.$parent.$parent as any).isSelect && (returnVm ? this.$parent.$parent.$parent as any : '$parent.$parent.$parent.textFilter');
  }

  handler(val: string) {
    if (val) {
      this.hiddenOption = this.label.toLowerCase().indexOf(val.toLowerCase()) === -1;
    } else {
      this.hiddenOption = false
    }
  }

  created() {
    const watcherName = this.getSelectParent(false);
    this.$watch(watcherName, this.handler);
  }

  mounted() {
    if (!this.getSelectParent().renderSelect) {
      this.getSelectParent().childOptions.push(this)
    }
    this.getSelectParent().uids.push(this._.uid)

    this.activeOption = this.isActive
    this.getSelectParent().setHover()
  }

  public render(): VNode {
    const checkbox = h(vsCheckbox, {
      checkedForce: this.isActive,
    }, {default: () => [this.$slots.default && this.$slots.default()]})

    return h('button', {
      disabled: this.disabled,
      class: [
        'vs-select__option',
        {
          activeOption: this.isActive,
          isHover: this.isHover,
          isMultiple: this.isMultiple,
          hiddenOption: this.hiddenOption
        }],
      ...splitAttrsInVue2(this.$attrs).listeners,
      onMousedown: () => {
        // 组件的第一层parent是Transition
        parent = ((this.$parent as any).isOptionGroup && (this.$parent as any).isOptionGroup()) ? this.$parent : (this.$parent as any).$parent;
        (parent as any).clickOption(this.value, this.label);
      },
      onBlur: () => {
        if (!(this.getSelectParent() as any).targetSelect && !(this.getSelectParent() as any).targetClose) {
          (this.getSelectParent() as any).activeOptions = false
        }
      }
    }, [
      this.isMultiple && checkbox,
      !this.isMultiple && this.$slots.default(),
    ])
  }
}
