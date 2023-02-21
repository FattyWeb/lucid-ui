import {h as createVNode, VNode, Transition} from 'vue'
import {Model, Prop, Watch} from "vue-property-decorator";
import {insertBody, setCords, splitAttrsInVue2} from "../../../util";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";
import FormComponent from "../../../mixins/Form";

@Options({
    name: 'vs-input',
    inheritAttrs: false,
  }
)
export default class VsInput extends mixinsWithPlugin(FormComponent) {
  @Model('modelValue', {type: String, default: ''})
  readonly inputValue!: any

  @Model('closeFlag',)
  hoverCloseFlag!: boolean

  @Prop({default: ''})
  readonly labelPlaceholder!: any

  @Prop({default: ''})
  readonly label!: any

  @Prop({type: Boolean, default: false})
  readonly block!: boolean

  @Prop({type: Boolean, default: false})
  readonly iconAfter!: boolean

  @Prop({type: Boolean, default: false})
  readonly visiblePassword!: boolean

  @Prop({type: Boolean, default: false})
  readonly loading!: boolean

  @Prop({type: String, default: null})
  readonly color!: string

  @Prop({type: String, default: null})
  readonly state!: string

  @Prop({type: Number, default: 0})
  progress!: number

  @Prop({type: Boolean, default: false})
  border!: boolean

  @Prop({type: Boolean, default: false})
  shadow!: boolean

  @Prop({type: Boolean, default: false})
  transparent!: boolean

  @Prop({type: Boolean, default: false})
  textWhite!: boolean

  @Prop({type: Boolean, default: false})
  square!: boolean

  // 是否已激活
  activeInput: boolean = false;

  // 鼠标是否在日历界面内
  targetInput: boolean = false


  // vue实例
  _: { uid: number }

  /**
   * 插入下拉选项
   */
  insertOptions() {
    const calendar = this.$refs.cal as HTMLElement;
    insertBody(calendar, document.body);
    setCords(calendar, this.$refs.content, {ignoreWidth: true, center: true, margin: 10});
  }

  handleWindowClick(evt: any) {
    if (!this.targetInput) {
      this.handleBlur()
    }

    // if (this.filter && !this.activeOptions) {
    //   this.activeFilter = false
    // }
    //
    // if (evt.target == this.$refs.input && this.activeOptions && !this.filter) {
    //   this.handleBlur()
    //   setTimeout(() => {
    //     (this.$refs.input as HTMLElement).blur()
    //   }, 100);
    // }
  }

  handleBlur() {
    this.$nextTick(() => {
      this.activeInput = false
    });
    // this.$emit('blur')
    // this.setHover()
    window.removeEventListener('mousedown', this.handleWindowClick)
    // if (this.activeOptions) {
    //   this.textFilter = ''
    //   if (!this.multiple) {
    //     this.activeFilter = false
    //   }
    // }
  }

  handleResize() {
    const calendar = this.$refs.cal as HTMLElement;
    if (!calendar) {
      return
    }
    this.$nextTick(() => {
      setCords(calendar, this.$refs.content, {ignoreWidth: true, center: true, margin: 10})
    })

    for (let index = 0; index < 300; index++) {
      setTimeout(() => {
        setCords(calendar, this.$refs.content, {ignoreWidth: true, center: true, margin: 10})
      }, index);
    }
  }

  handleScroll() {
    this.dark
    const calendar = this.$refs.cal as HTMLElement;
    if (calendar) {
      setCords(calendar, this.$refs.content, {ignoreWidth: true, center: true, margin: 10})
    }
  }

  // 打开悬浮窗
  @Watch('activeInput', {immediate:false})
  handleActive(val: boolean) {
    this.$nextTick(() => {
      if (val) {
        this.insertOptions()
      }
    })
  }

  // 关闭悬浮窗
  @Watch('closeFlag')
  handleHoverFlagChange(val) {
    if (val) {
      this.handleBlur();
      this.hoverCloseFlag = false;
    }
  }

  get getId() {
    return `vs-input--${this.$attrs.id || this._.uid}`
  }

  get hasColor() {
    return (this.color || this.primary || this.danger || this.success || this.dark || this.warn)
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any, done: any) {
    let h = el.scrollHeight
    el.style.height = h - 1 + 'px'
    done()
  }

  leave(el: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  getMessage(type: string) {
    const typeUpper = type.substring(0, 1).toUpperCase() + type.substring(1)
    return createVNode(Transition, {
      onBeforeEnter: this.beforeEnter,
      onEnter: this.enter,
      onLeave: this.leave
    }, {
      default: () => [
        (!!this.$slots[`message-${type}`] || this['form'+typeUpper]) && createVNode('div', {
          class: [`vs-input__message--${type}`, 'vs-input__message']
        }, [
          this['form'+typeUpper] || this.$slots[`message-${type}`]()
        ])
      ]
    })
  }

  /// #range功能
  // changePosition(changeFunction: Function){
  //   setTimeout(()=>{
  //     changeFunction(this.$refs.cal as HTMLElement, this.$refs.content)
  //   },0)
  // }

  mounted() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  }

