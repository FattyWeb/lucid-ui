import {createApp, nextTick} from 'vue'
import './style.scss'
import component from './VsMessage'

type MessageParam = {
  message:string,
  type:string,
  duration?: number | string
}

const message = (params: MessageParam) => {

  const data = {} as any;
  data.message = params.message
  data.color = params.type
  if (params.duration !== 'none') {
    data.duration = params.duration || 4000
  }

  const parent: HTMLElement =
  document.querySelector(`.vs-message-parent`) || document.createElement('div')

  if (!document.querySelector(`.vs-message-parent`)) {
    parent.className = 'vs-message-parent'
    parent.classList.add('vs-message-parent')
  }

  const instance = createApp(component, data)
    .mount(document.createElement('div'))

  parent.appendChild(instance.$el)

  if (!document.querySelector(`.vs-message-parent`)) {
    document.body.appendChild(parent)
  }

  nextTick(() => {
    (instance as component).show();
  })

  if (params.duration !== 'none') {
    setTimeout(() => {
      (instance as component).close()
    }, Number(params.duration) + 500 || 4000)
  }
}

export default message
