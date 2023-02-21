import './style.scss';
import component from './VsNavbarItem';
import {withInstall} from "../../../util/vue/install";

const VsNavbarItem = withInstall(component);

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsNavbarItem.install((window as any).Vue);
}

export default VsNavbarItem;
