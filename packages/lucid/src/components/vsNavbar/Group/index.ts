import './style.scss'
import component from './VsNavbarGroup'
import {withInstall} from "../../../util/vue/install";

const VsNavbarGroup = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsNavbarGroup.install((window as any).Vue)
}

export default VsNavbarGroup
