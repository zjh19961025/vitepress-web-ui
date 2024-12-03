import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 标签
 */
export declare const HuiTags: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    text: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    tagType: {
        type: PropType<"info" | "success" | "warning" | "danger" | "primary">;
        default: string;
    };
    tagClass: {
        type: PropType<string>;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    text: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    tagType: {
        type: PropType<"info" | "success" | "warning" | "danger" | "primary">;
        default: string;
    };
    tagClass: {
        type: PropType<string>;
    };
}>> & Readonly<{}>, {
    text: string;
    tagType: "info" | "success" | "warning" | "danger" | "primary";
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiTags;
