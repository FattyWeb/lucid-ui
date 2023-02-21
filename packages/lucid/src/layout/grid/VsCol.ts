import {Options, Vue} from 'vue-class-component'
import {VNode, h} from 'vue'
import {Prop} from "vue-property-decorator";

@Options({name: 'vs-col'})
export default class VsCol extends Vue {
  static install: (vue: any) => any

  static use: (vue: any) => any

  @Prop({type: [String, Number], default: '12'})
  w!: string | number

  @Prop({type: [String, Number], default: '0'})
  offset!: string | number

  @Prop({type: [String, Number], default: '0'})
  order!: string | number

  @Prop({type: [String, Number], default: '0'})
  lg!: string | number

  @Prop({type: [String, Number], default: '0'})
  sm!: string | number

  @Prop({type: [String, Number], default: '0'})
  xs!: string | number

  @Prop({type: String, default: 'block'})
  type!: string

  @Prop({type: String, default: 'flex-start'})
  justify!: string

  public render(): VNode {
    const vsCol = h('div', {
      style: {
        order: this.order,
        display: this.type,
        justifyContent: this.justify,
      },
      class: [
        'vs-col',
        `vs-col--w-${this.w}`,
        `vs-col--offset-${this.offset}`,
        `vs-col--lg-${this.lg}`,
        `vs-col--sm-${this.sm}`,
        `vs-col--xs-${this.xs}`,
      ]
    }, this.$slots.default && this.$slots.default())

    return vsCol
  }
}
