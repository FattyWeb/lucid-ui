import {mixinsWithPlugin} from "../../../util/vue/generator";
import {VNode, h as createVNode} from "vue";
import {HtmlTags} from "../../../constants/HtmlTags";
import {Model, Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";
import {hours, minutes, pad, timeComponentIsDisabled} from '../../../util/date';

@Options({
  name: 'vs-hover-time-selector',
  computed: {
    hours() {
      return hours(this.hourStep).filter(hour => {
        if (!this.use12Hour) {
          return true
        } else {
          if (this.selectorValue.getHours() < 12) {
            return hour < 12
          } else {
            return hour >= 12
          }
        }
      }).map(hour => ({
        number: pad(hour),
        selected: hour === this.selectorValue.getHours(),
        disabled: timeComponentIsDisabled(this.minHour, this.maxHour, hour)
      }))
    },
    minutes() {
      return minutes(this.minuteStep).map(minute => ({
        number: pad(minute),
        selected: minute === this.selectorValue.getMinutes(),
        disabled: timeComponentIsDisabled(this.minMinute, this.maxMinute, minute)
      }))
    },
    seconds() {
      return minutes(this.minuteStep).map(second => ({
        number: pad(second),
        selected: second === this.selectorValue.getSeconds(),
        disabled: timeComponentIsDisabled(this.minMinute, this.maxMinute, second)
      }))
    },
    minHour() {
      return this.minTime ? parseInt(this.minTime.split(':')[0]) : null
    },
    minMinute() {
      return this.minTime && this.minHour === this.selectorValue.getHours() ? parseInt(this.minTime.split(':')[1]) : null
    },
    maxHour() {
      return this.maxTime ? parseInt(this.maxTime.split(':')[0]) : null
    },
    maxMinute() {
      return this.maxTime && this.maxHour === this.selectorValue.getHours() ? parseInt(this.maxTime.split(':')[1]) : null
    }
  }
})
export default class VsHoverTimeSelector extends mixinsWithPlugin() {
  @Model('modelValue', {type: Date, default: new Date()})
  selectorValue: Date

  @Prop({type: Boolean, default: false})
  use12Hour: boolean

  @Prop({type: Number, default: 1})
  hourStep: number

  @Prop({type: Number, default: 1})
  minuteStep: number;

  @Prop({type: String, default: null})
  minTime: string;

  @Prop({type: String, default: null})
  maxTime: string

  selectHour(hour) {
    if (hour.disabled) {
      return
    }
    const compare = this.selectorValue.getHours() < hour.number;

    const copy = new Date(this.selectorValue.valueOf());
    copy.setHours(hour.number)
    this.$emit('update:modelValue', {date: copy})
    this.$emit('change', {hour: parseInt(hour.number)})
    this.$nextTick(() => {
      this.moveToCenter(compare, 'hour')
    });
  }

  selectMinute(minute) {
    if (minute.disabled) {
      return
    }
    const compare = this.selectorValue.getMinutes() < minute.number;
    const copy = new Date(this.selectorValue.valueOf());
    copy.setMinutes(minute.number)
    this.$emit('update:modelValue', {date: copy})
    this.$emit('change', {minute: parseInt(minute.number)})
    this.$nextTick(() => {
      this.moveToCenter(compare, 'minute')
    });
  }

  selectSecond(second) {
    if (second.disabled) {
      return
    }
    const compare = this.selectorValue.getSeconds() < second.number;
    const copy = new Date(this.selectorValue.valueOf());
    copy.setSeconds(second.number)
    this.$emit('update:modelValue', {date: copy})
    this.$emit('change', {minute: parseInt(second.number)})
    this.$nextTick(() => {
      this.moveToCenter(compare, 'second')
    });
  }

  selectSuffix(suffix) {
    if (suffix === 'am') {
      if (this.selectorValue.getHours() >= 12) {
        this.$emit('change', {hour: this.selectorValue.getHours() - 12, suffixTouched: true})
      }
    }
    if (suffix === 'pm') {
      if (this.selectorValue.getHours() < 12) {
        this.$emit('change', {hour: this.selectorValue.getHours() + 12, suffixTouched: true})
      }
    }
  }

  formatHour(hour) {
    const numHour = Number(hour)
    if (this.use12Hour) {
      if (numHour === 0) {
        return 12
      }
      if (numHour > 12) {
        return numHour - 12
      }
      return numHour
    }
    return hour
  }

  moveToCenter(shrink = false, selector?) {
    const select = (select) => {
      const $refs = this.$refs as any;
      const selected = $refs[select + 'List'].querySelector('.vs-time-selector__item--selected');

      $refs[select + 'List'].scrollTop = selected ? (selected.offsetTop - ($refs[select + 'List'].getBoundingClientRect().height / 2 - (selected.getBoundingClientRect().height / 2)) - (shrink ? 11.2 : 0)) : 0
    }

    const hour = () => {
      select('hour');
    }

    const minute = () => {
      select('minute');
    }

    const second = () => {
      select('second');
    }

    setTimeout(() => {
      if (selector) {
        select(selector);
      } else {
        hour();
        minute();
        second();
      }
    }, 20)
  }

  mounted() {
    this.moveToCenter();
  }

  render(): VNode {
    const list = (type) => {
      return createVNode(HtmlTags.UL,
        {
          ref: type + 'List',
          class: ['vs-time-selector__list']
        },
        this[type + 's'].map(e => {
          return createVNode(HtmlTags.LI, {
            class: [
              'vs-time-selector__item',
              {'vs-time-selector__item--selected': e.selected},
              {'vs-time-selector__item--disabled': e.disabled}
            ],
            onClick: () => {
              this['select' + type.substring(0, 1).toUpperCase() + type.substring(1)](e);
            }
          }, type === 'hour' ? this.formatHour(e.number) : e.number)
        })
      )
    }

    const timeSelector = createVNode(HtmlTags.DIV, {
      style: {
        width: '200px'
      },
      class: [
        'vs-time-selector',
        {
          'vs-time-selector__with-suffix': this.use12Hour
        }]
    }, [
      list('hour'),
      list('minute'),
      list('second'),
    ]);
    return timeSelector;
  }
}
