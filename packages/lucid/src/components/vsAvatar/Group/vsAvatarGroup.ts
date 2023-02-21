import { h, VNode } from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-avatar-group'
})
export default class VsAvatarGroup extends mixinsWithPlugin() {

  @Prop({ default: null })
  max: number;

  @Prop({ default: false, type: Boolean })
  float: boolean;

  avatars: any[] = [];

  vsAvatarGroup: boolean = true;

  public render(): VNode {
    return h('div', {
      class: ['vs-avatar__group',{
        float: this.float
      }]
    }, [
      this.$slots.default &&  this.$slots.default()
    ])
  }
}
