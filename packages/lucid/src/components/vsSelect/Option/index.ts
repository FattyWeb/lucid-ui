import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './vsOption'

const VsSelectOption = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsSelectOption.install((window as any).Vue)
}
export default VsSelectOption
