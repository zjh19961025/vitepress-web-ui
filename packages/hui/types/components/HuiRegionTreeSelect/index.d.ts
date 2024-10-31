import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ModelRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 地区树select
 */
export declare const HuiRegionTreeSelect: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiRegionTreeSelect;
