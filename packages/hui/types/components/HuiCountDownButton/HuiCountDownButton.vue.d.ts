import { HuiCountDownButtonPropsType } from './type.ts';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare function resetState(): void;
declare const _default: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiCountDownButtonPropsType>, {
    timeCount: number;
    enableClass: string;
    disableClass: string;
    type: string;
}>>, {
    resetState: typeof resetState;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (callback: (isStart?: boolean) => void) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<HuiCountDownButtonPropsType>, {
    timeCount: number;
    enableClass: string;
    disableClass: string;
    type: string;
}>>> & Readonly<{
    onClick?: (callback: (isStart?: boolean) => void) => any;
}>, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
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
