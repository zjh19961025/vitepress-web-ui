/**
 * HuiLineEditPopover 需要的props参数
 */
export interface HuiLineEditPopoverPropsType {
  /** 修改的字段名 */
  field: string
  /** popover 宽度 */
  width: number
  /** 列表中显示内容的样式 */
  baseClass: string
  /** 禁用 */
  disabled: boolean,
  /** 输入规则, input 类有效 */
  rules?: any,
}

/**
 * HuiLineEditPopover emit事件
 */
export type HuiLineEditPopoverEmitType = {
  confirm: [row: {[key: string]: string}]
}
