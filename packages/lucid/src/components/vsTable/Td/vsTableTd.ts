import {h, VNode} from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({name: 'vs-table-td'})
export default class VsTableTd extends mixinsWithPlugin() {

  @Prop({ type: Boolean })
  checkbox: boolean

  @Prop({ type: Boolean })
  edit: boolean

  public render(): VNode {
    return h('td', {
      onClick: (evt: any) => {
        this.$emit('click', evt)
      },
      class: ['vs-table__td', {
        isCheckbox: this.checkbox,
        isEdit: this.edit
      }]
    }, this.$slots.default && this.$slots.default())
  }
}
