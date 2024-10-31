import { SFCWithInstall } from '../../install-helper/typescript';
import { CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
/**
 * 行编辑popover
 */
export declare const HuiLineEditPopover: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        row: PropType<{
            [key: string]: string;
        }>;
        field: {
            type: PropType<string>;
            required: true;
        };
        width: {
            type: PropType<number>;
            required: true;
        };
        baseClass: {
            type: PropType<string>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
            required: true;
        };
    }>> & Readonly<{
        onConfirm?: (row: {
            [key: string]: string;
        }) => any;
    }>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        confirm: (row: {
            [key: string]: string;
        }) => void;
    }, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        row: PropType<{
            [key: string]: string;
        }>;
        field: {
            type: PropType<string>;
            required: true;
        };
        width: {
            type: PropType<number>;
            required: true;
        };
        baseClass: {
            type: PropType<string>;
            required: true;
        };
        disabled: {
            type: PropType<boolean>;
            required: true;
        };
    }>> & Readonly<{
        onConfirm?: (row: {
            [key: string]: string;
        }) => any;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    row: PropType<{
        [key: string]: string;
    }>;
    field: {
        type: PropType<string>;
        required: true;
    };
    width: {
        type: PropType<number>;
        required: true;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
    };
    disabled: {
        type: PropType<boolean>;
        required: true;
    };
}>> & Readonly<{
    onConfirm?: (row: {
        [key: string]: string;
    }) => any;
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    confirm: (row: {
        [key: string]: string;
    }) => void;
}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default HuiLineEditPopover;
