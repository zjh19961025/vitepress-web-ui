import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { Arrayable } from 'element-plus/es/utils';
import { FormItemRule } from 'element-plus';
/**
 * 逗号分割字符串输入对话框
 */
export declare const HuiStringArrayInputDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<Arrayable<FormItemRule>>;
    };
    tips: {
        type: PropType<boolean>;
        default: boolean;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (id: string, info: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<Arrayable<FormItemRule>>;
    };
    tips: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onOnSubmit?: (id: string, info: string) => any;
}>, {
    label: string;
    title: string;
    placeholder: string;
    tips: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiStringArrayInputDialog;
