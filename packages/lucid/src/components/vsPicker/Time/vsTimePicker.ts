import {mixinsWithPlugin} from "../../../util/vue/generator";
import {VNode, h as createVNode} from "vue";
import VsInput from "../../vsInput/Base/vsInput";
import VHoverTimeSelector from "./vsHoverTimeSelector";
import {Model, Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";
import {pad} from "../../../util/date";

@Options({
  name: 'vs-time-picker'
})
export default class VsTimePicker extends mixinsWithPlugin() {
  @Model('modelValue', {type: Date})
  datePickerValue: Date

  @Prop({type: Function})
  disabledDate: (time: Date) => boolean

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

  @Prop({ type: Boolean, default: false })
  danger!: boolean

  @Prop({ type: Boolean, default: false })
  success!: boolean

  @Prop({ type: Boolean, default: false })
  warn!: boolean

  @Prop({ type: Boolean, default: false })
  dark!: boolean

  @Prop({ type: Boolean, default: false })
  primary!: boolean

  closeFlag: boolean = false;

  rawDate: Date = null;

  splitDate = null;

  handleChooseDate({date}) {
    this.rawDate = date;
    this.datePickerValue = date;
    // this.splitDate = splitDate;
  }

  render(): VNode {
    return createVNode(VsInput, {
        labelPlaceholder: this.labelPlaceholder,
        label: this.label,
        block: this.block,
        iconAfter: this.iconAfter,
        visiblePassword: this.visiblePassword,
        loading: this.loading,
        color: this.color,
        state: this.state,
        progress: this.progress,
        border: this.border,
        shadow: this.shadow,
        transparent: this.transparent,
        textWhite: this.textWhite,
        square: this.square,
        danger: this.danger,
        warn: this.warn,
        success: this.success,
        primary: this.primary,
        dark: this.dark,
        ref: 'input',
        modelValue: this.datePickerValue ? `${pad(this.datePickerValue.getHours())}:${pad(this.datePickerValue.getMinutes())}:${pad(this.datePickerValue.getSeconds())}` : '',
        closeFlag: this.closeFlag,
        readonly: true,
        'onUpdate:closeFlag': value => this.closeFlag = value,
      },
      {
        hover: () => [createVNode(VHoverTimeSelector, {
          ref: 'main',
          modelValue: this.datePickerValue,
          disabledDate: this.disabledDate,
          'onUpdate:modelValue': this.handleChooseDate
        })],
      });
  }
}
