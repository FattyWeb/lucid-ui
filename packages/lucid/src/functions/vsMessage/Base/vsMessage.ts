import {mixinsWithPlugin} from "../../../util/vue/generator";
import {h as createVNode, VNode, Transition, h} from "vue";
import {HtmlTags} from "../../../constants/HtmlTags";
import {Prop} from "vue-property-decorator";
import success from './success.svg';
import error from './error.svg';
import info from './info.svg';
import warning from './warning.svg';


export default class VsMessage extends mixinsWithPlugin() {

  @Prop({type: String})
  message: string

  isVisible: boolean = false

  show(){
    this.isVisible = true
  }

  close() {
    this.isVisible = false
  }

  leave(el: any, done: any) {
    const parent = this.$el.parentNode
    setTimeout(() => {
      done()
      if (parent.childNodes.length == 1) {
        document.body.removeChild(parent)
      }
      parent.removeChild(this.$el)
      // todo
      // this.$destroy()
    }, 350)
  }

  render(): VNode | void {
    let svg = info;
    switch (this.color) {
      case 'success':
        svg = success;
        break;
      case 'danger':
        svg = error;
        break;
      case 'warn':
        svg = warning;
        break;
      default:
        break;
    }

    const message = createVNode(HtmlTags.DIV, {
      class:[
        'vs-message',
      ]
      }, [
        createVNode(HtmlTags.DIV, {
          style: {
            ['--vs-color']: this.color ? this.getColor : ''
          },
          class:[
            'vs-message__icon-box',
          ]
        }, createVNode(HtmlTags.IMG, {src: svg})),
        createVNode(HtmlTags.DIV, {
          class:[
            'vs-message__wrap',
          ]
        }, this.message),
      ]
    );



    return h(Transition, {
      name: 'message',
        onLeave: this.leave
      // },
    }, /*{default: ()=>[ this.isVisible && message]
    }*/
      {default: ()=>[ this.isVisible && message]}
      )
  }
}
