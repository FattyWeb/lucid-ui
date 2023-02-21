import './style.scss'
import component from './VsButtonGroup'
import {withInstall} from '../../../util/vue/install';

export const VsButtonGroup = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsButtonGroup.install((window as any).Vue)
}

export default VsButtonGroup
