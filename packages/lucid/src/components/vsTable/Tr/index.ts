import './style.scss'
import component from './VsTableTr'
import {withInstall} from "../../../util/vue/install";

const VsTableTr = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTableTr.install((window as any).Vue)
}

export default VsTableTr
