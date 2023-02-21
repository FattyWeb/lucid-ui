import './style.scss'
import component from './VsRadio'
import {withInstall} from '../../../util/vue/install';

const VsRadio = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsRadio.install((window as any).Vue)
}

export default VsRadio
