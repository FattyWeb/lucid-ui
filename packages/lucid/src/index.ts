import * as vsComponents from './components/index'
import defineLucidFunctions from './functions/defineLucidFunctions'
import * as vsLayouts from './layout/index'
import './styles/lucid.scss'
import { defineLucidOptions, LucidOptions } from './util/defineLucidOptions'

const install = (app: any, options?: LucidOptions) => {
  // 组件
  Object.values(vsComponents).forEach((vsComponent) => {
    app.use(vsComponent);
  })

  // 布局
  Object.values(vsLayouts).forEach((vsLayout) => {
    app.use(vsLayout);
  })

  if (options) {
    defineLucidOptions(options);
  }

  defineLucidFunctions(app);
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}


export * from './components/index';
export default install;
