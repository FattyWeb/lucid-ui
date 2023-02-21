import { h, VNode } from 'vue'
import './icons.scss'
import {prop, Vue} from "vue-class-component";
import {splitAttrsInVue2} from "../util";

class Props{
  less = prop<Boolean>({ default: false });
}
export default class VsIconClose extends Vue.with(Props) {
  render(): VNode {
    const icon = h('i', {
      class: ['vs-icon-arrow',{
        less: this.less
      }],
      ref: 'icon',
      ...splitAttrsInVue2(this.$attrs).listeners
    })

    return icon
  }
}
