import {  h, VNode,Transition } from 'vue'
import {Options, prop, Vue} from 'vue-class-component'

import { setColor, setVar } from '../../../util'
import {Prop} from "vue-property-decorator";
import {mixinsWithPlugin} from "../../../util/vue/generator";

@Options({
  watch: {
    isVisible() {
      this.$nextTick(() => {
        setColor('color', this.color, this.$el)
        setColor('background', this.background, this.$el)
        if (this.opacity) {
          setVar('opacity', this.opacity, this.$el)
        }
      })
    }
  }
})
export default class VsLoading extends mixinsWithPlugin() {
  @Prop({type:[String, null], default: null })
  text: string | null;

  @Prop({type:String, default: 'default' })
  type: string

  @Prop({type:[String, null], default: null })
  color: string | null

  @Prop({type:[String, null], default: null })
  background: string | null

  @Prop({type:[String, null], default: null })
  opacity: string | null

  @Prop({type:[String, null], default: null })
  percent: string | null

  @Prop({type:[Number, null], default: null })
  progress: number | null

  @Prop({type:[String, null], default: null })
  scale: string | null

  @Prop({ default: null })
  target: any

  realPercent: string = null;

  realProgress: number = null;

  isVisible: boolean = false

  show(){
    this.isVisible = true
  }

  close() {
    this.isVisible = false
    document.body.style.overflowY = 'auto'
    setTimeout(() => {
      // this.$destroy() todo
      this.$el.parentNode.removeChild(this.$el)
    }, 250)
  }

  changePercent (val: string) {
    if (val) {
      this.realPercent = val
      // this.$forceUpdate()
    }
  }

  changeProgress (val: number) {
    if (val) {
      this.realProgress = val
      this.$forceUpdate()
    }
  }

  changeText (val: string) {
    if (val) {
      this.text = val
    }
  }

  public render(): VNode {
    const animation = h('div', {
      class: ['vs-loading__load__animation'],
    }, [
      h('div', {
        class: 'vs-loading__load__percent'
      }, [
        this.realPercent = this.realPercent || this.percent
      ]),
      h('div', {
        class: 'vs-loading__load__animation__1'
      }),
      h('div', {
        class: 'vs-loading__load__animation__2'
      }),
      h('div', {
        class: 'vs-loading__load__animation__3'
      })
    ])

    const text = h('div', {
      class: ['vs-loading__load__text'],
    }, this.text)

    const loading = h('div', {
      class: ['vs-loading__load'],
      style: {
        transform: `scale(${this.scale})`
      },
    }, [
      animation,
      text
    ])

    const progress = h('div', {
      class: ['vs-loading__progress'],
    }, [
      h('div', {
        class: 'vs-loading__progress__bar',
        style: {
          width: `${this.realProgress = this.realProgress || this.progress}%`
        }
      })
    ])

    return h(Transition, {
      // props: {
        name: 'loading',

      // }
    }, {
        default:() => [
        (this.isVisible) && h('div', {
          class: [
            'vs-loading',
            `vs-loading--${this.type || 'default'}`,
            {'vs-loading--target': !!this.target},
            {'vs-loading--background': !!this.background}
          ],
        }, [
          loading,
          this.realProgress && progress
        ])
          ]
      }
    )
  }
}
