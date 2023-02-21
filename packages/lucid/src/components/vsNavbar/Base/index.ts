import './style.scss'
import component from './VsNavbar'
import {withInstall} from "../../../util/vue/install";

const VsNavbar = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsNavbar.install((window as any).Vue)
}

export default VsNavbar
