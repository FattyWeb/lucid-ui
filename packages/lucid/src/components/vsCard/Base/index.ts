import './style.scss'
import component from './VsCard'
import {withInstall} from "../../../util/vue/install";

const VsCard = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsCard.install((window as any).Vue)
}

export default VsCard
