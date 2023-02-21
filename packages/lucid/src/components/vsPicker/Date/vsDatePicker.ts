import {mixinsWithPlugin} from "../../../util/vue/generator";
import {VNode, h as createVNode} from "vue";
import VsInput from "../../vsInput/Base/vsInput";
import VsHoverCalendar from "./vsHoverCalendar";
import {Model, Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";
import {pad} from "../../../util/date";

@Options({
  name: 'vs-date-picker'
})
export default class VsDatePicker extends mixinsWithPlugin() {
  @Model('modelValue')
  datePickerValue: any

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

  /// #range功能
  // @Prop({type: Boolean, default: false})
  // range: boolean;

  closeFlag: boolean = false;

  rawDate: Date = null;

  splitDate = null;

  /// #range功能
  // changePositionFlag: boolean = false;
  //
  // leftFlag: boolean = false;
  //
  // rightFlag: boolean = false;

  handleChooseDate({date, splitDate}) {
    this.rawDate = date;
    this.datePickerValue = date;
    this.splitDate = splitDate;
    /// #range功能
    /*this.range || */
    (this.closeFlag = true);
  }

  /// #range功能
  //  move (element: any, parent: any){
  //   const style = element.style
  //   const cords = parent.getBoundingClientRect()
  //   const w = cords.width
  //   const x = cords.x
  //   style.left = `${x - (element.offsetWidth - w) - (w / 2)}px`
  // }

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
        modelValue: this.rawDate ? `${this.rawDate.getFullYear()}-${pad(this.rawDate.getMonth() + 1)}-${pad(this.rawDate.getDate())}` : '',
        closeFlag: this.closeFlag,
        /// #range功能
        // changePositionFlag: this.changePositionFlag,
        'onUpdate:closeFlag': value => this.closeFlag = value,
        // 'onUpdate:modelValue': () => this.datePickerValue = this.rawDate,
      },
      {
        hover: () => [createVNode(VsHoverCalendar, {
          ref: 'main',
          date: this.rawDate,
          /// #range功能
          // range: this.range ? 'main' : null,
          // style:{
          //   'vertical-align': 'top'
          // },
          /// #range功能
          // onLeave: (v)=>{
          //   if (this.rightFlag || this.leftFlag) {
          //     return;
          //   }
          //   (this.$refs.input as VsInput).changePosition(this.move);
          //   setTimeout(()=>{
          //     this.rightFlag = true
          //   }, 310)
          // },
          disabledDate: this.disabledDate,
          onChooseDate: this.handleChooseDate
        }),
          /// #range功能
          /* this.rightFlag && createVNode(VsHoverCalendar,{
          range: this.range ? 'right' : null,
          date: this.rawDate,
          clickDate: this.splitDate,
          disabledDate: this.disabledDate,
          onChooseDate: this.handleChooseDate,
          onNotify:(value) => {
            (this.$refs.main as VsHoverCalendar).changeHover(value);
          },
          style:{
            'vertical-align': 'top'
          },
        })*/],
      });
  }
}
