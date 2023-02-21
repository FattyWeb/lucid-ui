import './style.scss'
import component from './VsAvatarGroup'
import {withInstall} from '../../../util/vue/install';

export const VsAvatarGroup = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsAvatarGroup.install((window as any).Vue)
}
export default VsAvatarGroup
