import { createApp, nextTick } from 'vue'
import './style.scss'
import component from './VsLoading'

type LoadingParams = {
  type?: string
  text?: string
  hidden?: boolean,
  color?: string,
  background?: string
  opacity?: string
  percent?: string
  progress?: string
  target?: any
  scale?: string
}

// const loadingApp = createApp(component).mount(null)
// Vue.createApp(component).mount('#mount-point')

// tslint:disable-next-line:only-arrow-functions

const loading = (params: LoadingParams = {}) => {
  const data = {} as LoadingParams
  if (typeof params.target === 'string' ) {
    params.target = document.querySelector(params.target)
    data.target = params.target
  } else if (params.target) {
    params.target = params.target.$el || params.target
    data.target = params.target
  } else {
    params.target = document.body
  }

  data.text = params.text
  data.color = params.color
  data.background = params.background
  data.opacity = params.opacity
  data.percent = params.percent
  data.type = params.type
  data.progress = params.progress
  data.scale = params.scale

  // 挂载加载组件并拿到真实dom
  const instance = createApp(component, data).mount(document.createElement('div'))
  params.target.appendChild(instance.$el)
  document.body.style.overflowY = params.hidden && 'hidden'
  nextTick(() => {
    (instance as component).show();
  })

  return instance
}

export default loading
