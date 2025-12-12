import type { HuiDelegate } from "zjh-web-ui"
import { getRegionTree } from "./common"

export const testPermission = {
  addUserCode: true,
  editUserCode: true,
}

export const huiDelegate: HuiDelegate = {
  getRegionTree,
  amapConfig: {
    key: '0510ba1445c11816c9d45d45c10c23fe',
    serviceHost: 'http://192.168.31.5/_AMapService',
  },
  getBtnPermission: () => {
    return testPermission
  },
}
