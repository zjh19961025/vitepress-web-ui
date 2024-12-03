import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
export interface HuiMsgBoxProp {
    /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
    iconType: 'info' | 'success' | 'question';
    /** 控制图标展示的颜色 */
    type: 'info' | 'warning' | 'success' | 'danger';
    /** 弹窗显示的内容 */
    content: string;
    /** 取消按钮的文本 */
    cancelText: string;
    /** 确定按钮的文本 */
    confirmText: string;
    /** 弹窗宽度 */
    width: number;
    /** 弹窗样式类名 */
    className: string;
    /** 关闭事件 */
    closeBox: () => void;
    /** 确定事件事件 */
    confirmHandler: () => void;
    /** 取消事件 */
    cancelHandler: () => void;
}
declare const _default: DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<HuiMsgBoxProp>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<HuiMsgBoxProp>>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
