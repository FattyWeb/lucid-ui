import { h as createVNode } from 'vue';
import { Options } from 'vue-class-component';
import { mixinsWithPlugin } from "../../../util/vue/generator";
import { HtmlTags } from "../../../constants/HtmlTags";
import { Prop } from "vue-property-decorator";
import leftIcon from './left.svg';
import rightIcon from './right.svg';
import { vsButton } from "../../index";
import { DayInWeek } from "./model";

const now = new Date();

@Options({
  name: 'vs-hover-calendar',
  computed: {
    generateCalendar() {
      const month = this.current.month,
        year = this.current.year,
        daysOfMonth = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        // 本月第一天
        firstDay = new Date(year, month, 1),
        days: DayInWeek[] = [];
      for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        const day: DayInWeek = {key: `${year}-${month}-${i}`};
        // 如果当天所在的日期大于起始日期
        if (i >= firstDay.getDay()) {
          day.hover = true;
          day.number = i - firstDay.getDay() + 1;
          // 判断是否是当天
          day.isCurrent = i - firstDay.getDay() + 1 === now.getDate()
            && year === now.getFullYear() && month === now.getMonth();

          // 此处将原始时间格式做一个缓存
          day.isDisable = this.disabledDate ? this.disabledDate(day.rawDate = new Date(year, month, day.number)) : false

          /// #range功能
          // if (this.range){
          //   day.isClick = this.range === 'main' && this.click.month === month && this.click.year === year && day.number === this.click.day;
          //   const limitHover = new Date(this.hover.year, this.hover.month, this.hover.day);
          //   const limitClick = new Date(this.click.year, this.click.month, this.click.day);
          //   const thisDate = new Date(year, month, day.number);
          //   day.forceHover = (!day.isClick) && (this.click.year) && this.range &&
          //     ((thisDate >= limitClick && thisDate <= limitHover) || (thisDate <= limitClick && thisDate >= limitHover))
          // }
          // 判断是否是被选中
          day.isChoose = (!day.isClick) && (this.date != null && this.date.getFullYear() === year
            && this.date.getMonth() === month && this.date.getDate() === day.number)
        }
        days.push(day);
      }
      return days;
    }
  }
})
export default class VsHoverCalendar extends mixinsWithPlugin() {

  @Prop({type: Date})
  date!: Date

  @Prop({type: Function})
  disabledDate: (time: Date) => boolean

  /// #range功能
  // @Prop({default: null})
  // range: string
  /// #range功能
  // @Prop({default: null})
  // clickDate: object

  monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  lightMode = true;

  showMonth = false;

  current = {
    /// #range功能
    month: /*this!.clickDate ? (this!.clickDate as any).month + 1: */(this.date || now).getMonth(),
    year: (this.date || now).getFullYear(),
  }

  /// #range功能
  // click = {
  //   day: null,
  //   month: null,
  //   year: null,
  // }
  //
  // hover = {
  //   day: null,
  //   month: null,
  //   year: null,
  // }

  /**
   * 判断是否是闰年
   *
   * @param year 年份
   */
  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
  }

  /**
   * 获取某年二月份有多少天
   *
   * @param year 年份
   */
  getFebDays(year) {
    return this.isLeapYear(year) ? 29 : 28;
  }

  selectMonth(month) {
    this.showMonth = false;
    this.current.month = month;
  }

  /// #range功能
  // changeHover(hover){
  //   Object.assign(this.hover, hover)
  // }

  created() {
    /// #range功能
    // Object.assign(this.click, this.clickDate)
  }

  render() {
    const header = createVNode(HtmlTags.HEADER, {
      class: 'vs-calendar__header'
    }, [
      createVNode(HtmlTags.DIV, {
          class: 'vs-calendar__year-picker'
        }, [
          createVNode(
            HtmlTags.SPAN,
            {
              style: {
                'margin-left': 0
              },
              class: 'vs-calendar__year-change',
              onClick: () => {
                --this.current.year;
              }
            },
            createVNode(
              'img',
              {
                src: leftIcon,
                class: ['vs-calendar__year-change--left'],
                style: {
                  height: '20px'
                }
              }
            )
          ),
          createVNode(
            HtmlTags.SPAN,
            {},
            this.current.year
          ),
          createVNode(
            HtmlTags.SPAN,
            {
              class: 'vs-calendar__year-change',
              onClick: () => {
                ++this.current.year;
              }
            },
            createVNode(
              'img',
              {
                src: rightIcon,
                class: ['vs-calendar__year-change--right'],
                style: {
                  height: '20px'
                }
              }
            )
          ),
        ]
      ),
      createVNode(HtmlTags.SPAN,
        {
          class: 'vs-calendar__month-picker',
          onClick: () => {
            this.showMonth = true
          }
        },
        this.monthNames[this.current.month]
      )
    ]);

    const main = createVNode(
      HtmlTags.MAIN, {
        class: 'vs-calendar__body'
      },
      [
        createVNode(
          HtmlTags.DIV,
          {class: 'vs-calendar__week-day'},
          ['周日', '周一', '周二', '周三', '周四', '周五', '周六'].map((e) => {
            return createVNode(HtmlTags.DIV, {}, e)
          })
        ),
        createVNode(
          HtmlTags.DIV,
          {class: 'vs-calendar__days'},
          (this as unknown as { generateCalendar: DayInWeek[] }).generateCalendar.map(
            (e) => {
              return createVNode(
                HtmlTags.DIV,
                {
                  key: e.key,
                  style: {
                    'animation-delay': `${(e.number ?? 0) * 8}ms`
                  },
                  class: [
                    {'vs-calendar__days--choose': (!e.isCurrent) && e.isChoose},
                    {'vs-calendar__days--current': e.isCurrent},
                    {'vs-calendar__days--empty': !e.hover},
                    {'vs-calendar__days--disable': e.isDisable},
                    {'vs-calendar__days--click': e.isClick},
                    {'vs-calendar__days--force-hover': e.forceHover},
                  ],
                  /// #range功能
                  // onMouseenter: (env) => {
                  //   if (!this.range) {
                  //     return;
                  //   }
                  //   this.hover.day = e.number;
                  //   this.hover.month = this.current.month;
                  //   this.hover.year = this.current.year;
                  //   this.$forceUpdate()
                  //
                  //   if(this.range && this.range !== 'main'){
                  //     this.$emit('notify', this.hover);
                  //   }
                  // },
                  onClick: () => {
                    if (!e.hover || e.isDisable) {
                      return;
                    }
                    /// #range功能
                    // if (this.range) {
                    //   this.click.day = e.number;
                    //   this.click.month = this.current.month;
                    //   this.click.year = this.current.year;
                    // }
                    this.$emit('chooseDate', {
                      date: e.rawDate || new Date(this.current.year, this.current.month, e.number),
                      /// #range功能
                      /*splitDate:{
                        year: this.current.year,
                        month: this.current.month,
                        day: e.number
                      }*/})
                  }
                },
                createVNode(HtmlTags.SPAN, {}, e.number)
              )
            }
          )
        )
      ]
    );

    const footer = createVNode(
      HtmlTags.FOOTER,
      {
        class: 'vs-calendar__footer',
        onClick:()=>{
          Object.assign(this.current, {
            month: now.getMonth(),
            year: now.getFullYear(),
          })
        }
      },
      [createVNode(vsButton,{flat: true},'返回今天')]
    );

    const monthList = createVNode(HtmlTags.DIV,
      {class: ['vs-calendar__month-list', {'vs-calendar__month-list--show': this.showMonth}]},
      this.monthNames.map((e, i) => {
        return createVNode(HtmlTags.DIV, {
          onClick: () => {
            this.selectMonth(i);
          }
        }, e)
      })
    );

    const calendar = createVNode(HtmlTags.DIV, {
      class: 'vs-calendar',
      ref: 'calendar',
      /// #range功能
      // onMouseleave: (env) => {
      //   if (this.range === 'main' && this.click.year){
      //     //  未加上下位置判断
      //     this.$emit('leave', {position:env.clientX < env.currentTarget.getBoundingClientRect().x ? 'left' : 'right', clickDate: this.click})
      //   }
      // }
    }, [header, main, footer, monthList]);
    return calendar;
  }
}
