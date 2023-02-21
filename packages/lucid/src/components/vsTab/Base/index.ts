import component from './vsTab'
import {withInstall} from '../../../util/vue/install';
import './style.scss'

export const VsTab = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTab.install((window as any).Vue)
}

export default VsTab
