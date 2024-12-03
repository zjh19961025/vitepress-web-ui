import { DefineComponent, ExtractPropTypes, PropType, ModelRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function setupMap(): void;
declare function submitInfo(): boolean;
declare function loadMap(): void;
declare const _default: DefineComponent<ExtractPropTypes<{
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
    loadMap: typeof loadMap;
    setupMap: typeof setupMap;
    poi: ModelRef<any, string, any, any>;
    submitInfo: typeof submitInfo;
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
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
