import { h, VNode } from 'vue'
import { Options} from 'vue-class-component';
import { setColor } from '../../../util'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop, Watch} from "vue-property-decorator";

@Options({
  name: 'vs-avatar'
})
export default class VsAvatar extends mixinsWithPlugin() {

  @Prop({ default: null })
  badgePosition: string

  @Prop({ default: false, type: Boolean })
  pointer: boolean

  @Prop({ default: false, type: Boolean })
  circle: boolean

  @Prop({ default: false, type: Boolean })
  square: boolean

  @Prop({ default: false, type: Boolean })
  history: boolean

  @Prop({ default: false, type: Boolean })
  loading: boolean

  @Prop({ default: false, type: Boolean })
  historyGradient: boolean

  @Prop({ default: false, type: Boolean })
  writing: boolean

  @Prop({ default: false, type: Boolean })
  badge: boolean

  @Prop({ default: '', type: String })
  badgeColor: string

  @Prop({ default: '', type: String })
  size: string

  textLength: number = 0

  countPlus: number = 0

  index: number = null

  getParent() {
    return (this.$parent as any).vsAvatarGroup && (this.$parent as any)
  }

  get getText() {
    const [nodeText] = (this.$slots.text() as any)
    const text = nodeText.children.trim()
    let getLetters = [text]
    if (text.length > 5) {
      getLetters = text.split(/\s/g).map((item) => {
        return item[0]
      })
      this.textLength = getLetters.length
    } else {
      this.textLength = getLetters[0].length
    }

    return getLetters
  }

  get isHidden() {
    return this.getParent() && this.getParent().max && this.index > Number(this.getParent().max) - 1
  }

  get isLatest() {
    return this.getParent() && this.index == Number(this.getParent().max) - 1
  }

  @Watch('badgeColor')
  handleBadgeColor() {
    setColor('badge', this.badgeColor , this.$el)
    this.$el.classList.add('vs-change-color-badge')
  }

  mounted() {
    setColor('badge', this.badgeColor , this.$el)
    this.$el.classList.add('vs-change-color-badge')
    if (this.getParent()) {
      this.index = this.getParent().avatars.length
      this.getParent().avatars.push(this)
    }
  }

  public render(): VNode {
    const writing = h('div', {
      class: 'vs-avatar__points'
    }, [
      h('div', {
        class: 'vs-avatar__points__point'
      }),
      h('div', {
        class: 'vs-avatar__points__point'
      }),
      h('div', {
        class: 'vs-avatar__points__point'
      })
    ])

    const badge = h('div', {
      // class: 'vs-avatar__badge',
      class: ['vs-avatar__badge', {
        isSlot: this.$slots.badge,
        writing: this.writing
      }, this.badgePosition]
    }, [
      this.writing ? writing : (this.$slots.badge && this.$slots.badge())
    ])

    const avatar = h('div', {
      class: {
          [`vs-avatar--letter--${this.textLength}`]: this.textLength > 2,
        'vs-avatar': true,
      }
    }, [
      this.$slots.text && this.getText,
      this.$slots.default && this.$slots.default()
    ])

    const loading = h('div', {
      class: 'vs-avatar__loading',
    }, [
      h('div', {
        class: 'vs-avatar__loading__animate'
      })
    ])

    const latest = h('div', {
      class: 'vs-avatar__latest',
      style:{
        display: (this.getParent() && this.getParent().avatars.length - this.index - 1 != 0) ? '': 'none'
      }
      // directives: [
      //   {
      //     name: 'show',
      //     value: this.getParent() && this.getParent().avatars.length - this.index - 1 != 0
      //   }
      // ]
    }, [
      `+${this.getParent() && this.getParent().avatars.length - this.index - 1}`
    ])

    const icons = h('div', {
      class: 'vs-avatar__icons',
    }, [
      this.$slots.icons && this.$slots.icons()
    ])

    return h('div', {
      ...this.$attrs,
      style: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        cursor: this.pointer && 'pointer',
        ['--vs-color']: this.color ? this.getColor : ''
      },
      class: ['vs-avatar-content', {
        'history': this.history,
        'history--gradient': this.historyGradient,
        'vs-avatar-content--circle': this.circle,
        'vs-avatar-content--square': this.square,
        'vs-avatar-content--hidden': this.isHidden,
        'vs-avatar-content--latest': this.isLatest,
        'vs-avatar-content--hasIcons': this.$slots.icons,
        [`vs-avatar-content--size`]: this.size,
      },
      // colors
      { [`vs-component--primary`] : !!this.primary },
      { [`vs-component--danger`] : !!this.danger },
      { [`vs-component--warn`] : !!this.warn },
      { [`vs-component--success`] : !!this.success },
      { [`vs-component--dark`] : !!this.dark },
      { [`vs-component--is-color`] : !!this.isColor },
    ]
    }, [
      this.loading && loading,
      avatar,
      this.$slots.badge ? badge : this.badge && badge,
      this.isLatest && latest,
      this.$slots.icons && icons
    ])
  }
}
