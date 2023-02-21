import { h, VNode } from 'vue'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Model, Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({name: 'vs-radio'})
export default class VsRadio extends mixinsWithPlugin() {

  @Model('modelValue')
  radioValue: any

  @Prop({})
  val: any

  @Prop({ type: String, default: null })
  name: string

  @Prop({ type: Boolean, default: false })
  disabled: boolean

  @Prop({ type: Boolean, default: false })
  loading: boolean

  @Prop({ type: Boolean, default: false })
  labelBefore: boolean

  _: { uid: number }

  model: {
    prop: 'model',
    event: 'change'
  }

  get isChecked() {
    return this.radioValue == this.val
  }

  public render(): VNode {
    const radioInput = h('input', {
      // attrs: {
        type: 'radio',
        id: this._.uid,
        value: this.val,
        name: this.name || this.radioValue,
        checked: this.isChecked,
      // },
      // on: {
        onInput: () => {
          this.radioValue = this.val
          this.$emit('input', this.val)
        }
      // }
    })

    const radioEffect = h('span', {
      class: 'vs-radio__effect',
    }, [
      h('span', {
        class: 'vs-radio__effect__icon'
      }, [
        this.$slots.icon && this.$slots.icon()
      ]),
      h('span', { class: 'vs-radio__effect__loading' })
    ])

    const label = h('label', {
      class: 'vs-radio__label',
      // attrs: {
        for: this._.uid
      // }
    }, [this.$slots.default && this.$slots.default()])

    const radio = h('div', {
      class: 'vs-radio'
    }, [
      radioInput,
      radioEffect,
    ])
    return h('div', {
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        'vs-radio-content',
        {
        disabled: this.disabled,
        loading: this.loading,
        active: this.isChecked
      },
      // colors
      { [`vs-component--primary`] : !this.danger && !this.success && !this.warn && !this.dark && !this.color },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
    ]
    }, [
      this.labelBefore && label,
      radio,
      !this.labelBefore && label
    ])
  }
}
