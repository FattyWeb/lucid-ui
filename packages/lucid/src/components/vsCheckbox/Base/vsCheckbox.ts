import {h, VNode} from 'vue'
import VsIconsCheck from '../../../icons/check'
import {Model, Prop, Watch} from "vue-property-decorator";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-checkbox',
  inheritAttrs: false
})
export default class VsCheckbox extends mixinsWithPlugin() {
  @Model('modelValue', {default: ''})
  checkValue: any

  @Prop({default: ''})
  val!: any

  @Prop({default: ''})
  notValue!: any

  @Prop({type: Boolean, default: false})
  indeterminate!: boolean

  @Prop({type: Boolean, default: false})
  lineThrough!: boolean

  @Prop({type: Boolean, default: false})
  checked: boolean

  @Prop({type: Boolean, default: false})
  checkedForce: boolean

  @Prop({type: Boolean, default: false})
  loading!: boolean

  @Prop({type: Boolean, default: false})
  labelBefore!: boolean

  _: { uid: number }

  mounted() {
    if (this.checked && typeof this.checkValue == 'boolean') {
      this.$emit('input', true)
    }
  }

  get isChecked() {
    let isChecked = false
    if (this.checkValue) {
      if (typeof this.checkValue == 'boolean') {
        isChecked = this.checkValue
      } else if (typeof this.checkValue === 'object' && this.checkValue !== null) {
        const array = this.checkValue
        const containValue = array.indexOf(this.val) === -1 &&
          JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
        let indexVal = 0

        array.forEach((item: any, index: number) => {
          if (JSON.stringify(item) == JSON.stringify(this.val)) {
            indexVal = index
          }
        })
        return !containValue;
      }
    } else {
      isChecked = false
    }
    return isChecked
  }

  @Watch('indeterminate')
  handleIndeterminate(val: boolean) {
    if (val) {
      this.$emit('input', true)
    } else {
      this.$emit('input', false)
    }
  }

  public render(): VNode {
    const InputCheckbox = h('input', {
      id: this._.uid,
      class: 'vs-checkbox',
      type: 'checkbox',
      checked: this.checkedForce || this.isChecked,
      ...this.$attrs,
      onInput: (evt: any) => {
        if (typeof this.checkValue === 'boolean') {
          this.$emit('input', this.checkValue = !this.checkValue)
        } else if (typeof this.checkValue === 'object' && this.checkValue !== null) {
          const array = this.checkValue;
          const containValue = array.indexOf(this.val) === -1 &&
            JSON.stringify(array).indexOf(JSON.stringify(this.val)) === -1
          let indexVal = 0
          array.forEach((item: any, index: number) => {
            if (JSON.stringify(item) == JSON.stringify(this.val)) {
              indexVal = index
            }
          })
          if (containValue) {
            array.push(this.val)
          } else {
            array.splice(indexVal, 1)
          }
          this.$emit('input', this.checkValue = array)
        } else {
          if (this.val !== this.checkValue) {
            this.$emit('input', this.checkValue = this.val)
          } else {
            this.$emit('input', this.checkValue = this.notValue || null)
          }
        }
        this.$emit('mousedown', evt)
      },
      onBlur: (evt: EventTarget) => {
        this.$emit('blur', evt)
      }
    })

    const checkbox = h('div', {
      class: 'vs-checkbox-mask',
    }, [
      !this.$slots.icon && h(VsIconsCheck, {
        indeterminate: this.indeterminate
      }),
      this.$slots.icon && this.$slots.icon()
    ])

    const label = h('label', {
      class: [
        'vs-checkbox-label',
        {
          lineThrough: this.lineThrough
        }
      ],
      for: this._.uid
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const conCheckbox = h('div', {
      class: 'vs-checkbox-con'
    }, [
      InputCheckbox,
      checkbox
    ])

    return h('div', {
        style: {
          ['--vs-color']: this.color ? this.getColor : ''
        },
        class: [
          'vs-checkbox-content',
          {'vs-checkbox--checked': this.isChecked},
          {'vs-checkbox--disabled': this.$attrs.hasOwnProperty('disabled')},
          {'vs-checkbox--loading': this.loading},
          {'vs-checkbox--label-before': this.labelBefore},

          // colors
          {[`vs-component--primary`]: !this.danger && !this.success && !this.warn && !this.dark && !this.color},
          {[`vs-component--danger`]: !!this.danger},
          {[`vs-component--warn`]: !!this.warn},
          {[`vs-component--success`]: !!this.success},
          {[`vs-component--dark`]: !!this.dark},
        ]
      },
      [
        conCheckbox,
        this.$slots.default && label
      ]
    )
  }
}
