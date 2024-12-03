import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 地区选择弹窗
 */
export declare const HuiRegionTreeDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    nodeKey: {
        type: PropType<string>;
        default: string;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    isConfirmClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCheckbox: {
        type: PropType<boolean>;
        default: boolean;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (region: {
        id: string;
        regionList: any[];
    }) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    nodeKey: {
        type: PropType<string>;
        default: string;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    isConfirmClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCheckbox: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onOnSubmit?: (region: {
        id: string;
        regionList: any[];
    }) => any;
}>, {
    accordion: boolean;
    nodeKey: string;
    treeLabelKey: string;
    isConfirmClose: boolean;
    showCheckbox: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiRegionTreeDialog;
