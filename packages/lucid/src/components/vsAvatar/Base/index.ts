import './style.scss'
import component from './VsAvatar'
import {withInstall} from '../../../util/vue/install';

export const VsAvatar = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsAvatar.install((window as any).Vue)
}

export default VsAvatar
