import './style.scss'
import component from './VsTableTd'
import {withInstall} from "../../../util/vue/install";

const VsTableTd = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTableTd.install((window as any).Vue)
}

export default VsTableTd
