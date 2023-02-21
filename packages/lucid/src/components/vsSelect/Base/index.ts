import component from './VsSelect'
import {withInstall} from '../../../util/vue/install';
import './style.scss'

export const VsSelect = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsSelect.install((window as any).Vue)
}

export default VsSelect
