import './style.scss'
import component from './VsTooltip'
import {withInstall} from '../../../util/vue/install';

const VsTooltip = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTooltip.install((window as any).Vue)
}
export default VsTooltip
