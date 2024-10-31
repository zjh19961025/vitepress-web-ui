import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: __VLS_WithTemplateSlots< DefineComponent<ExtractPropTypes<{
    row: PropType<{
        [key: string]: string;
    }>;
    field: {
        type: PropType<string>;
        required: true;
    };
    width: {
        type: PropType<number>;
        required: true;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
    };
    disabled: {
        type: PropType<boolean>;
        required: true;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    confirm: (row: {
        [key: string]: string;
    }) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    row: PropType<{
        [key: string]: string;
    }>;
    field: {
        type: PropType<string>;
        required: true;
    };
    width: {
        type: PropType<number>;
        required: true;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
    };
    disabled: {
        type: PropType<boolean>;
        required: true;
    };
}>> & Readonly<{
    onConfirm?: (row: {
        [key: string]: string;
    }) => any;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
