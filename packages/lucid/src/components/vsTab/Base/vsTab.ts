import {Options} from 'vue-class-component';
import {h as createVNode, TransitionGroup, VNode} from "vue";
import {HtmlTags} from "../../../constants/HtmlTags";
import {mixinsWithPlugin} from "../../../util/vue/generator";
import {Model} from "vue-property-decorator";

@Options({
  name: 'vs-tab'
})
export default class VsTab extends mixinsWithPlugin() {
  @Model('modelValue',{type: [String], required: true, default: null})
  activePanel: string | null;

  activeIndex: number = 0;

  left: boolean = true;

  mounted() {
    this.moveCursor();
  }

  moveCursor() {
    if (this.activePanel) {
      // 内层导航
      const selector = this.$refs.selector as HTMLElement;
      // 获取激活后的
      const activeItemNewAnim = this.$refs[this.activePanel!] as HTMLElement;

      if (activeItemNewAnim) {
        // 垂直居中
        selector.style.top = activeItemNewAnim.offsetTop + 5 + "px";
        selector.style.left = activeItemNewAnim.offsetLeft + "px";
        // 垂直居中 因为选中元素的宽高为顶满父级元素
        selector.style.height = activeItemNewAnim.clientHeight - 10 + "px";
        selector.style.width = activeItemNewAnim.clientWidth + "px";
      }
    }
  }

  choose(active, i) {
    if (this.activePanel === active) {
      return;
    }
    this.activePanel = active;
    // 判断方向
    this.left = this.activeIndex >= i
    this.activeIndex = i
    this.$emit('tabSelected', active)
    this.$nextTick(this.moveCursor);
  }

  render(): VNode {
    // 初始化当前激活panel的index
    if (this.activePanel){
      this.$slots.default().find((e, i) => {
        const equal = e.props.name === this.activePanel;
        if (equal){
          this.activeIndex = i;
        }
        return equal
      });
    }

    const header = createVNode(HtmlTags.DIV, {
        class: ['vs-tabs__header']
      },
      createVNode(HtmlTags.DIV, {
          class: ['vs-tabs__header-wrap']
        },
        createVNode(HtmlTags.UL, {
            class: ['vs-tabs__items']
          },
          this.$slots.default && [
            createVNode(HtmlTags.LI, {
              ref: 'selector',
              class: ['vs-tabs__selector']
            }),
            ...this.$slots.default().map((e, i) => createVNode(HtmlTags.LI, {
              class: ['vs-tabs__item', {
                'vs-tabs__item--active': this.activePanel === (e as any).props.name
              }],
              ref: (e as any).props.name,
              onClick: () => {
                this.choose((e as any).props.name, i)
              }
            }, (e as any).props.label))]
        )
      )
    );

    const content = createVNode(HtmlTags.DIV, {class: ['vs-tabs__content']},
      createVNode(TransitionGroup, {
          name: this.left ? 'switch' : 'switch-reverse'
        },
        {
          default: () =>
            this.$slots.default && this.$slots.default()
              .filter(e => (e as any).props.name === this.activePanel)
              .map((e) => createVNode(HtmlTags.DIV, {
                key: (e as any).props.name,
                class: 'vs-tabs__content-item'
              }, e))
        }
      )
    );

    return createVNode(HtmlTags.DIV, {class: 'vs-tabs',style:{...this.resolveThemeVars()}}, [header, content])
  }
}
