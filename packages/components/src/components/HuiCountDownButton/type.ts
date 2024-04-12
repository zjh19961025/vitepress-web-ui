/**
 * 接受的 props
 */
export interface HuiCountDownButtonPropsType {
  /** 按钮提示文本 */
  title: string
  /** 倒计时时间 */
  timeCount: number | string
  /** 倒计时未开始时的样式 */
  enableClass: string
  /** 倒计时开始后的样式 */
  disableClass: string
}