  beforeUnmount() {
    this.handleBlur()
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  public render(): VNode {
    const input = createVNode('input', {
      value: this.inputValue,
      class: [
        'vs-input',
        {['vs-input--has-icon']: !!this.$slots.icon},
        {['vs-input--has-icon--after']: !!this.iconAfter}
      ],
      onInput: (evt: any) => {
        this.$emit('update:modelValue', evt.target.value)
      },
      onFocus: () => {
        if (this.$slots.hover) {
          this.activeInput = true;
          window.addEventListener('mousedown', this.handleWindowClick)
        }
      },
      ...this.$attrs,
      placeholder: '',
      id: this.getId,
      type: this.visiblePassword ? 'text' : this.$attrs.type
    })

    const label = createVNode('label', {
      for: this.getId,
      class: [
        'vs-input__label',
        {'vs-input__label--placeholder': this.labelPlaceholder},
        {'vs-input__label--hidden': this.inputValue !== '' || this.$attrs.type == 'date' || this.$attrs.type == 'time'},
        {'vs-input__label--label': this.label}
      ],
    }, [
      this.label || this.$attrs.placeholder || this.labelPlaceholder
    ])

    const placeholder = createVNode('label', {
      for: this.getId,
      class: [
        'vs-input__label',
        {'vs-input__label--hidden': this.inputValue !== ''},
      ],
    }, [
      this.$attrs.placeholder as string
    ])

    const icon = createVNode('span', {
      class: [
        'vs-input__icon',
        {'vs-input__icon--after': this.iconAfter},
        {'vs-input__icon--click': !!splitAttrsInVue2(this.$attrs).listeners['click-icon']}
      ],
      onClick: (evt: any) => {
        this.$emit('click-icon', evt.target.value)
      }
    }, [
      this.$slots.icon && this.$slots.icon()
    ])

    const messageSuccess = this.getMessage('success')

    const messageDanger = this.getMessage('danger')

    const messageWarn = this.getMessage('warn')

    const messagePrimary = this.getMessage('primary')

    const progressBar = createVNode('div', {
      class: [
        'vs-input__progress',
        {'vs-input__progress--danger': this.progress < 33},
        {'vs-input__progress--warn': this.progress < 66 && this.progress > 33},
        {'vs-input__progress--success': this.progress > 66}
      ]
    }, [
      createVNode('div', {
        class: 'vs-input__progress__bar',
        style: {
          width: `${this.progress}%`
        },
      })
    ])

    const loading = createVNode('div', {
      class: 'vs-input__loading',
    })

    const effects = createVNode('div', {
      class: 'vs-input__affects',
    }, [
      createVNode('div', {
        class: 'vs-input__affects__1',
      }),
      createVNode('div', {
        class: 'vs-input__affects__2',
      }),
      createVNode('div', {
        class: 'vs-input__affects__3',
      }),
      createVNode('div', {
        class: 'vs-input__affects__4',
      })
    ])

    const hover = createVNode('div', {
      ref: 'cal',
      class: ['light'],
      style: {
        position: 'absolute',
        'z-index': 99999,
        transition: 'all 0.3s'
      },
      onMouseleave: () => {
        this.targetInput = false
      },
      onMouseenter: () => {
        this.targetInput = true
      },

    }, this.$slots.hover && this.$slots.hover())

    const inputContent = createVNode('div', {
      ref: 'content',
      class: [
        'light', // todo
        'vs-input-content',
        {[`vs-input-content--has-color`]: this.hasColor},
        {[`vs-input-content--has-label`]: this.label || this.labelPlaceholder}
      ]
    }, [
      input,
      this.label && placeholder,
      label,
      this.$slots.icon && icon,
      this.loading && loading,
      (this.$slots.hover && this.activeInput) && hover,
      effects
    ])

    return createVNode('div', {
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        'vs-input-parent',
        `vs-input-parent--state-${this.formState || this.state}`,
        {'vs-input-parent--border': !!this.border},
        {'vs-input-parent--shadow': !!this.shadow},
        {[`vs-input-content--has-label`]: this.label || this.labelPlaceholder},
        {block: this.block},
        {transparent: this.transparent},
        {textWhite: this.textWhite},
        {square: this.square},

        // colors
        {[`vs-component--primary`]: !this.danger && !this.success && !this.warn && !this.dark && !this.color},
        {[`vs-component--danger`]: !!this.danger},
        {[`vs-component--warn`]: !!this.warn},
        {[`vs-component--success`]: !!this.success},
        {[`vs-component--dark`]: !!this.dark},
        {[`vs-component--is-color`]: !!this.isColor},
      ]
    }, [
      inputContent,
      this.progress > 0 && progressBar,
      messageSuccess,
      messageDanger,
      messageWarn,
      messagePrimary
    ])
  }
}
