import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { Arrayable } from 'element-plus/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CreateComponentPublicInstanceWithMixins } from 'vue';
import { DefineComponent } from 'vue';
import { Directive } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FormItemRule } from 'element-plus';
import { GlobalComponents } from 'vue';
import { GlobalDirectives } from 'vue';
import { ModelRef } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { VNodeProps } from 'vue';

declare const _default: {
    install: (app: App<any>, opt?: HuiOptions) => void;
};
export default _default;

export declare const formDialogPropsDef: {
    permission: ObjectConstructor;
};

/**
 * 组件导出
 */
export declare const HuiAMapMassMarkers: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}>, {
    handleLabelMarkerClick: (event: any, point: any) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    pointClick: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    iconPath: string;
    width: string;
    height: string;
    showLabel: boolean;
    direction: "top" | "right" | "bottom" | "left" | "center";
    textStyle: IPointTextStyle;
    iconSize: [number, number];
    mapCenter: [number, number];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 倒计时按钮
 */
export declare const HuiAMapSelectAddress: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
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
    };
}>, {
    loadMap: () => void;
    setupMap: () => void;
    poi: ModelRef<any, string, any, any>;
    submitInfo: () => boolean;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<any>;
    iconPath: {
        type: PropType<string>;
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
    };
}>> & Readonly<{}>, {
    width: string;
    height: string;
    disabled: boolean;
    showInput: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 地图选择位置弹窗
 */
export declare const HuiAMapSelectAddressDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    iconPath: {
        type: PropType<string>;
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
    };
    disabled: {
        type: PropType<boolean>;
    };
    showInput: {
        type: PropType<boolean>;
    };
    iconClass: {
        type: PropType<string>;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (poi: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    iconPath: {
        type: PropType<string>;
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
    };
    disabled: {
        type: PropType<boolean>;
    };
    showInput: {
        type: PropType<boolean>;
    };
    iconClass: {
        type: PropType<string>;
    };
}>> & Readonly<{
    onOnSubmit?: (poi: any) => any;
}>, {
    title: string;
    width: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

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
    click: () => void;
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
    onClick?: () => any;
}>, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

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

declare interface HuiDataViewConfig {
    /**
     * 表格项id
     * @type {string}
     */
    prop: string;
    /**
     * 表格项的值
     * @type {string | null}
     */
    value: string | null | string[];
    /**
     * 表格每一项的标题
     * @type {string}
     */
    title: string;
    /**
     * 列表项右侧文字
     * @type {string}
     */
    rightText?: string;
    /**
     * value项的动态class
     * @type {string | null}
     */
    class?: string;
    /**
     * rightText的点击触发事件
     * @type {function}
     */
    handler?: (item: any) => void;
    /**
     * 内容展示的类型，type== 'img' 那么显示图片
     * @type {string}
     */
    type?: string;
}

export declare interface HuiDelegate {
    /**
     * 地区的所有数据
     * @returns
     */
    getRegionTree?: () => any[] | Promise<any[]>;
    /**
     * 上传oss
     * @param file 文件信息
     * @returns {Promise<[any, any]>} 上传后的结果
     */
    putOss?: (file: File | Blob | any) => Promise<[any, any]>;
    /**
     * 地图相关配置
     */
    amapConfig?: {
        key: string;
        serviceHost: string;
    };
    /**
     * 获取按钮权限
     * @returns
     */
    getBtnPermission?: () => {
        [key: string]: any;
    };
    /**
     * 其他配置
     */
    [key: string]: any;
}

declare interface HuiFormDialogParamsPermission {
    /**
     * 新增接口需要的权限code
     */
    postCode?: string;
    /**
     * 编辑接口需要的权限code
     */
    putCode?: string;
    /**
     * 新增接口没有权限的时候提示的文字
     */
    postCodeTip?: string;
    /**
     * 编辑接口没有权限的时候提示的文字
     */
    putCodeTip?: string;
    /**
     * 权限处理方法
     */
    checkRight?: (type: string) => boolean;
}

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
})> & Record<string, any>;

