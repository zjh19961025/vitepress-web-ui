import { msgTool } from "./msg-tool"
import { addUnit, addStyle } from "./style-helper"
export * from "./style-helper"
export const HuiTool = {
  addUnit,
  addStyle,
  ...msgTool,
}
