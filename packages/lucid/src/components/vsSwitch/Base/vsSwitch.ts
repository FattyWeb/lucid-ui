import {h, VNode} from 'vue'
import {Model, Prop} from "vue-property-decorator";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-switch',
  inheritAttrs: false
})
export default class VsSwitch extends mixinsWithPlugin() {
  @Model('modelValue', {default: ''})
  switchValue: any

  @Prop({default: ''})
  val!: any

  @Prop({default: ''})
  notValue!: any

  @Prop({type: Boolean, default: false})
  loading!: boolean

  @Prop({type: Boolean, default: false})
  square!: boolean

  @Prop({type: Boolean, default: false})
  indeterminate!: boolean

  @Prop({type: Boolean, default: false})
  icon!: boolean

  get isChecked() {
    let isChecked = false
    if (this.switchValue) {
      if (typeof this.switchValue == 'boolean') {
        isChecked = this.switchValue
      } else if (typeof this.switchValue === 'object' && this.switchValue !== null) {
        const array = this.switchValue
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

  public render(): VNode {
    const circle = h('div', {
      class: ['vs-switch__circle'],
    }, [
      this.$slots.circle && this.$slots.circle()
    ])

    const textOn = h('div', {
      ref: 'on',
      class: ['vs-switch__text', 'on'],
    }, [this.$slots.on ? this.$slots.on() : (this.$slots.default && this.$slots.default())])

    const textOff = h('div', {
      ref: 'off',
      class: ['vs-switch__text', 'off'],
    }, [this.$slots.off ? this.$slots.off() : (this.$slots.default && this.$slots.default())])

    const background = h('div', {
      class: ['vs-switch__background'],
    })

    const input = h('input', {
      ...this.$attrs,
      type: 'checkbox',
      checked: this.isChecked,
      // on: {
      //   ...this.$listeners,
      onInput: (evt: any) => {
        if (typeof this.switchValue == 'boolean') {

          this.$emit('input', this.switchValue = !this.switchValue)

        } else if (typeof this.switchValue == 'object' && this.switchValue !== null) {

          const array = this.switchValue
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

          this.$emit('input', array)

        } else {

          if (this.val !== this.switchValue) {
            this.$emit('input', this.val)
          } else {
            this.$emit('input', this.notValue || null)
          }
        }
        this.$emit('change', evt)
      },
      class: ['vs-switch__input', this.$attrs && this.$attrs.class],
    })

    return h('div', {
      type: 'checkbox',
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        'vs-switch',
        {
          'vs-switch--loading': this.loading,
          'vs-switch--square': this.square,
          'vs-switch--indeterminate': this.indeterminate,
          'vs-switch--icon': this.icon,
        },
        {[`vs-component--primary`]: !this.danger && !this.success && !this.warn && !this.dark && !this.color},
        {[`vs-component--danger`]: !!this.danger},
        {[`vs-component--warn`]: !!this.warn},
        {[`vs-component--success`]: !!this.success},
        {[`vs-component--dark`]: !!this.dark},
      ],
    }, [
      input,
      circle,
      textOn,
      textOff,
      // !this.active && textOff,
      background
    ])
  }
}
