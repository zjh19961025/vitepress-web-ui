import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { TagItem } from './HuiTagsMore.vue';
/**
 * 标签
 */
export declare const HuiTagsMore: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiTagsMore;
