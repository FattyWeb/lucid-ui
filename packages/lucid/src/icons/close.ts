import {h, VNode} from 'vue'
import {Vue} from 'vue-class-component'
import './icons.scss'
import {Prop} from "vue-property-decorator";

export default class VsIconClose extends Vue {

  @Prop({ type: String, default: null })
  public hover!: string | null

  render(): VNode {
    return h('i', {
      class: ['vs-icon-close',
        `vs-icon-hover-${this.hover}`
      ],
      ref: 'icon'
    })
  }
}
