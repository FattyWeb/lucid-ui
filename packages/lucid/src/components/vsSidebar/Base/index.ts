import './style.scss'
import component from './VsSidebar'
import {withInstall} from "../../../util/vue/install";

const VsSidebar = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsSidebar.install((window as any).Vue)
}

export default VsSidebar
