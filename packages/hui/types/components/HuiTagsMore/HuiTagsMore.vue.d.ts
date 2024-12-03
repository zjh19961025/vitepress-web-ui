import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
export interface TagItem {
    k: string;
    v: string;
    color?: string;
    tip?: string;
}
declare const _default: DefineComponent<ExtractPropTypes<{
    tagsList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    dictObj: {
        type: () => TagItem;
        default: () => void;
    };
    showTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    tagsList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    dictObj: {
        type: () => TagItem;
        default: () => void;
    };
    showTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    width: number;
    tagsList: unknown[];
    dictObj: TagItem;
    showTips: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
