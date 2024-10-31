import { HuiSelectLoadStatusPropsType } from './type';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';

declare const _default: DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<HuiSelectLoadStatusPropsType>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<HuiSelectLoadStatusPropsType>>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
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
