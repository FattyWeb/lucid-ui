import {h, VNode, Transition} from 'vue'
import {Options} from 'vue-class-component';
import VsIconsClose from '../../../icons/close'
import {insertBody} from '../../../util'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Model, Prop, Watch} from "vue-property-decorator";

@Options({
  name: 'vs-dialog'
})
export default class VsDialog extends mixinsWithPlugin() {

  @Model('modelValue', {default: false, type: Boolean})
  dialogValue: boolean

  @Prop({default: false, type: Boolean})
  loading: boolean

  @Prop({default: false, type: Boolean})
  fullScreen: boolean

  @Prop({default: false, type: Boolean})
  notClose: boolean

  @Prop({default: false, type: Boolean})
  preventClose: boolean

  @Prop({default: false, type: Boolean})
  notPadding: boolean

  @Prop({default: false, type: Boolean})
  overflowHidden: boolean

  @Prop({default: false, type: Boolean})
  blur: boolean

  @Prop({default: false, type: Boolean})
  square: boolean

  @Prop({default: false, type: Boolean})
  autoWidth: boolean

  @Prop({default: false, type: Boolean})
  scroll: boolean

  @Prop({default: false, type: Boolean})
  notCenter: boolean

  @Prop({default: null, type: String})
  width: string

  @Prop({default: false, type: Boolean})
  routerClose: boolean

  rebound: boolean = false

  esc(evt: any) {
    if (evt.which == 27 && !this.preventClose) {
      this.dialogValue = false;
      this.$emit('input', false)
      this.$emit('close')
    }
  }

  addEsc() {
    window.addEventListener('keydown', this.esc)
  }

  insertDialog() {
    this.addEsc()
    this.$nextTick(() => {
      const dialog = this.$refs['dialog-content'] as HTMLElement
      insertBody(dialog, document.querySelector('#app'))
    })
  }

  @Watch('modelValue')
  handleWatchValue(val: boolean) {
    if (val) {
      this.insertDialog()
      if (this.overflowHidden) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      if (this.overflowHidden) {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', this.esc)
      }
    }
  }

  beforeUnmount() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }

  public render(): VNode {
    const header = h('header', {
      class: 'vs-dialog__header'
    }, [
      this.$slots.header && this.$slots.header()
    ])

    const content = h('div', {
      class: [
        'vs-dialog__content',
        {
          notFooter: !this.$slots.footer
        }]
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const footer = h('footer', {
      class: 'vs-dialog__footer'
    }, [
      this.$slots.footer && this.$slots.footer()
    ])

    const close = h('button', {
      class: 'vs-dialog__close',
      onclick: (evt: any) => {
        this.dialogValue = !this.dialogValue;
        this.$emit('input', !this.dialogValue)
        this.$emit('close')
      }
    }, [
      h(VsIconsClose, {
        hover: 'x'
      })
    ])

    const loading = h('div', {
      class: 'vs-dialog__loading',
    }, [
      h('div', {
        class: 'vs-dialog__loading__load',
      })
    ])

    const dialog = h('div', {
      style: {
        width: this.width
      },
      class: ['vs-dialog', {
        'vs-dialog--fullScreen': this.fullScreen,
        'vs-dialog--rebound': this.rebound,
        'vs-dialog--notPadding': this.notPadding,
        'vs-dialog--square': this.square,
        'vs-dialog--autoWidth': this.autoWidth,
        'vs-dialog--scroll': this.scroll,
        'vs-dialog--loading': this.loading,
        'vs-dialog--notCenter': this.notCenter,
      }]
    }, [
      this.loading && loading,
      !this.notClose && close,
      this.$slots.header && header,
      content,
      this.$slots.footer && footer
    ])

    const dialogContent = h('div', {
      ref: 'dialog-content',
      class:
        ['vs-dialog-content',
          {
            blur: this.blur,
            fullScreen: this.fullScreen,
          }],
      onClick: (evt: any) => {
        if (!evt.target.closest('.vs-dialog') && !this.preventClose) {
          this.dialogValue = !this.dialogValue;
          this.$emit('input', !this.dialogValue)
          this.$emit('close')
        }

        if (this.preventClose && !evt.target.closest('.vs-dialog')) {
          this.rebound = true
          setTimeout(() => {
            this.rebound = false
          }, 300);
        }
      }
      // }
    }, [
      dialog
    ])

    return h(Transition, {
      name: 'vs-dialog'
    }, {default: () => [this.dialogValue && dialogContent]})
  }
}
