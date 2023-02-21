import './style.scss'
import component from './VsTableTh'
import {withInstall} from "../../../util/vue/install";

const VsTableTh = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTableTh.install((window as any).Vue)
}

export default VsTableTh
