import { h, VNode, Transition } from 'vue'
import {Model, Prop, Watch} from 'vue-property-decorator';
import VsIconsClose from '../../../icons/close'
import VsIconsPlus from '../../../icons/plus'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";

@Options({name:'vs-alert'})
export default class VsAlert extends mixinsWithPlugin() {

  @Model('modelValue',{ type: Boolean, default: true })
  alertValue!: boolean

  @Prop({ type: Boolean, default: false })
  solid!: boolean

  @Prop({ type: Boolean, default: false })
  border!: boolean

  @Prop({ type: Boolean, default: false })
  shadow!: boolean

  @Prop({ type: Boolean, default: false })
  gradient!: boolean

  @Prop({ type: Boolean, default: false })
  flat!: boolean

  @Prop({ type: Boolean, default: false })
  relief!: boolean

  @Prop({ type: Boolean, default: null })
  hiddenContent!: boolean | null

  @Prop({ type: Boolean, default: false })
  closable!: boolean

  @Prop({ type: [Number, String], default: 0 })
  progress!: number | string

  @Prop({ type: [Number, String], default: 0 })
  page!: number | string

  @Watch('page')
  handlePage() {
    const content = this.$refs.content as HTMLElement;
    content.style.minHeight = content.scrollHeight + 'px'

    this.$nextTick(() => {
      const el = (this.$el as HTMLElement)
      el.style.height = this.$el.scrollHeight - 1 + 'px'
    })
  }

  @Watch('hiddenContent')
  handleHiddenContent(val: boolean) {
    if (!this.alertValue) {
      return
    }
    const el = (this.$el as HTMLElement)
    const content = (this.$refs.content as HTMLElement)
    if (!val) {
      el.style.height = 'auto'
      setTimeout(() => {
        el.style.height = this.$el.scrollHeight - 1 + 'px'
      }, 250)
    } else {
      el.style.height = this.$el.scrollHeight - content.scrollHeight + 'px'
    }
  }

  get getTotalPages() {
    const keys = Object.keys(this.$slots).filter((item) => {
      return item.indexOf('page') !== -1
    })
    return keys.length
  }

  get getPages() {
    const keys = Object.keys(this.$slots).filter((item) => {
      return item.indexOf('page') !== -1
    })

    const values: any = []

    keys.forEach((item) => {
      values.push(this.page == item.split('-')[1] && this.$slots[item]())
    })
    return values
  }

  mounted(): void {
    if (this.$el && this.$refs.content) {
      const el = (this.$el as HTMLElement)
      el.style.height = this.$el.scrollHeight - 1 + 'px'

      const content = this.$refs.content as HTMLElement
      content.style.minHeight = content.scrollHeight + 'px'
    }
  }

  beforeEnter(el: any) {
    el.style.height = 0
  }

  enter(el: any) {
    const scrollHeight = el.scrollHeight
    el.style.height = scrollHeight - 1 + 'px'
    // todo
    // done()
  }

  leave(el: any, done: any) {
    el.style.minHeight = '0px'
    el.style.height = '0px'
  }

  handleClickClose() {
    this.$emit('update:modelValue', !this.alertValue)
  }

  handleClickHidden() {
    this.$emit('update:hiddenContent', !this.hiddenContent)
  }

  handleClickPrevPage() {
    if (this.page > 1) {
      this.$emit('update:page', Number(this.page) - 1)
    }
  }

  handleClickNextPage() {
    if (this.page < this.getTotalPages) {
      this.$emit('update:page', Number(this.page) + 1)
    }
  }

  render(): VNode {
    // const icon = h('div', {
    //   class: 'vs-alert__icon',
    //   ref: 'icon'
    // }, [
    //   this.$slots.icon
    // ]);
    const contentText = h('div', {
      class: 'vs-alert__content__text',
      ref: 'text'
    }, [
      this.$slots.default ? this.$slots.default() : [],
      ...this.getPages
    ])

    const content = h(Transition, {
      onBeforeEnter: this.beforeEnter,
      onEnter: this.enter,
      onLeave: this.leave
    }, {default: () => [ !this.hiddenContent &&
      h('div', {
        class: 'vs-alert__content',
        ref: 'content'
      }, {default: () => [contentText]})
    ]})

    const title = h('div', {
      class: ['vs-alert__title', {
        'vs-alert__title--clickHidden': typeof this.hiddenContent === 'boolean'
      }],
    }, [
      this.$slots.title(),
      !this.closable && typeof this.hiddenContent === 'boolean' && h(VsIconsPlus, {
        less: !this.hiddenContent,
        onClick: this.handleClickHidden
      })
    ])

    const closeBtn = h('button', {
      class: 'vs-alert__close',
      onClick:  this.handleClickClose,
    }, [
      h(VsIconsClose, {
          hover: 'less'
      })
    ])

    const pagination = h('div', {
      class: 'vs-alert__pagination'
    }, [
      h('button', {
        onClick: this.handleClickPrevPage
      } , '<'),
      h('span', `${this.page} / ${this.getTotalPages}`),
      h('button', {
        onClick: this.handleClickNextPage
      }, '>')
    ])

    // const footer = h('div', {
    //   class: 'vs-alert__footer',
    // }, [
    //   this.$slots.footer()
    // ]);

    const progress = h('div', {
      class: 'vs-alert__progress',
    }, [
      h('div', {
        class: 'vs-alert__progress__bar',
        style: {
          width: `${this.progress}%`
        }
      })
    ])

    const render = h('div', {
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: ['vs-alert',
        { [`vs-alert--solid`] : !!this.solid },
        { [`vs-alert--border`] : !!this.border },
        { [`vs-alert--shadow`] : !!this.shadow },
        { [`vs-alert--gradient`] : !!this.gradient },
        { [`vs-alert--flat`] : !!this.flat },
        { [`vs-alert--relief`] : !!this.relief },
        { [`vs-alert--pages`] : this.getPages.length > 0 },
        'vs-component--primary',
        // colors
        { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
        { [`vs-component--danger`] : !!this.danger },
        { [`vs-component--warn`] : !!this.warn },
        { [`vs-component--success`] : !!this.success },
        { [`vs-component--dark`] : !!this.dark },
      ],
    }, [
      this.$slots.icon && h('div', {
        class: 'vs-alert__icon',
        ref: 'icon'
      }, [
        this.$slots.icon()
      ]),
      this.$slots.title && title,
      content,
      this.closable && closeBtn,
      this.$slots.footer && h('div', {
        class: 'vs-alert__footer',
      }, [
        this.$slots.footer()
      ]),
      !!this.progress && progress,
      this.getTotalPages > 0 && pagination
    ])
    return h(Transition, {
      onBeforeEnter: this.beforeEnter,
      onEnter: this.enter,
      onLeave: this.leave
    }, {default: () => [this.alertValue && render]})
  }
}
