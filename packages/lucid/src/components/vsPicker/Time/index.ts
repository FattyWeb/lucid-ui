import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './vsTimePicker'

export const VsTimePicker = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsTimePicker.install((window as any).Vue)
}

export default VsTimePicker
