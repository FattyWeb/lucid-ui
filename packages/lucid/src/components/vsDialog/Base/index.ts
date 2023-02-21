import './style.scss'
import component from './VsDialog'
import {withInstall} from '../../../util/vue/install';

export const VsDialog = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsDialog.install((window as any).Vue)
}
export default VsDialog
