import { h, VNode } from 'vue'
import VsIconsArrow from '../../../icons/arrow'
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Options} from "vue-class-component";

@Options({
  name: 'vs-card-group'
})
export default class VsCardGroup extends mixinsWithPlugin() {
  public render(): VNode {
    const arrowPrev = h('button', {
      class: 'vs-card__group-prev',
        onClick: (evt: any) => {
          const cards: any = this.$refs.cards
          cards.scrollTo(cards.scrollLeft - cards.clientWidth, 0)
        }
    }, [
      h(VsIconsArrow)
    ])

    const arrowNext = h('button', {
      class: 'vs-card__group-next',
      // on: {
        onClick: (evt: any) => {
          console.log('paso')
          const cards: any = this.$refs.cards
          console.dir(cards)
          cards.scrollTo(cards.scrollLeft + cards.clientWidth, 0)
        }
      // }
    }, [
      h(VsIconsArrow)
    ])

    const space = h('div', {
      class: 'vs-card__group-space',
    })

    const cards = h('div', {
      class: 'vs-card__group-cards',
      ref: 'cards'
    }, [
      this.$slots.default && this.$slots.default(),
      space
    ])

    return h('div', {
      class: 'vs-card__group',
    }, [
      arrowPrev,
      cards,
      arrowNext
    ])
  }
}
