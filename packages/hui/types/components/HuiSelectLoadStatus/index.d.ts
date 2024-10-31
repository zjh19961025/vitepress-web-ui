import { SFCWithInstall } from '../../install-helper/typescript';
import { DefineComponent, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
/**
 * select下来加载状态组件
 */
export declare const HuiSelectLoadStatus: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    loading: {
        type: PropType<boolean>;
        required: true;
    };
    length: {
        type: PropType<number>;
        required: true;
    };
    leave: {
        type: PropType<number>;
        required: true;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    loading: {
        type: PropType<boolean>;
        required: true;
    };
    length: {
        type: PropType<number>;
        required: true;
    };
    leave: {
        type: PropType<number>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default HuiSelectLoadStatus;
