import { DefineComponent, ExtractPropTypes, PropType, ModelRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>, {
    selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    disabledRegions: string[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
