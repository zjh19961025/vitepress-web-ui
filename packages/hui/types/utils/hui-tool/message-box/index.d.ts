export interface PayLoadType {
    /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
    iconType?: 'info' | 'success' | 'question';
    /** 控制图标展示的颜色 */
    type?: "info" | "success" | "danger" | "warning";
    /** 取消按钮的文本 */
    cancelText?: string;
    /** 确定按钮的文本 */
    confirmText?: string;
    /** 弹窗宽度 */
    width?: number;
}
export declare const hua5MsgBox: (content: string, payLoad?: PayLoadType) => Promise<unknown>;
export declare const msgBox: (content: string, payLoad?: PayLoadType) => Promise<any>;
