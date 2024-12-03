import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * 倒计时按钮
 */
export declare const HuiCountDownButton: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        required: true;
    };
    type: {
        type: PropType<"button" | "text">;
        required: true;
        default: string;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
    };
    timeCount: {
        type: PropType<string | number>;
        required: true;
        default: number;
    };
    enableClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    disableClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
}>, {
    resetState: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (callback: (isStart?: boolean) => void) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        required: true;
    };
    type: {
        type: PropType<"button" | "text">;
        required: true;
        default: string;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
    };
    timeCount: {
        type: PropType<string | number>;
        required: true;
        default: number;
    };
    enableClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    disableClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
}>> & Readonly<{
    onClick?: (callback: (isStart?: boolean) => void) => any;
}>, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiCountDownButton;
