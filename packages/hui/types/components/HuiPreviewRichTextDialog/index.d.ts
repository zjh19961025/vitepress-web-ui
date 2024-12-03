import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 富文本预览组件
 */
export declare const HuiPreviewRichTextDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiPreviewRichTextDialog;
