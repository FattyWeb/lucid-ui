import {withInstall} from '../../../util/vue/install';
import './style.scss'
import component from './vsOptionGroup'

const VsOptionGroup = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsOptionGroup.install((window as any).Vue)
}
export default VsOptionGroup
