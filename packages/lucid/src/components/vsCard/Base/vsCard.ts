import { h, VNode } from 'vue'
import {splitAttrsInVue2} from '../../../util';
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Prop} from "vue-property-decorator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-card'
})
export default class VsCard extends mixinsWithPlugin() {

  @Prop({ default: '1', type: [String, Boolean] })
  type: string | number

  public render(): VNode {
    const title = h('div', {
      class: 'vs-card__title'
    }, [
      this.$slots.title && this.$slots.title()
    ])

    const text = h('div', {
      class: 'vs-card__text'
    }, [
      this.$slots.title && title,
      this.$slots.text && this.$slots.text()
    ])

    const buttons = h('div', {
      class: 'vs-card__buttons'
    }, [
      this.$slots.buttons && this.$slots.buttons()
    ])

    const interactions = h('div', {
      class: 'vs-card__interactions'
    }, [
      this.$slots.interactions && this.$slots.interactions()
    ])

    const img = h('div', {
      class: 'vs-card__img'
    }, [
      this.$slots.img && this.$slots.img(),
      this.$slots.interactions && interactions
    ])

    const card = h('div', {
      class: 'vs-card',
      // on: {
        ...splitAttrsInVue2(this.$attrs).listeners
      // }
    }, [
      this.$slots.img && img,
      // this.type != 2 ? this.$slots.title : false && title,
      this.$slots.text && text,
      this.$slots.buttons && buttons
    ])

    return h('div', {
      class: [
        'vs-card-content',
        `type-${this.type}`
      ]
    }, [
      card
    ])
  }
}
