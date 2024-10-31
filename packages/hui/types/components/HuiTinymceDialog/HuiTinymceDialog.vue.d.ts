import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
import { HuiTinymcePropsType, HuiTinymceLink } from '../HuiTinymce/type';
declare const _default: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps< HuiTinymcePropsType>, {
    width: string;
    height: string;
    linkAttribute: () => {
        title: string;
        value: string;
    }[];
}>>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps< HuiTinymcePropsType>, {
    width: string;
    height: string;
    linkAttribute: () => {
        title: string;
        value: string;
    }[];
}>>> & Readonly<{
    onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
}>, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
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
