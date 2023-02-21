import './style.scss'
import component from './VsCardGroup'
import {withInstall} from "../../../util/vue/install";

const VsCardGroup = withInstall(component)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsCardGroup.install((window as any).Vue)
}

export default VsCardGroup
