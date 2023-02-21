import { Vue } from 'vue-class-component'
import { getColor } from '../util'
import { Prop } from "vue-property-decorator";
import {App} from "vue";

export default class VsComponent extends Vue  {
  static install: (vue: App, ...options: any[]) => any

  static use: (vue: any) => any

  componentColor: string = null;

  @Prop({ type: String, default: null })
  color!: string

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

  @Prop({ type: Boolean, default: false })
  active!: boolean

  @Prop({ type: Object, default: null })
  themeVars!: Object

  get getColor() {
    return getColor(this.color)
  }

  get isColorDark() {
    return this.color === 'dark' || this.dark || this.componentColor === 'dark'
  }

  get isColor() {
    return !!this.color || !!this.primary || !!this.success || !!this.warn || !!this.danger || !!this.dark
  }

  resolveThemeVars(){
    const result = {}
    if (this.themeVars){
      for (const [k, v] of Object.entries(this.themeVars)){
        result['--vs-'+ k] = v;
      }
    }
    return result
  }

  // mounted() {
    // this.getColor = getColor(this.color)
  // }
}
