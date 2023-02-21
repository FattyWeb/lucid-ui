import './style.scss'
import {withInstall} from '../../../util/vue/install';
import component from './VsCheckbox'

export const VsCheckbox = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsCheckbox.install((window as any).Vue)
}

export default VsCheckbox

