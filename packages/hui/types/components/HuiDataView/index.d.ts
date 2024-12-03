import { SFCWithInstall } from '../../install-helper/typescript';
import { CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import { HuiDataViewConfig } from './type';
/**
 * 组件导出
 */
export declare const HuiDataView: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        data: {
            type: PropType<{
                [key: string]: any;
            }>;
            default: () => {};
        };
        config: {
            type: PropType< HuiDataViewConfig[]>;
            required: true;
        };
        lineCount: {
            type: PropType<number>;
            default: number;
        };
        titleWidth: {
            type: PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        data: {
            [key: string]: any;
        };
        lineCount: number;
        titleWidth: string | number;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        data: {
            type: PropType<{
                [key: string]: any;
            }>;
            default: () => {};
        };
        config: {
            type: PropType< HuiDataViewConfig[]>;
            required: true;
        };
        lineCount: {
            type: PropType<number>;
            default: number;
        };
        titleWidth: {
            type: PropType<string | number>;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        data: {
            [key: string]: any;
        };
        lineCount: number;
        titleWidth: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    data: {
        type: PropType<{
            [key: string]: any;
        }>;
        default: () => {};
    };
    config: {
        type: PropType< HuiDataViewConfig[]>;
        required: true;
    };
    lineCount: {
        type: PropType<number>;
        default: number;
    };
    titleWidth: {
        type: PropType<string | number>;
        default: string;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    data: {
        [key: string]: any;
    };
    lineCount: number;
    titleWidth: string | number;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        prop: string;
        value: string | string[];
        title: string;
        rightText?: string;
        class?: string;
        handler?: (item: any) => void;
        type?: string;
    }) => any>> & Partial<Record<string, (_: {
        prop: string;
        value: string | string[];
        title: string;
        rightText?: string;
        class?: string;
        handler?: (item: any) => void;
        type?: string;
    }) => any>> & Partial<Record<string, (_: {
        prop: string;
        value: string | string[];
        title: string;
        rightText?: string;
        class?: string;
        handler?: (item: any) => void;
        type?: string;
    }) => any>>;
})> & Record<string, any>;
export default HuiDataView;
