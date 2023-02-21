import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './VsAlert'

export const VsAlert = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsAlert.install((window as any).Vue)
}
export default VsAlert
