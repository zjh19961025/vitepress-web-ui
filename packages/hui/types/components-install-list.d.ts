import { CreateComponentPublicInstanceWithMixins, ExtractPropTypes, PropType, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, ObjectPlugin, App, ModelRef } from 'vue';
import { HuiTinymceLink } from './components/HuiTinymce/type';
import { HuiGridFormConfigItem } from './components/HuiGridForm/type';
import { HuiDataViewConfig } from './components/HuiDataView/type';
import { IPointItem, IPointTextStyle } from './components/HuiAMapMassMarkers/type';
import { TagItem } from './components/HuiTagsMore/HuiTagsMore.vue';
declare const _default: (({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: string;
        };
    }>> & Readonly<{}>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        title: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: string;
        };
    }>> & Readonly<{}>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        title: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    title: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: string;
        };
    }>> & Readonly<{}>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        title: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        title: {
            type: PropType<string>;
            default: string;
        };
    }>> & Readonly<{}>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        title: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    title: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
        resetState: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        click: (callback: (isStart?: boolean) => void) => void;
    }, PublicProps, {
        type: "button" | "text";
        timeCount: string | number;
        enableClass: string;
        disableClass: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
        resetState: () => void;
    }, {}, {}, {}, {
        type: "button" | "text";
        timeCount: string | number;
        enableClass: string;
        disableClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
    resetState: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (callback: (isStart?: boolean) => void) => void;
}, string, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
        resetState: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        click: (callback: (isStart?: boolean) => void) => void;
    }, PublicProps, {
        type: "button" | "text";
        timeCount: string | number;
        enableClass: string;
        disableClass: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
        resetState: () => void;
    }, {}, {}, {}, {
        type: "button" | "text";
        timeCount: string | number;
        enableClass: string;
        disableClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
    resetState: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (callback: (isStart?: boolean) => void) => void;
}, string, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        accordion: {
            type: PropType<boolean>;
            default: boolean;
        };
        nodeKey: {
            type: PropType<string>;
            default: string;
        };
        treeLabelKey: {
            type: PropType<string>;
            default: string;
        };
        isConfirmClose: {
            type: PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onOnSubmit?: (region: {
            id: string;
            regionList: any[];
        }) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onSubmit: (region: {
            id: string;
            regionList: any[];
        }) => void;
    }, PublicProps, {
        accordion: boolean;
        nodeKey: string;
        treeLabelKey: string;
        isConfirmClose: boolean;
        showCheckbox: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        accordion: {
            type: PropType<boolean>;
            default: boolean;
        };
        nodeKey: {
            type: PropType<string>;
            default: string;
        };
        treeLabelKey: {
            type: PropType<string>;
            default: string;
        };
        isConfirmClose: {
            type: PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onOnSubmit?: (region: {
            id: string;
            regionList: any[];
        }) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        accordion: boolean;
        nodeKey: string;
        treeLabelKey: string;
        isConfirmClose: boolean;
        showCheckbox: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    nodeKey: {
        type: PropType<string>;
        default: string;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    isConfirmClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCheckbox: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onOnSubmit?: (region: {
        id: string;
        regionList: any[];
    }) => any;
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (region: {
        id: string;
        regionList: any[];
    }) => void;
}, string, {
    accordion: boolean;
    nodeKey: string;
    treeLabelKey: string;
    isConfirmClose: boolean;
    showCheckbox: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        accordion: {
            type: PropType<boolean>;
            default: boolean;
        };
        nodeKey: {
            type: PropType<string>;
            default: string;
        };
        treeLabelKey: {
            type: PropType<string>;
            default: string;
        };
        isConfirmClose: {
            type: PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onOnSubmit?: (region: {
            id: string;
            regionList: any[];
        }) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onSubmit: (region: {
            id: string;
            regionList: any[];
        }) => void;
    }, PublicProps, {
        accordion: boolean;
        nodeKey: string;
        treeLabelKey: string;
        isConfirmClose: boolean;
        showCheckbox: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        accordion: {
            type: PropType<boolean>;
            default: boolean;
        };
        nodeKey: {
            type: PropType<string>;
            default: string;
        };
        treeLabelKey: {
            type: PropType<string>;
            default: string;
        };
        isConfirmClose: {
            type: PropType<boolean>;
            default: boolean;
        };
        showCheckbox: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onOnSubmit?: (region: {
            id: string;
            regionList: any[];
        }) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        accordion: boolean;
        nodeKey: string;
        treeLabelKey: string;
        isConfirmClose: boolean;
        showCheckbox: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    nodeKey: {
        type: PropType<string>;
        default: string;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    isConfirmClose: {
        type: PropType<boolean>;
        default: boolean;
    };
    showCheckbox: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onOnSubmit?: (region: {
        id: string;
        regionList: any[];
    }) => any;
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (region: {
        id: string;
        regionList: any[];
    }) => void;
}, string, {
    accordion: boolean;
    nodeKey: string;
    treeLabelKey: string;
    isConfirmClose: boolean;
    showCheckbox: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
            default: () => {};
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{
        onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
    }, PublicProps, {
        width: string;
        height: string | number;
        permission: {
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        };
        linkAttribute: HuiTinymceLink[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
            default: () => {};
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{
        onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        width: string;
        height: string | number;
        permission: {
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        };
        linkAttribute: HuiTinymceLink[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
        default: () => {};
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{
    onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
}, string, {
    width: string;
    height: string | number;
    permission: {
        code?: "";
        checkRight?: () => boolean;
        tip?: string;
    };
    linkAttribute: HuiTinymceLink[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
            default: () => {};
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{
        onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
    }, PublicProps, {
        width: string;
        height: string | number;
        permission: {
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        };
        linkAttribute: HuiTinymceLink[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
            default: () => {};
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{
        onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
    }>, {
        open: (dataId?: string, info?: {}) => void;
        close: () => void;
    }, {}, {}, {}, {
        width: string;
        height: string | number;
        permission: {
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        };
        linkAttribute: HuiTinymceLink[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
        default: () => {};
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{
    onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
}, string, {
    width: string;
    height: string | number;
    permission: {
        code?: "";
        checkRight?: () => boolean;
        tip?: string;
    };
    linkAttribute: HuiTinymceLink[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<string>;
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        width: string;
        height: string | number;
        linkAttribute: HuiTinymceLink[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<string>;
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        width: string;
        height: string | number;
        linkAttribute: HuiTinymceLink[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<string>;
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<string>;
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        width: string;
        height: string | number;
        linkAttribute: HuiTinymceLink[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<string>;
        width: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        height: {
            type: PropType<string | number>;
            required: true;
            default: string;
        };
        permission: {
            type: PropType<{
                code?: "";
                checkRight?: () => boolean;
                tip?: string;
            }>;
        };
        linkAttribute: {
            type: PropType< HuiTinymceLink[]>;
            required: true;
            default: () => {
                title: string;
                value: string;
            }[];
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        width: string;
        height: string | number;
        linkAttribute: HuiTinymceLink[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<string>;
    width: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    permission: {
        type: PropType<{
            code?: "";
            checkRight?: () => boolean;
            tip?: string;
        }>;
    };
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
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
}) & ObjectPlugin<any[]> & Record<string, any>) | ({
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
}) & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
        loadMap: () => void;
        setupMap: () => void;
        poi: ModelRef<any, string, any, any>;
        submitInfo: () => boolean;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        iconPath: string;
        width: string;
        height: string;
        disabled: boolean;
        showInput: boolean;
        iconClass: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
        loadMap: () => void;
        setupMap: () => void;
        poi: ModelRef<any, string, any, any>;
        submitInfo: () => boolean;
    }, {}, {}, {}, {
        iconPath: string;
        width: string;
        height: string;
        disabled: boolean;
        showInput: boolean;
        iconClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
    loadMap: () => void;
    setupMap: () => void;
    poi: ModelRef<any, string, any, any>;
    submitInfo: () => boolean;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    iconPath: string;
    width: string;
    height: string;
    disabled: boolean;
    showInput: boolean;
    iconClass: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
        loadMap: () => void;
        setupMap: () => void;
        poi: ModelRef<any, string, any, any>;
        submitInfo: () => boolean;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        iconPath: string;
        width: string;
        height: string;
        disabled: boolean;
        showInput: boolean;
        iconClass: string;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
        loadMap: () => void;
        setupMap: () => void;
        poi: ModelRef<any, string, any, any>;
        submitInfo: () => boolean;
    }, {}, {}, {}, {
        iconPath: string;
        width: string;
        height: string;
        disabled: boolean;
        showInput: boolean;
        iconClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
    loadMap: () => void;
    setupMap: () => void;
    poi: ModelRef<any, string, any, any>;
    submitInfo: () => boolean;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    iconPath: string;
    width: string;
    height: string;
    disabled: boolean;
    showInput: boolean;
    iconClass: string;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
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
            default: string;
        };
        isCanDeleteItem: {
            type: PropType<(item: any, index: number) => boolean>;
        };
    }>> & Readonly<{
        onOnRemoveItem?: (item: any) => any;
    }>, {
        getData: (isCheck?: boolean) => any;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onRemoveItem: (item: any) => void;
    }, PublicProps, {
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
            default: string;
        };
        isCanDeleteItem: {
            type: PropType<(item: any, index: number) => boolean>;
        };
    }>> & Readonly<{
        onOnRemoveItem?: (item: any) => any;
    }>, {
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
        default: string;
    };
    isCanDeleteItem: {
        type: PropType<(item: any, index: number) => boolean>;
    };
}>> & Readonly<{
    onOnRemoveItem?: (item: any) => any;
}>, {
    getData: (isCheck?: boolean) => any;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onRemoveItem: (item: any) => void;
}, string, {
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
}) & ObjectPlugin<any[]> & Record<string, any>) | ({
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
            default: string;
        };
        isCanDeleteItem: {
            type: PropType<(item: any, index: number) => boolean>;
        };
    }>> & Readonly<{
        onOnRemoveItem?: (item: any) => any;
    }>, {
        getData: (isCheck?: boolean) => any;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        onRemoveItem: (item: any) => void;
    }, PublicProps, {
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
            default: string;
        };
        isCanDeleteItem: {
            type: PropType<(item: any, index: number) => boolean>;
        };
    }>> & Readonly<{
        onOnRemoveItem?: (item: any) => any;
    }>, {
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
        default: string;
    };
    isCanDeleteItem: {
        type: PropType<(item: any, index: number) => boolean>;
    };
}>> & Readonly<{
    onOnRemoveItem?: (item: any) => any;
}>, {
    getData: (isCheck?: boolean) => any;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onRemoveItem: (item: any) => void;
}, string, {
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
}) & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
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
}) & ObjectPlugin<any[]> & Record<string, any>) | ({
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
}) & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<string | string[]>;
        treeData: {
            type: PropType<any[]>;
        };
        disabledRegions: {
            type: PropType<string[]>;
            default: () => any[];
        };
    }>> & Readonly<{}>, {
        selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        disabledRegions: string[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<string | string[]>;
        treeData: {
            type: PropType<any[]>;
        };
        disabledRegions: {
            type: PropType<string[]>;
            default: () => any[];
        };
    }>> & Readonly<{}>, {
        selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
    }, {}, {}, {}, {
        disabledRegions: string[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    disabledRegions: string[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<string | string[]>;
        treeData: {
            type: PropType<any[]>;
        };
        disabledRegions: {
            type: PropType<string[]>;
            default: () => any[];
        };
    }>> & Readonly<{}>, {
        selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        disabledRegions: string[];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<string | string[]>;
        treeData: {
            type: PropType<any[]>;
        };
        disabledRegions: {
            type: PropType<string[]>;
            default: () => any[];
        };
    }>> & Readonly<{}>, {
        selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
    }, {}, {}, {}, {
        disabledRegions: string[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    disabledRegions: string[];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<any>;
        iconPath: {
            type: PropType<string>;
            default: string;
        };
        value: {
            type: PropType<IPointItem>;
        };
        width: {
            type: PropType<string>;
            default: string;
        };
        height: {
            type: PropType<string>;
            default: string;
        };
        showLabel: {
            type: PropType<boolean>;
            default: boolean;
        };
        direction: {
            type: PropType<"top" | "right" | "bottom" | "left" | "center">;
            default: string;
        };
        textStyle: {
            type: PropType<IPointTextStyle>;
            default: () => {
                fontSize: number;
                fillColor: any;
                backgroundColor: any;
                borderRadius: number;
            };
        };
        iconSize: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
        mapCenter: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
    }>> & Readonly<{
        onPointClick?: (...args: any[]) => any;
    }>, {
        handleLabelMarkerClick: (event: any, point: any) => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        pointClick: (...args: any[]) => void;
    }, PublicProps, {
        iconPath: string;
        width: string;
        height: string;
        showLabel: boolean;
        direction: "top" | "right" | "bottom" | "left" | "center";
        textStyle: IPointTextStyle;
        iconSize: [number, number];
        mapCenter: [number, number];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<any>;
        iconPath: {
            type: PropType<string>;
            default: string;
        };
        value: {
            type: PropType<IPointItem>;
        };
        width: {
            type: PropType<string>;
            default: string;
        };
        height: {
            type: PropType<string>;
            default: string;
        };
        showLabel: {
            type: PropType<boolean>;
            default: boolean;
        };
        direction: {
            type: PropType<"top" | "right" | "bottom" | "left" | "center">;
            default: string;
        };
        textStyle: {
            type: PropType<IPointTextStyle>;
            default: () => {
                fontSize: number;
                fillColor: any;
                backgroundColor: any;
                borderRadius: number;
            };
        };
        iconSize: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
        mapCenter: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
    }>> & Readonly<{
        onPointClick?: (...args: any[]) => any;
    }>, {
        handleLabelMarkerClick: (event: any, point: any) => void;
    }, {}, {}, {}, {
        iconPath: string;
        width: string;
        height: string;
        showLabel: boolean;
        direction: "top" | "right" | "bottom" | "left" | "center";
        textStyle: IPointTextStyle;
        iconSize: [number, number];
        mapCenter: [number, number];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<IPointItem>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showLabel: {
        type: PropType<boolean>;
        default: boolean;
    };
    direction: {
        type: PropType<"top" | "right" | "bottom" | "left" | "center">;
        default: string;
    };
    textStyle: {
        type: PropType<IPointTextStyle>;
        default: () => {
            fontSize: number;
            fillColor: any;
            backgroundColor: any;
            borderRadius: number;
        };
    };
    iconSize: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
    mapCenter: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
}>> & Readonly<{
    onPointClick?: (...args: any[]) => any;
}>, {
    handleLabelMarkerClick: (event: any, point: any) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    pointClick: (...args: any[]) => void;
}, string, {
    iconPath: string;
    width: string;
    height: string;
    showLabel: boolean;
    direction: "top" | "right" | "bottom" | "left" | "center";
    textStyle: IPointTextStyle;
    iconSize: [number, number];
    mapCenter: [number, number];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
        modelValue: PropType<any>;
        iconPath: {
            type: PropType<string>;
            default: string;
        };
        value: {
            type: PropType<IPointItem>;
        };
        width: {
            type: PropType<string>;
            default: string;
        };
        height: {
            type: PropType<string>;
            default: string;
        };
        showLabel: {
            type: PropType<boolean>;
            default: boolean;
        };
        direction: {
            type: PropType<"top" | "right" | "bottom" | "left" | "center">;
            default: string;
        };
        textStyle: {
            type: PropType<IPointTextStyle>;
            default: () => {
                fontSize: number;
                fillColor: any;
                backgroundColor: any;
                borderRadius: number;
            };
        };
        iconSize: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
        mapCenter: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
    }>> & Readonly<{
        onPointClick?: (...args: any[]) => any;
    }>, {
        handleLabelMarkerClick: (event: any, point: any) => void;
    }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        pointClick: (...args: any[]) => void;
    }, PublicProps, {
        iconPath: string;
        width: string;
        height: string;
        showLabel: boolean;
        direction: "top" | "right" | "bottom" | "left" | "center";
        textStyle: IPointTextStyle;
        iconSize: [number, number];
        mapCenter: [number, number];
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        modelValue: PropType<any>;
        iconPath: {
            type: PropType<string>;
            default: string;
        };
        value: {
            type: PropType<IPointItem>;
        };
        width: {
            type: PropType<string>;
            default: string;
        };
        height: {
            type: PropType<string>;
            default: string;
        };
        showLabel: {
            type: PropType<boolean>;
            default: boolean;
        };
        direction: {
            type: PropType<"top" | "right" | "bottom" | "left" | "center">;
            default: string;
        };
        textStyle: {
            type: PropType<IPointTextStyle>;
            default: () => {
                fontSize: number;
                fillColor: any;
                backgroundColor: any;
                borderRadius: number;
            };
        };
        iconSize: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
        mapCenter: {
            type: PropType<[number, number]>;
            default: () => number[];
        };
    }>> & Readonly<{
        onPointClick?: (...args: any[]) => any;
    }>, {
        handleLabelMarkerClick: (event: any, point: any) => void;
    }, {}, {}, {}, {
        iconPath: string;
        width: string;
        height: string;
        showLabel: boolean;
        direction: "top" | "right" | "bottom" | "left" | "center";
        textStyle: IPointTextStyle;
        iconSize: [number, number];
        mapCenter: [number, number];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<IPointItem>;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showLabel: {
        type: PropType<boolean>;
        default: boolean;
    };
    direction: {
        type: PropType<"top" | "right" | "bottom" | "left" | "center">;
        default: string;
    };
    textStyle: {
        type: PropType<IPointTextStyle>;
        default: () => {
            fontSize: number;
            fillColor: any;
            backgroundColor: any;
            borderRadius: number;
        };
    };
    iconSize: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
    mapCenter: {
        type: PropType<[number, number]>;
        default: () => number[];
    };
}>> & Readonly<{
    onPointClick?: (...args: any[]) => any;
}>, {
    handleLabelMarkerClick: (event: any, point: any) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    pointClick: (...args: any[]) => void;
}, string, {
    iconPath: string;
    width: string;
    height: string;
    showLabel: boolean;
    direction: "top" | "right" | "bottom" | "left" | "center";
    textStyle: IPointTextStyle;
    iconSize: [number, number];
    mapCenter: [number, number];
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        text: string;
        tagType: "info" | "success" | "warning" | "danger" | "primary";
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        text: string;
        tagType: "info" | "success" | "warning" | "danger" | "primary";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    text: string;
    tagType: "info" | "success" | "warning" | "danger" | "primary";
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        text: string;
        tagType: "info" | "success" | "warning" | "danger" | "primary";
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        text: string;
        tagType: "info" | "success" | "warning" | "danger" | "primary";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    text: string;
    tagType: "info" | "success" | "warning" | "danger" | "primary";
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        width: number;
        tagsList: unknown[];
        dictObj: TagItem;
        showTips: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        width: number;
        tagsList: unknown[];
        dictObj: TagItem;
        showTips: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    width: number;
    tagsList: unknown[];
    dictObj: TagItem;
    showTips: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ObjectPlugin<any[]> & Record<string, any>) | ({
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        width: number;
        tagsList: unknown[];
        dictObj: TagItem;
        showTips: boolean;
    }, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        width: number;
        tagsList: unknown[];
        dictObj: TagItem;
        showTips: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    width: number;
    tagsList: unknown[];
    dictObj: TagItem;
    showTips: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & ((app: App<any>, ...options: any[]) => any) & Partial< ObjectPlugin<any[]>> & Record<string, any>))[];
export default _default;
