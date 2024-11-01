/**
 * 接收的 props
 */
export interface HuiAMapMassMarkersPropsType {
  /** 绑定的值 */
  value?: IPointItem
  /** 组件宽度 */
  width?: string
  /** 组件高度 */
  height?: string
  /**  */
  showLabel?: boolean
  /** 文本相对于图标的方向 'top' 'right' 'bottom' 'left' 'center'
   */
  direction?: string
  /** 文本样式的配置对象 */
  textStyle?: IPointTextStyle
  /** 图标类型 */
  iconType?: string
  /** 标记点图标路径 */
  iconPath?:string
  /** 图标式样式 */
  iconSize?: [number, number],
  /** 描点位置 */
  anchor?: string
}

export interface IPointItem {
  /** 位置名称 */
  name?: string;
  /** 经纬度 */
  position: [number, number]
  /** 标记图标 */
  iconPath?: string;
}

export interface IPointTextStyle {
  /** 字体大小，单位为像素 */
  fontSize?:number | string,
  /** 文本颜色，例如 '#000000' */
  fillColor?:string,
  /** 文本描边颜色 */
  strokeColor?:string,
  /** 文本描边宽度 */
  strokeWidth?:string,
  /** 文本背景颜色 */
  backgroundColor?:string,
  /** 文本的内边距，格式为 [top, right, bottom, left] */
  padding?: [number, number, number, number],
  /** 文本背景的圆角半径 */
  borderRadius?:number,
  /** 文本背景的边框宽度 */
  borderWidth?:string,
  /** 文本背景的边框颜色 */
  borderColor?:string,
}

