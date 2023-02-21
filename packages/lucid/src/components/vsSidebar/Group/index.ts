import './style.scss'
import component from './vsSidebarGroup'
import {withInstall} from "../../../util/vue/install";

const vsSidebarGroup = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  vsSidebarGroup.install((window as any).Vue)
}

export default vsSidebarGroup
