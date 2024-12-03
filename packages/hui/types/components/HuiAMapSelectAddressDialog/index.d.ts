import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 地图选择位置弹窗
 */
export declare const HuiAMapSelectAddressDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    iconPath: {
        type: PropType<string>;
    };
    value: {
        type: PropType<any>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    showInput: {
        type: PropType<boolean>;
    };
    iconClass: {
        type: PropType<string>;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (poi: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    iconPath: {
        type: PropType<string>;
    };
    value: {
        type: PropType<any>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    showInput: {
        type: PropType<boolean>;
    };
    iconClass: {
        type: PropType<string>;
    };
}>> & Readonly<{
    onOnSubmit?: (poi: any) => any;
}>, {
    title: string;
    width: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiAMapSelectAddressDialog;
