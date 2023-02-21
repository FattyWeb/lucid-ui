import {h, VNode} from 'vue'
import VsIconsArrow from '../../../icons/arrow'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Model, Prop, Watch} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({name: 'vs-pagination'})
export default class VsPagination extends mixinsWithPlugin() {

  @Model('modelValue', {})
  pageValue: number

  @Prop({default: false, type: Boolean})
  infinite: boolean

  @Prop({default: false, type: Boolean})
  progress: boolean

  @Prop({default: false, type: Boolean})
  notMargin: boolean

  @Prop({default: false, type: Boolean})
  buttonsDotted: boolean

  @Prop({default: false, type: Boolean})
  notArrows: boolean

  @Prop({default: false, type: Boolean})
  onlyArrows: boolean

  @Prop({default: false, type: Boolean})
  circle: boolean

  @Prop({default: false, type: Boolean})
  square: boolean

  @Prop({default: false, type: Boolean})
  disabled: boolean

  @Prop({default: (): any => [], type: Array})
  disabledItems: number[]

  @Prop({default: (): any => [], type: Array})
  loadingItems: number[]

  @Prop({default: 0, type: Number})
  length: number

  @Prop({default: 9, type: Number})
  max: number

  @Prop({default: 5, type: Number})
  dottedNumber: number

  val: number = 0

  leftActive: number = 42

  activeClassMove: boolean = false

  @Watch('length')
  handleLength() {
    this.$nextTick(() => {
      const offsetLeftPagination = (this.$refs.pagination as HTMLElement).offsetLeft
      this.leftActive = (this.$refs[`btn${this.pageValue}`] as HTMLElement).offsetLeft + offsetLeftPagination
      setTimeout(() => {
        this.activeClassMove = false
      }, 300)
    })
  }

  @Watch('modelValue')
  handleValue(val: number, prevValue: number) {
    if (this.isDisabledItem(val) || this.isLoadingItem(val)) {
      let newVal = val
      if (val > prevValue) {
        newVal += 1
      } else {
        newVal -= 1
      }

      if (newVal > this.length) {
        newVal = this.infinite ? 1 : prevValue
      } else if (newVal <= 0) {
        newVal = this.infinite ? this.length : prevValue
      }
      this.val = newVal
      this.setValuePage(newVal)
    } else {
      this.val = val
      if (this.$refs.pagination) {
        this.activeClassMove = true
        this.$nextTick(() => {
          const offsetLeftPagination = (this.$refs.pagination as HTMLElement).offsetLeft
          this.leftActive = (this.$refs[`btn${val}`] as HTMLElement).offsetLeft + offsetLeftPagination
          setTimeout(() => {
            this.activeClassMove = false
          }, 300)
        })
      }
    }
  }

  setValuePage(numberPage: number) {
    this.pageValue = numberPage;
    this.$emit('input', numberPage)
  }

  renderDotted(text: string = '...') {
    const dotted = h('div', {
      class: ['vs-pagination__dotted', {
        next: this.pageValue == this.length ? false : text == '...>'
      }],
      onClick: (evt: any) => {
        let newVal = (this.pageValue == this.length ? false : text == '...>') ?
          this.val += this.dottedNumber : this.val -= this.dottedNumber
        if (newVal > this.length) {
          newVal = this.length
        } else if (newVal < 1) {
          newVal = 1
        }
        this.setValuePage(newVal)
      }
    }, [
      h('span', {
        class: 'dotted'
      }, [`...`]),
      h('span', {
        class: 'con-arrows'
      }, [
        h(VsIconsArrow),
        h(VsIconsArrow)
      ]),
    ])

    return dotted
  }

  isDisabledItem(item: number) {
    return this.disabledItems.indexOf(item) !== -1
  }

  isLoadingItem(item: number) {
    return this.loadingItems.indexOf(item) !== -1
  }

  renderButton(NumberPage: number = 1) {
    const button = h('button', {
      ref: `btn${NumberPage}`,
      class: ['vs-pagination__button', {
        active: NumberPage == this.pageValue,
        prevActive: NumberPage == this.pageValue - 1,
        nextActive: NumberPage == this.pageValue + 1,
        disabled: this.isDisabledItem(NumberPage),
        loading: this.isLoadingItem(NumberPage)
      }],
      onClick: (evt: any) => {
        this.setValuePage(NumberPage)
      }
    }, this.buttonsDotted ? '' : `${NumberPage}`)
    return button
  }

  renderButtons(array: any) {
    const buttons: any[] = []

    array.forEach((item: any) => {
      if (item === '...>' || item === '<...') {
        buttons.push(this.renderDotted(item))
      } else {
        buttons.push(this.renderButton(item))
      }
    })

    return buttons
  }

  getButtons(start: number = 1, end: number = 6) {
    const buttons = []
    for (start > 0 ? start : 1; start <= end; start++) {
      buttons.push(start)
    }

    return buttons
  }

  get isMobile() {
    let isMobile = false
    // if (!this.$isServer) { todo
    if (window.innerWidth < 600) {
      isMobile = true
    }
    // }
    return isMobile
  }

  get getPages() {
    const length = Number(this.length)
    const max = this.isMobile ? 5 : this.max
    const even = max % 2 === 0 ? 1 : 0
    const prevRange = Math.floor(max / 2)
    const nextRange = length - prevRange + 1 + even

    if (this.pageValue >= prevRange && this.pageValue <= nextRange && !this.buttonsDotted) {
      const start = this.pageValue - prevRange + 2
      const end = this.pageValue + prevRange - 2 - even

      return this.renderButtons([1, '<...', ...this.getButtons(start, end), '...>', this.length])
    } else if (!this.buttonsDotted && this.length > 6) {
      return this.renderButtons([
        ...this.getButtons(1, prevRange),
        '...>',
        ...this.getButtons(nextRange, length)
      ])
    } else if (this.buttonsDotted || this.length <= 6) {
      return this.renderButtons([
        ...this.getButtons(1, this.length == 0 ? 1 : this.length),
      ])
    }

    return []
  }

  get getProgress() {
    let percent = 0
    percent = this.pageValue * 100 / this.length
    return percent
  }

  mounted() {
    this.val = this.pageValue
    this.handleValue(this.pageValue, (this.val += 1))
  }

  public render(): VNode {
    const active = h('div', {
      style: {
        left: `${this.leftActive}px`,
      },
      class: ['vs-pagination__active', {
        move: this.activeClassMove
      }]
    }, this.buttonsDotted ? '' : this.pageValue)

    const pagination = h('div', {
      class: 'vs-pagination',
      ref: 'pagination'
    }, [
      this.getPages
    ])

    const prev = h('button', {
      disabled: this.infinite ? false : this.val <= 1,
      class: [
        'vs-pagination__arrow',
        'prev'
      ],
      onClick: () => {
        const newVal = this.val -= 1
        if (newVal > 0) {
          this.setValuePage(newVal)
        } else if (this.infinite) {
          this.setValuePage(this.length)
        }
      }
    }, [
      this.$slots.arrowPrev ? this.$slots.arrowPrev() : h(VsIconsArrow)
    ])

    const next = h('button', {
      disabled: this.infinite ? false : this.val >= this.length,
      class: [
        'vs-pagination__arrow',
        'next',
      ],
      onClick: () => {
        const newVal = this.val += 1
        if (newVal <= this.length) {
          this.setValuePage(newVal)
        } else if (this.infinite) {
          this.setValuePage(1)
        }
      }
    }, [
      this.$slots.arrowNext ? this.$slots.arrowNext() : h(VsIconsArrow)
    ])

    const slot = h('div', {
      class: 'vs-pagination__slot',
    }, [
      this.$slots.default && this.$slots.default()
    ])

    const progress = h('div', {
      class: 'vs-pagination__progress'
    }, [
      h('div', {
        class: 'progress',
        style: {
          width: `${this.getProgress}%`
        }
      })
    ])

    return h('div', {
      style: {
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: [
        'vs-pagination-content',
        {
          buttonsDotted: this.buttonsDotted,
          circle: this.circle,
          square: this.square,
          disabled: this.disabled,
          notMargin: this.notMargin
        },

        // colors
        {[`vs-component--primary`]: !this.danger && !this.success && !this.warn && !this.dark && !this.color},
        {[`vs-component--danger`]: !!this.danger},
        {[`vs-component--warn`]: !!this.warn},
        {[`vs-component--success`]: !!this.success},
        {[`vs-component--dark`]: !!this.dark},
      ]
    }, [
      (!this.onlyArrows && !this.$slots.default) && active,
      !this.notArrows && prev,
      this.$slots.default && slot,
      (!this.onlyArrows && !this.$slots.default) && pagination,
      !this.notArrows && next,
      this.progress && progress
    ])
  }
}
