import './style.scss'
import component from './VsSidebarItem'
import {withInstall} from "../../../util/vue/install";

const VsSidebarItem = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsSidebarItem.install((window as any).Vue)
}

export default VsSidebarItem
