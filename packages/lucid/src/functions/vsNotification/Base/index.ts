import {createApp, nextTick} from 'vue'
import './style.scss'
import component from './VsNotification'

type NotificationParams = {
  title?: string
  text?: string
  position?: string
  color?: string
  colorName?: string
  border?: string
  icon?: string
  duration?: number | string
  onClick?: any
  onClickClose?: any
  buttonClose?: boolean
  flat?: boolean
  onDestroy?: any
  sticky?: boolean
  square?: boolean
  width?: string
  loading?: boolean
  progress?: any
  notPadding?: any
  content?: any
  clickClose?: boolean
  classNotification?: string
  progressAuto?: boolean
}

// tslint:disable-next-line:only-arrow-functions
// notificationConstructor.prototype.close = function() {
//   this.isVisible = false
// }
//
// notificationConstructor.prototype.setLoading = function(val: boolean) {
//   this.loading = val
// }
//
// notificationConstructor.prototype.changeProgress = function(val: number) {
//   if (val) {
//     this.progress = val
//   }
// }
//
// notificationConstructor.prototype.toggleClass = function(val: number) {
//   if (val) {
//     this.classNotification = val
//     this.$el.closest('.vs-notification-parent').classList.toggle(val)
//   }
// }

const notification = (params: NotificationParams = {}) => {
  // const instance = new notificationConstructor()

  const data = {} as NotificationParams;


  data.title = params.title
  data.text = params.text
  data.color = params.color
  data.colorName = params.color
  data.border = params.border
  data.icon = params.icon
  data.onClick = params.onClick
  data.onClickClose = params.onClickClose
  data.flat = params.flat
  data.onDestroy = params.onDestroy
  data.sticky = params.sticky
  data.square = params.square
  data.width = params.width
  data.loading = params.loading
  data.notPadding = params.notPadding
  data.clickClose = params.clickClose
  data.classNotification = params.classNotification
  if (params.duration !== 'none') {
    data.duration = params.duration || 4000
  }
  if (params.progress == 'auto' && params.duration !== 'none') {
    data.progressAuto = true
  } else {
    data.progress = params.progress
  }
  if (typeof params.buttonClose == 'boolean') {
    data.buttonClose = params.buttonClose
  }

  if (params.width == '100%' || window.innerWidth < 600) {
    if (params.position === 'top-left' || params.position === 'top-right') {
      params.position = 'top-center'
    } else if (params.position === 'bottom-left' || params.position === 'bottom-right' || !params.position) {
      params.position = 'bottom-center'
    }
  }

  if (typeof params.position !== 'string') {
    params.position = 'bottom-right'
  }

  const parent: HTMLElement =
  document.querySelector(`.vs-notification-parent--${params.position || 'bottom-right'}`) || document.createElement('div')

  if (!document.querySelector(`.vs-notification-parent--${params.position || 'bottom-right'}`)) {
    parent.className = 'vs-notification-parent'
    parent.classList.add(`vs-notification-parent--${params.position || 'bottom-right'}`)
  }

  if (params.classNotification) {
    parent.classList.add(params.classNotification)
  }

  const instance = createApp(component, data).mount(document.createElement('div'))

  parent.appendChild(instance.$el)

  document.body.appendChild(parent)

  nextTick(() => {
    (instance as component).show(params.content);
  })

  if (params.duration !== 'none') {
    setTimeout(() => {
      (instance as any).close()
    }, Number(params.duration) || 4000)
  }

  return instance
}

export default notification
