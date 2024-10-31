import { HuiStringArrayInputDialogPropsType } from './type';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare const _default: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiStringArrayInputDialogPropsType>, {
    title: string;
    label: string;
    placeholder: string;
    tips: boolean;
}>>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (id: string, info: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiStringArrayInputDialogPropsType>, {
    title: string;
    label: string;
    placeholder: string;
    tips: boolean;
}>>> & Readonly<{
    onOnSubmit?: (id: string, info: string) => any;
}>, {
    label: string;
    title: string;
    placeholder: string;
    tips: boolean;
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
