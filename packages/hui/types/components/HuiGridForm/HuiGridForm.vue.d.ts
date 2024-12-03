import { HuiGridFormProp } from './type.ts';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare function getData(isCheck?: boolean): any;
declare const _default: __VLS_WithTemplateSlots< DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiGridFormProp>, {
    /** 是否可以排序 */
    handSort: boolean;
    /** 是否可以删除 */
    handDelete: boolean;
    /** 是否可以进行添加 */
    isCanAppend: boolean;
    /** 组件的数据源 */
    listData: () => any[];
    /** 组件透传的class */
    gridFromClass: string;
}>>, {
    getData: typeof getData;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onRemoveItem: (item: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiGridFormProp>, {
    /** 是否可以排序 */
    handSort: boolean;
    /** 是否可以删除 */
    handDelete: boolean;
    /** 是否可以进行添加 */
    isCanAppend: boolean;
    /** 组件的数据源 */
    listData: () => any[];
    /** 组件透传的class */
    gridFromClass: string;
}>>> & Readonly<{
    onOnRemoveItem?: (item: any) => any;
}>, {
    isCanAppend: boolean;
    handSort: boolean;
    handDelete: boolean;
    listData: {
        [key: string]: any;
    }[];
    gridFromClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, Partial<Record<any, (_: {
    dataItem: any;
    el: any;
    prop: any;
}) => any>> & Partial<Record<`${any}-option`, (_: {
    option: any;
    prop: any;
    propConfig: any;
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
