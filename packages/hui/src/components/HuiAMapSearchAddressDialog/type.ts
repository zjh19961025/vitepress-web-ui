import type { HuiAMapSearchAddressPropsType } from '../HuiAMapSearchAddress/type'

/**
 * HuiAMapSelectAddressDialogPropsType 需要的props参数
 */
export type HuiAMapSearchAddressDialogPropsType = HuiAMapSearchAddressPropsType & {
  /** 弹窗宽度 */
  width?:string,
  /** 弹窗标题 */
  title?:string
}

/**
 * HuiAMapSelectAddressDialog emit事件
 */
export type HuiTinymceDialogEmitType = {
  onSubmit: [poi: any]
}
