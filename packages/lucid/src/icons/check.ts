import { h, VNode} from 'vue'
import { prop, Vue } from 'vue-class-component'
import './icons.scss'

class Props {
  indeterminate = prop<boolean>({ default: false });
}
export default class VsIconClose extends Vue.with(Props) {

  render(): VNode {
    const icon = h('i', {
      // on: {
      //   ...splitAttrsInVue2(this.$attrs).listeners
      // },
      class: [
        'vs-icon-check',
        {
          indeterminate: this.indeterminate
        }
      ]
    }, [
      h('span', {} , [
        h('div', {
          class: 'line1'
        }),
        h('div', {
          class: 'line2'
        })
      ])
    ])

    return icon
  }
}
