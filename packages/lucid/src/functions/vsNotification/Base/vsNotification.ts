import {h, VNode, Transition} from 'vue'
import {Options} from 'vue-class-component'
import VsIconsClose from '../../../icons/close'
import {setColor} from '../../../util'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop} from "vue-property-decorator";

@Options({
  watch: {
    isVisible() {
      this.$nextTick(() => {
        setColor('color', this.color, this.$el)
        setColor('border', this.border, this.$el)
      })
    }
  }
})
export default class VsNotification extends mixinsWithPlugin() {
  @Prop({type: [String], default: null})
  title: string

  @Prop({type: [String], default: null})
  text: string;

  @Prop({type: [String], default: null})
  color: string | null;

  @Prop({type: [String], default: null})
  colorName: string | null

  @Prop({type: [String], default: null})
  border: string | null

  @Prop({type: [String], default: null})
  icon: string | null;

  @Prop({default: null})
  onClickClose: any;

  @Prop({default: null})
  onClick: any;

  @Prop({type: Boolean, default: true})
  buttonClose: boolean;

  @Prop({type: Boolean, default: false})
  flat: boolean

  @Prop({default: null})
  onDestroy: any

  @Prop({type: Boolean, default: false})
  sticky: boolean

  @Prop({type: Boolean, default: false})
  square: boolean

  @Prop({default: null})
  width: string

  @Prop({type: Boolean, default: false})
  loading: boolean

  @Prop({default: null})
  notPadding: any

  @Prop({type: Boolean, default: false})
  progressAuto: boolean;

  @Prop({type: Number, default: 4000})
  duration: number;

  isVisible: boolean = false

  content: any = null

  progress: number = 0

  countProgress: number = 0

  intervalProgress: any = null

  @Prop({type: Boolean, default: false})
  clickClose: boolean

  @Prop({type: Boolean, default: false})
  classNotification: string = null

  close() {
    this.isVisible = false
  }

  show(content) {
    this.isVisible = true
    this.content = content
  }

  setLoading(val: boolean) {
    this.loading = val
  }

  handleClickClose() {
    this.isVisible = false
  }

  beforeEnter(el: any) {
    el.style.maxHeight = `0px`
    el.style.padding = `0px 20px`
  }

  enter(el: any, done: any) {
    const scrollHeight = el.scrollHeight
    el.style.maxHeight = `${scrollHeight + 40}px`
    if (window.innerWidth < 600) {
      el.style.padding = `15px`
    } else {
      el.style.padding = `20px`
    }
    done()
  }

  leave(el: any, done: any) {
    const parent = this.$el.parentNode
    setTimeout(() => {
      done()
      if (parent.childNodes.length == 1) {
        document.body.removeChild(parent)
      }
      parent.removeChild(this.$el)
      // todo
      // this.$destroy()
      if (this.onDestroy) {
        this.onDestroy()
      }
    }, 250)
  }

  get getProgress() {
    setInterval(() => {
      this.progress++
    }, 1)
    return 20
  }

  mounted() {
    if (this.progressAuto) {
      this.intervalProgress = setInterval(() => {
        this.progress++
      }, (this.duration / 100))
    }
  }

  beforeUnmount() {
    clearInterval(this.intervalProgress)
  }

  public render(): VNode {
    const title = h('header', {
      class: 'vs-notification__content__header'
    }, [
      h('h4', {
        innerHTML: this.title
      })
    ])

    const text = h('div', {
      class: 'vs-notification__content__text'
    }, [
      h('p', {
        innerHTML: this.text
      })
    ])

    const content = h('div', {
      class: 'vs-notification__content'
    }, [
      this.title && title,
      this.text && text,
      this.content && h(this.content)
    ])

    const icon = h('div', {
      class: 'vs-notification__icon',
      innerHTML: this.icon
    })

    const closeBtn = h('button', {
      class: 'vs-notification__close',
      onClick: this.handleClickClose
    }, [
      h(VsIconsClose, {
        hover: 'less'
      })
    ])

    const loading = h('div', {
      class: 'vs-notification__loading',
    })

    const progress = h('div', {
      class: 'vs-notification__progress',
      style: {
        width: `${this.progress}%`
      }
    })

    return h(Transition, {
        name: 'notification',
        onBeforeEnter: this.beforeEnter,
        onEnter: this.enter,
        onLeave: this.leave
      }, {
        default: () => [
          this.isVisible && h('div', {
            class: [
              'vs-notification',
              {'vs-notification--color': this.color},
              {'vs-notification--border': this.border},
              {'vs-notification--icon': this.icon},
              {'vs-notification--onClick': this.onClick},
              {'vs-notification--onClickClose': this.onClickClose},
              {'vs-notification--flat': this.flat},
              {'vs-notification--sticky': this.sticky},
              {'vs-notification--square': this.square},
              {'vs-notification--width-all': this.width == '100%'},
              {'vs-notification--width-auto': this.width == 'auto'},
              {'vs-notification--loading': this.loading},
              {'vs-notification--notPadding': this.notPadding},
              `vs-notification--${this.colorName}`,
              this.classNotification
            ],
            onClick: () => {
              if (this.onClick) {
                this.onClick()
              }
              if (this.clickClose) {
                this.close()
                if (this.onClickClose) {
                  this.onClickClose()
                }
              }
            }
          }, [
            (!this.loading && this.icon) && icon,
            !this.loading && content,
            this.buttonClose && closeBtn,
            this.loading && loading,
            progress
          ])
        ]
      }
    )
  }
}
