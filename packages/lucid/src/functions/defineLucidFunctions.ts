import { setColor } from '../util'
import { setTheme, toggleTheme } from './toggleTheme'
import loading from './vsLoading/Base/index'
import message from './vsMessage/Base/index'
import notification from './vsNotification/Base/index'
import { checkAll, getLength, getPage, getSearch, sortData } from './vsTable'

export default (app: any) => {
  const vsFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body)
    },
    loading,
    toggleTheme,
    setTheme,
    notification,
    message,
    getPage,
    getLength,
    checkAll,
    getSearch,
    sortData
  }

  app.config.globalProperties.$vs = vsFunctions
}
