import type { HuiDelegate } from "zjh-web-ui"
import { getRegionTree } from "./common"

export const testPermission = {
  addUserCode: true,
  editUserCode: true,
}

export const huiDelegate: HuiDelegate = {
  getRegionTree,
  amapConfig: {
    key: '4810b098b74c2f84de4d6f2da544d884',
      securityJsCode: 'fa66a05abc2f5a4bf73382829d9bf6c4',
  },
  getBtnPermission: () => {
    return testPermission
  },
}
