import component from './VsSwitch'
import {withInstall} from '../../../util/vue/install';
import './style.scss'

export const VsSwitch = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsSwitch.install((window as any).Vue)
}

export default VsSwitch
