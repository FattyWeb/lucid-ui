import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './vsDatePicker'

export const VsDatePicker = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsDatePicker.install((window as any).Vue)
}

export default VsDatePicker
