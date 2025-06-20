/**
 * HuiTip 组件的属性
 */
export type HuiTipProp = {
  rclass?:string,
  content?: string,
  placement?:'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end',
  effect:'dark' | 'light',
  iconClass?:string,
  contentClass?:string,
  tipAttr?:{
    [key:string]:any
  }
}
