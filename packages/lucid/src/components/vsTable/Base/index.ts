import './style.scss'
import component from './VsTable'
import {withInstall} from "../../../util/vue/install";

const VsTable = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  component.install((window as any).Vue)
}

export default VsTable
