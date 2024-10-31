import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { HuiTinymceLink } from '../HuiTinymce/type';
/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymceDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{
    onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
}>, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiTinymceDialog;
