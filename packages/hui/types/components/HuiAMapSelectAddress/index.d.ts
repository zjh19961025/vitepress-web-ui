import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ModelRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 倒计时按钮
 */
export declare const HuiAMapSelectAddress: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
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
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    showInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    iconClass: {
        type: PropType<string>;
        default: string;
    };
}>, {
    loadMap: () => void;
    setupMap: () => void;
    poi: ModelRef<any, string, any, any>;
    submitInfo: () => boolean;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
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
        default: string;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    showInput: {
        type: PropType<boolean>;
        default: boolean;
    };
    iconClass: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    iconPath: string;
    width: string;
    height: string;
    disabled: boolean;
    showInput: boolean;
    iconClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiAMapSelectAddress;
