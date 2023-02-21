import './style.scss'
import component from './VsButton'
import {withInstall} from '../../../util/vue/install';

export const VsButton = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsButton.install((window as any).Vue)
}
export default VsButton

