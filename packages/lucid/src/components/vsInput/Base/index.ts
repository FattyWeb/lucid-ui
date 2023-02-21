import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './VsInput'

export const VsInput = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsInput.install((window as any).Vue)
}
export default VsInput
