import { HuiLineEditDialogPropsType, HuiLineEditDialogComboItem } from './type';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare const _default: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiLineEditDialogPropsType>, {
    isNeedDoubleConfirm: boolean;
    doubleConfirmTips: string;
    title: string;
    label: string;
    type: string;
    selectDic: () => any[];
    isSelectMuti: boolean;
    labelWidth: string;
    attr: () => {};
    formAttr: () => {};
    permission: () => {};
}>>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (row: any, prop: string) => void;
    onValueChange: (form: any, row?: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiLineEditDialogPropsType>, {
    isNeedDoubleConfirm: boolean;
    doubleConfirmTips: string;
    title: string;
    label: string;
    type: string;
    selectDic: () => any[];
    isSelectMuti: boolean;
    labelWidth: string;
    attr: () => {};
    formAttr: () => {};
    permission: () => {};
}>>> & Readonly<{
    onOnSubmit?: (row: any, prop: string) => any;
    onOnValueChange?: (form: any, row?: any) => any;
}>, {
    label: string;
    title: string;
    type: string;
    isNeedDoubleConfirm: boolean;
    permission: {
        code?: string;
        tip?: string;
        checkRight?: () => boolean;
    };
    labelWidth: string;
    selectDic: HuiLineEditDialogComboItem[];
    isSelectMuti: boolean;
    doubleConfirmTips: string;
    attr: {
        [key: string]: any;
    };
    formAttr: {
        [key: string]: any;
    };
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
