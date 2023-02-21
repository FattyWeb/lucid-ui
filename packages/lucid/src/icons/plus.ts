import {h, VNode} from 'vue'
import {Vue} from 'vue-class-component'
import {splitAttrsInVue2} from '../util';
import './icons.scss'
import {Prop} from "vue-property-decorator";

export default class VsIconClose extends Vue {

  @Prop({ type: Boolean, default: false })
  public less!: boolean

  render(): VNode {
    const icon = h('i', {
      class: ['vs-icon-plus', {
        less: this.less
      }],
      ref: 'icon',
      ...splitAttrsInVue2(this.$attrs).listeners
    })

    return icon
  }
}
