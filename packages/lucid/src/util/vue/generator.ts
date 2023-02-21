import {mixins, VueMixin} from 'vue-class-component';
import VsComponent from '../../mixins/component';

// 生成mixin的component基类
export const mixinsWithPlugin = <S extends VueMixin, T = typeof VsComponent>(other?: S) => {
  const arg: VueMixin[] = [VsComponent];
  other && arg.push(other)
  const vueConstructor = mixins(...arg);
  return vueConstructor as (T & S & typeof vueConstructor)
};
