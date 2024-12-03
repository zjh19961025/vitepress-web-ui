/**
 * 接受的 props
 */
export interface HuiCountDownButtonPropsType {
    /** 按钮提示文本 */
    title: string;
    /** 基础样式 */
    baseClass: string;
    /** 倒计时时间 */
    timeCount: number | string;
    /** 倒计时未开始时的样式 */
    enableClass: string;
    /** 倒计时开始后的样式 */
    disableClass: string;
    /** 显示的类型 */
    type: 'text' | 'button';
}
export type HuiCountDownButtonEmitType = {
    "click": [callback: (isStart?: boolean) => void];
};
