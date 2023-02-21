import {h, VNode} from 'vue'
import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Options({name: 'vs-row'})
export default class VsRow extends Vue {
  static install: (vue: any) => any

  static use: (vue: any) => any

  @Prop({type: Number, default: 12})
  w!: number

  @Prop({type: String, default: 'flex-start'})
  justify!: string

  @Prop({type: String, default: 'flex-start'})
  align!: string

  @Prop({type: String, default: 'row'})
  direction!: string

  public render(): VNode {
    const vsRow = h('div', {
      class: 'vs-row',
      style: {
        justifyContent: this.justify,
        alignItems: this.align,
        flexDirection: this.direction
      },
    }, this.$slots.default && this.$slots.default())
    return vsRow
  }
}
