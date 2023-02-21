import {h, VNode, Transition} from 'vue'
import {insertBody, setCordsPosition} from '../../../util'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options, prop} from "vue-class-component";
import {Model, Prop, Watch} from "vue-property-decorator";

@Options({
  name:'vs-tooltip'
})
export default class VsTooltip extends mixinsWithPlugin() {

  @Model('modelValue')
  value: any

  @Prop({default: false, type: Boolean})
  loading: boolean

  @Prop({default: false, type: Boolean})
  bottom: boolean

  @Prop({default: false, type: Boolean})
  left: boolean

  @Prop({default: false, type: Boolean})
  right: boolean

  @Prop({default: false, type: Boolean})
  notHover: boolean

  @Prop({default: false, type: Boolean})
  shadow: boolean

  @Prop({default: false, type: Boolean})
  interactivity: boolean

  @Prop({default: false, type: Boolean})
  notArrow: boolean

  @Prop({default: false, type: Boolean})
  square: boolean

  @Prop({default: false, type: Boolean})
  circle: boolean

  @Prop({default: false, type: Boolean})
  border: boolean

  @Prop({default: false, type: Boolean})
  borderThick: boolean

  @Prop({default: null, type: String})
  delay: any

  @Watch('modelValue')
  handleWatchValue(val: boolean) {
    this.activeTooltip = val
    if (val) {
      this.$nextTick(() => {
        this.insertTooltip()
      })
    }
  }

  activeTooltip: boolean = false

  isHoverTooltip: boolean = false

  insertTooltip() {
    const tooltip = this.$refs.tooltip as HTMLElement
    insertBody(tooltip, document.body)

    let position = 'top'
    if (this.bottom) {
      position = 'bottom'
    } else if (this.left) {
      position = 'left'
    } else if (this.right) {
      position = 'right'
    }

    setCordsPosition(tooltip, this.$refs.content, position)
  }

  handlerMouseEnter() {
    if (this.delay) {
      setTimeout(() => {
        this.activeTooltip = true
        this.$nextTick(() => {
          this.insertTooltip()
        })
      }, Number(this.delay))
    } else {
      this.activeTooltip = true
      this.$nextTick(() => {
        this.insertTooltip()
      })
    }
  }

  removeTooltip() {
    this.activeTooltip = false
    this.$emit('input', false)
  }

  handleResize() {
    let position = 'top'
    if (this.bottom) {
      position = 'bottom'
    } else if (this.left) {
      position = 'left'
    } else if (this.right) {
      position = 'right'
    }
    const tooltip = this.$refs.tooltip as HTMLElement
    if (!tooltip) {
      return
    }
    this.$nextTick(() => {
      setCordsPosition(tooltip, this.$refs.content, position)
    })

    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        setCordsPosition(tooltip, this.$refs.content, position)
      }, index);
    }
  }

  handleMouseDownNotHover(evt: any) {
    if (!evt.target.closest('.vs-tooltip') && !evt.target.closest('.vs-tooltip-content')) {
      this.removeTooltip()
    }
  }

  mounted() {
    window.addEventListener('popstate', (event) => {
      const tooltips = document.querySelectorAll('.vs-tooltip')
      tooltips.forEach((tooltip) => {
        tooltip.remove()
      })
    })

    window.addEventListener('resize', this.handleResize)
    if (this.notHover) {
      window.addEventListener('mousedown', this.handleMouseDownNotHover)
    }

    window.addEventListener('touchstart', this.handleMouseDownNotHover)
  }

  beforeUnmount() {
    this.activeTooltip = false
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('mousedown', this.handleMouseDownNotHover)
  }

  public render(): VNode {
    const loading = h('div', {
      class: 'vs-tooltip__loading',
    })

    const tooltip = h('div', {
      ref: 'tooltip',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        'vs-tooltip',
        {
          top: !this.bottom && !this.left && !this.right,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          shadow: this.shadow,
          notArrow: this.notArrow,
          square: this.square,
          circle: this.circle,
          border: this.border,
          borderThick: this.borderThick,
          loading: this.loading
        },
        // colors
        {[`vs-component--primary`]: !!this.primary},
        {[`vs-component--danger`]: !!this.danger},
        {[`vs-component--warn`]: !!this.warn},
        {[`vs-component--success`]: !!this.success},
        {[`vs-component--dark`]: !!this.dark},
      ],
      onMouseenter: () => {
        if (this.interactivity) {
          this.isHoverTooltip = true
          this.handlerMouseEnter()
        }
      },
      onMouseleave: () => {
        this.isHoverTooltip = false
        this.removeTooltip()
      }
    }, [
      this.$slots.tooltip && this.$slots.tooltip(),
      this.loading && loading
    ])

    return h('div', {
      class: 'vs-tooltip-content',
      ref: 'content',
      onMouseenter: () => {
        if (!this.notHover) {
          this.handlerMouseEnter()
        }
      },
      onMouseleave: () => {
        if (!this.notHover) {
          if (this.interactivity) {
            setTimeout(() => {
              if (!this.isHoverTooltip) {
                this.removeTooltip()
              }
            }, 250)
          } else {
            this.removeTooltip()
          }
        }
      }
    }, [
      h(Transition, {
        name: 'vs-tooltip'
      }, {
        default: () =>
          [
            this.activeTooltip && tooltip,
          ]
      }),
      this.$slots.default && this.$slots.default()
    ])
  }
}
