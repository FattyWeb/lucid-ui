import component from './VsTabPanel'
import {withInstall} from '../../../util/vue/install';

export const VsTabPanel = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTabPanel.install((window as any).Vue)
}

export default VsTabPanel