declare interface HuiGridFormConfigItem {
    /** 列表项的key */
    prop: string;
    /** 输入框append插槽显示的内容 */
    append?: string;
    /** 提示内容 */
    placeholder?: string;
    /** 显示输入框还是下拉选择 */
    type?: 'input' | 'select';
    /** 输入框数据类型 默认为number */
    dataType?: string;
    /** 输入框的style主要用来设置颜色 */
    style?: string;
    /** 下拉选择的数据字典 */
    dict?: {
        [key: string]: any;
    }[];
    /** 是否只读 */
    readonly?: boolean;
    /** 标题 */
    title: string;
    /** 错误提示信息 */
    errMsg?: string;
    /** 标题宽度 */
    width: string;
    /** v-bind其他属性值 */
    attr?: {
        [key: string]: any;
    };
    /** 是否必填 */
    required?: boolean;
    /** select 是否可以重复选择 */
    reselected?: boolean;
    /** 是否显示 x */
    clearable?: boolean;
}

/**
 * 组件导出
 */
export declare const HuiLineEditDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    label: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    permission: {
        type: PropType<{
            code?: string;
            tip?: string;
            checkRight?: () => boolean;
        }>;
        default: () => {};
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    labelWidth: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<any>;
    };
    selectDic: {
        type: PropType< HuiLineEditDialogComboItem[]>;
        required: true;
        default: () => any[];
    };
    isSelectMuti: {
        type: PropType<boolean>;
        required: true;
        default: boolean;
    };
    doubleConfirmTips: {
        type: PropType<string>;
        default: string;
    };
    attr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
    formAttr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (row: any, prop: string) => void;
    onValueChange: (form: any, row?: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    label: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
        type: PropType<string>;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    permission: {
        type: PropType<{
            code?: string;
            tip?: string;
            checkRight?: () => boolean;
        }>;
        default: () => {};
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    labelWidth: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<any>;
    };
    selectDic: {
        type: PropType< HuiLineEditDialogComboItem[]>;
        required: true;
        default: () => any[];
    };
    isSelectMuti: {
        type: PropType<boolean>;
        required: true;
        default: boolean;
    };
    doubleConfirmTips: {
        type: PropType<string>;
        default: string;
    };
    attr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
    formAttr: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: true;
        default: () => {};
    };
}>> & Readonly<{
    onOnSubmit?: (row: any, prop: string) => any;
    onOnValueChange?: (form: any, row?: any) => any;
}>, {
    label: string;
    title: string;
    type: string;
    isNeedDoubleConfirm: boolean;
    permission: {
        code?: string;
        tip?: string;
        checkRight?: () => boolean;
    };
    labelWidth: string;
    selectDic: HuiLineEditDialogComboItem[];
    isSelectMuti: boolean;
    doubleConfirmTips: string;
    attr: {
        [key: string]: any;
    };
    formAttr: {
        [key: string]: any;
    };
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 定义参数类型
 */
declare type HuiLineEditDialogComboItem = {
    label: string;
    value: string | number;
};

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

/**
 * option选项
 */
export declare type HuiOptions = {
    isInstallComponents?: boolean;
    delegate?: HuiDelegate;
};

/**
 * 富文本预览组件
 */
export declare const HuiPreviewRichTextDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 地区选择弹窗
 */
export declare const HuiRegionTreeDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (region: {
        id: string;
        regionList: any[];
    }) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    accordion: boolean;
    nodeKey: string;
    treeLabelKey: string;
    isConfirmClose: boolean;
    showCheckbox: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 地区树select
 */
export declare const HuiRegionTreeSelect: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>, {
    selectedRegions: ModelRef<string | string[], string, string | string[], string | string[]>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: PropType<string | string[]>;
    treeData: {
        type: PropType<any[]>;
    };
    disabledRegions: {
        type: PropType<string[]>;
        default: () => any[];
    };
}>> & Readonly<{}>, {
    disabledRegions: string[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

export declare const HuiRules: {
    /**
     * 校验必传
     * @param {string} tips 错误提示
     */
    required: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否url
     * @param {string} tips 错误提示
     */
    urlRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否版本号
     * @param {string} tips 错误提示
     */
    versionRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 是否json
     * @param {string} tips 错误提示
     */
    jsonRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证整数
     * @param {boolean} isCanZero 是否能输0
     * @param {boolean} isCanNegative 是否能输负数
     */
    intNumRule: (isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证小数
     * @param {number} digit 小数位数
     * @param {boolean} isCanZero 是否能输0
     * @param {boolean} isCanNegative 是否能输负数
     */
    digitNumRule: (digit?: number, isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证码验证
     * @param {string} tips 错误提示
     * @param {number} codeLength 验证码长度
     */
    codeRule: (tips?: string, codeLength?: number) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 电话号码验证
     * @param {string} tips 错误提示
     */
    phoneNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证数字范围
     * @param {number | string} min 最小值
     * @param {number | string} max 最大值
     * @param {string} tips 错误提示
     */
    numRangeRule: (min: any, max: any, tips?: string) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
};

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

/**
 * 链接预览弹窗
 */
export declare const HuiShowUrlDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
}>> & Readonly<{}>, {
    title: string;
    width: string;
    height: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 逗号分割字符串输入对话框
 */
export declare const HuiStringArrayInputDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<Arrayable<FormItemRule>>;
    };
    tips: {
        type: PropType<boolean>;
        default: boolean;
    };
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (id: string, info: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    label: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    placeholder: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    rules: {
        type: PropType<Arrayable<FormItemRule>>;
    };
    tips: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & Readonly<{
    onOnSubmit?: (id: string, info: string) => any;
}>, {
    label: string;
    title: string;
    placeholder: string;
    tips: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

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

/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymce: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
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
}>> & Readonly<{}>, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymceDialog: SFCWithInstall<DefineComponent<ExtractPropTypes<{
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
}>, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (tinymceContent: string, row?: any, field?: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
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
    width: string;
    height: string | number;
    permission: {
        code?: "";
        checkRight?: () => boolean;
        tip?: string;
    };
    linkAttribute: HuiTinymceLink[];
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>> & Record<string, any>;

/**
 *  链接支持的属性
 */
declare interface HuiTinymceLink {
    /** 链接标题 */
    title: string;
    /** 链接对象的key */
    value: string;
}

export declare const HuiTool: {
    ok: (msg: any) => void;
    err: (msg: any) => void;
    msgBox: (content: string, payLoad?: PayLoadType) => Promise<any>;
    msgBoxSuccess: (content: string, payload?: PayLoadType) => Promise<any>;
    msgBoxQues: (content: string, payload?: PayLoadType) => Promise<any>;
};

declare interface IPointItem {
    /** id */
    id?: number | string;
    /** 位置名称 */
    name?: string;
    /** 经纬度 */
    position: [number, number];
    /** 标记图标 */
    iconPath?: string;
    /**
     * 其他属性
     */
    [key: string]: any;
}

declare interface IPointTextStyle {
    /** 字体大小，单位为像素 */
    fontSize?: number | string;
    /** 文本颜色，例如 '#000000' */
    fillColor?: string;
    /** 文本描边颜色 */
    strokeColor?: string;
    /** 文本描边宽度 */
    strokeWidth?: string;
    /** 文本背景颜色 */
    backgroundColor?: string;
    /** 文本的内边距，格式为 [top, right, bottom, left] */
    padding?: [number, number, number, number];
    /** 文本背景的圆角半径 */
    borderRadius?: number;
    /** 文本背景的边框宽度 */
    borderWidth?: string;
    /** 文本背景的边框颜色 */
    borderColor?: string;
}

declare interface PayLoadType {
    /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
    iconType?: 'info' | 'success' | 'question';
    /** 控制图标展示的颜色 */
    type?: "info" | "success" | "danger" | "warning";
    /** 取消按钮的文本 */
    cancelText?: string;
    /** 确定按钮的文本 */
    confirmText?: string;
    /** 弹窗宽度 */
    width?: number;
    /** 弹窗样式类名 */
    className?: string;
}

declare interface PayLoadType_2 {
    /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
    iconType?: 'info' | 'success' | 'question';
    /** 控制图标展示的颜色 */
    type?: "info" | "success" | "danger" | "warning";
    /** 取消按钮的文本 */
    cancelText?: string;
    /** 确定按钮的文本 */
    confirmText?: string;
    /** 弹窗宽度 */
    width?: number;
}

export declare const selectLoadmore: Directive;

declare type SFCWithInstall<T> = T & Plugin_2;

declare interface TagItem {
    k: string;
    v: string;
    color?: string;
    tip?: string;
}

/**
 * 普通弹框通用逻辑
 * 集成 el-dialog 组件 的hooks，props 透传到 el-dialog
 * @returns
 * @example
 *  normalDialogTest.value?.open(id, payload)
 * <NormalDialogTest ref="formDialogTest" top="40vh" width="60vw" @open="beforeOpen" @close="beforeClose" />
 */
export declare const useHuiDialog: () => {
    id: Ref<string, string>;
    show: Ref<boolean, boolean>;
    payload: Ref<{}, {}>;
    dialogLoading: Ref<boolean, boolean>;
    confirmLoading: Ref<boolean, boolean>;
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
};

/**
 * 表单弹框通用逻辑
 * 集成 el-dialog 组件 的hooks, props 透传到 el-dialog
 * @param {*} UseHuiFormDialogParams
 * @returns
 * @example
 * formDialogTest.value?.open()
 * <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="beforeOpen" @close="beforeClose" />
 */
export declare const useHuiFormDialog: ({ formModel, showSuccessTip, isNeedDoubleConfirm, doubleConfirmConfig, beforeSubmit, submitCheck, afterSubmit, doubleConfirmAction, put, post, permission, }: UseHuiFormDialogParams) => {
    show: Ref<boolean, boolean>;
    form: Ref<{
        [x: string]: any;
        id?: string | number;
    }, UseHuiFormDialogForm | {
        [x: string]: any;
        id?: string | number;
    }>;
    formRef: Ref<any, any>;
    formLoading: Ref<boolean, boolean>;
    confirmLoading: Ref<boolean, boolean>;
    open: (id?: string, defaultFormValue?: {}) => void;
    close: () => void;
    resetLoading: () => void;
    resetFormFields: () => void;
    handleSubmit: () => void;
    handleCancel: () => void;
    checkPermission: () => any;
};

declare interface UseHuiFormDialogConfirm {
    message: string;
    payload?: PayLoadType_2;
}

declare interface UseHuiFormDialogForm {
    id?: string | number;
    [key: string]: any;
}

declare interface UseHuiFormDialogParams {
    /**
     * 编辑接口
     */
    put?: any | null;
    /**
     * 新增接口
     */
    post?: any | null;
    /**
     * 权限相关配置
     */
    permission?: HuiFormDialogParamsPermission;
    /**
     * 表单格式
     */
    formModel: UseHuiFormDialogForm;
    /**
     * 是否显示提交成功提示
     */
    showSuccessTip?: boolean;
    /**
     * 提交之前的处理，可用于转化提交的表单
     */
    beforeSubmit?: (submitForm: UseHuiFormDialogForm) => UseHuiFormDialogForm;
    /**
     * 提交之前的检查
     */
    submitCheck?: (submitForm: UseHuiFormDialogForm) => boolean;
    /**
     * 提交成功之后的处理
     */
    afterSubmit?: (submitForm: UseHuiFormDialogForm) => void;
    /**
     * 是否需要二次确认
     */
    isNeedDoubleConfirm?: boolean | Ref<boolean> | any;
    /**
     * 二次确认弹框配置，不传使用默认值
     */
    doubleConfirmConfig?: UseHuiFormDialogConfirm;
    /**
     * 二次确认方法，优先级高于配置, submitForm：要提交的表单; submitAction：提交吹; cancelAction: 取消提交处理
     */
    doubleConfirmAction?: (submitForm: UseHuiFormDialogForm, submitAction: (submitForm: UseHuiFormDialogForm) => void, cancelAction: () => void) => void;
}

export { }


/**
 * window 全局变量声明
 */
declare global {
    interface Window {
        /** 依赖外部传入的delegate */
        huiDelegate: HuiDelegate;
    }
}

