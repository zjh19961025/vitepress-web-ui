import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { HuiTinymceLink } from './type';
/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymce: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    modelValue: PropType<string>;
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<string>;
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{}>, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiTinymce;
