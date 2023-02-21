import './style.scss'
import component from './VsPagination'
import {withInstall} from "../../../util/vue/install";

const VsPagination = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsPagination.install((window as any).Vue)
}

export default VsPagination
