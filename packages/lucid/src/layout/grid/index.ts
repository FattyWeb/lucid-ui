import './style.scss'
import vsCol from './VsCol'
import vsRow from './VsRow'
import {withInstall} from "../../util/vue/install";

const VsCol = withInstall(vsCol)
const VsRow = withInstall(vsRow)

if (typeof window !== 'undefined' && (window as any).Vue) {
  VsCol.install((window as any).Vue)
  VsRow.install((window as any).Vue)
}

export {
  VsCol,
  VsRow
}
