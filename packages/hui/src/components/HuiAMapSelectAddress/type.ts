/**
 * 接受的 props
 */
export interface HuiAMapSelectAddressPropsType {
  /** 输入框是否禁用 */
  disabled?: boolean
  /** amp绑定的值 */
  value?: any
  /** 组件宽度 */
  width?: string
  /** 组件高度 */
  height?: string
  /** 是否展示输入框 ，一般在组件是弹窗的时候才展示输入框 */
  showInput?:boolean
  /** 标记点图标路径 */
  iconPath?:string
  /** 图标式样式 */
  iconClass?:string
}

