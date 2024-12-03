import { HuiDataViewProp } from './type';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare const _default: __VLS_WithTemplateSlots< DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiDataViewProp>, {
    lineCount: number;
    titleWidth: string;
    data: () => {};
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiDataViewProp>, {
    lineCount: number;
    titleWidth: string;
    data: () => {};
}>>> & Readonly<{}>, {
    data: {
        [key: string]: any;
    };
    lineCount: number;
    titleWidth: string | number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, Partial<Record<string, (_: {
    prop: string;
    value: string | string[];
    title: string;
    rightText?: string;
    class?: string;
    handler?: (item: any) => void;
    type?: string;
}) => any>> & Partial<Record<string, (_: {
    prop: string;
    value: string | string[];
    title: string;
    rightText?: string;
    class?: string;
    handler?: (item: any) => void;
    type?: string;
}) => any>> & Partial<Record<string, (_: {
    prop: string;
    value: string | string[];
    title: string;
    rightText?: string;
    class?: string;
    handler?: (item: any) => void;
    type?: string;
}) => any>>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
