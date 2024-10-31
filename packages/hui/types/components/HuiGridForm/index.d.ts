import { SFCWithInstall } from '../../install-helper/typescript';
import { CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { HuiGridFormConfigItem } from './type';
/**
 * 动态网格表单
 */
export declare const HuiGridForm: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        config: {
            type: PropType< HuiGridFormConfigItem[]>;
            required: true;
        };
        isCanAppend: {
            type: PropType<boolean>;
            default: boolean;
        };
        handSort: {
            type: PropType<boolean>;
            default: boolean;
        };
        handDelete: {
            type: PropType<boolean>;
            default: boolean;
        };
        listData: {
            type: PropType<{
                [key: string]: any;
            }[]>;
            default: () => any[];
        };
        gridFromClass: {
            type: PropType<string>;
            required: true;
            default: string;
        };
    }>> & Readonly<{}>, {
        getData: (isCheck?: boolean) => any;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        isCanAppend: boolean;
        handSort: boolean;
        handDelete: boolean;
        listData: {
            [key: string]: any;
        }[];
        gridFromClass: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        config: {
            type: PropType< HuiGridFormConfigItem[]>;
            required: true;
        };
        isCanAppend: {
            type: PropType<boolean>;
            default: boolean;
        };
        handSort: {
            type: PropType<boolean>;
            default: boolean;
        };
        handDelete: {
            type: PropType<boolean>;
            default: boolean;
        };
        listData: {
            type: PropType<{
                [key: string]: any;
            }[]>;
            default: () => any[];
        };
        gridFromClass: {
            type: PropType<string>;
            required: true;
            default: string;
        };
    }>> & Readonly<{}>, {
        getData: (isCheck?: boolean) => any;
    }, {}, {}, {}, {
        isCanAppend: boolean;
        handSort: boolean;
        handDelete: boolean;
        listData: {
            [key: string]: any;
        }[];
        gridFromClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    config: {
        type: PropType< HuiGridFormConfigItem[]>;
        required: true;
    };
    isCanAppend: {
        type: PropType<boolean>;
        default: boolean;
    };
    handSort: {
        type: PropType<boolean>;
        default: boolean;
    };
    handDelete: {
        type: PropType<boolean>;
        default: boolean;
    };
    listData: {
        type: PropType<{
            [key: string]: any;
        }[]>;
        default: () => any[];
    };
    gridFromClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
}>> & Readonly<{}>, {
    getData: (isCheck?: boolean) => any;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    isCanAppend: boolean;
    handSort: boolean;
    handDelete: boolean;
    listData: {
        [key: string]: any;
    }[];
    gridFromClass: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Partial<Record<any, (_: {
        dataItem: any;
        el: any;
        prop: any;
    }) => any>> & Partial<Record<`${any}-option`, (_: {
        option: any;
        prop: any;
        propConfig: any;
    }) => any>>;
})> & Record<string, any>;
export default HuiGridForm;
