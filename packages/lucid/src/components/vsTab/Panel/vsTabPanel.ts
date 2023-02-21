import {Options} from "vue-class-component";
import {h as createVNode} from "vue";
import {Prop} from "vue-property-decorator";
import {mixinsWithPlugin} from "../../../util/vue/generator";

@Options({ name: 'vs-tab-panel'})
export default class VsTabPanel extends mixinsWithPlugin() {
  @Prop({type:String, required: true})
  name;

  render(){
    return createVNode('div',
      {},
      this.$slots.default && this.$slots.default()
    );
  }
}
