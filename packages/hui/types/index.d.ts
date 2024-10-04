import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { Arrayable } from 'element-plus/es/utils';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { Directive } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FormItemRule } from 'element-plus';
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

/**
 * 倒计时按钮
 */
export declare const HuiAMapSelectAddress: SFCWithInstall<DefineComponent<{
    poi: PropType<any>;
    width: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<any>;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showInput: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    loadMap: () => void;
    setupMap: () => void;
    poi: ModelRef<any, string>;
    submitInfo: () => boolean;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    poi: PropType<any>;
    width: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<any>;
    };
    disabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    height: {
        type: PropType<string>;
        default: string;
    };
    showInput: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    width: string;
    disabled: boolean;
    height: string;
    showInput: boolean;
}, {}>> & Record<string, any>;

/**
 * 地图选择位置弹窗
 */
export declare const HuiAMapSelectAddressDialog: SFCWithInstall<DefineComponent<{
    title: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<any>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    height: {
        type: PropType<string>;
    };
    showInput: {
        type: PropType<boolean>;
    };
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onSubmit: (poi: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
    width: {
        type: PropType<string>;
        default: string;
    };
    value: {
        type: PropType<any>;
    };
    disabled: {
        type: PropType<boolean>;
    };
    height: {
        type: PropType<string>;
    };
    showInput: {
        type: PropType<boolean>;
    };
}>> & {
    onOnSubmit?: (poi: any) => any;
}, {
    title: string;
    width: string;
}, {}>> & Record<string, any>;

/**
 * 倒计时按钮
 */
export declare const HuiCountDownButton: SFCWithInstall<DefineComponent<{
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
}, {
    resetState: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
}>> & {
    onClick?: () => any;
}, {
    type: "button" | "text";
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}>> & Record<string, any>;

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
     * 其他配置
     */
    [key: string]: any;
}

/**
 * 组件导出
 */
export declare const HuiLineEditDialog: SFCWithInstall<DefineComponent<{
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
    prop: {
        type: PropType<string>;
        required: true;
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
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    prop: {
        type: PropType<string>;
        required: true;
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
}>> & {
    onOnSubmit?: (row: any, prop: string) => any;
    onOnValueChange?: (form: any, row?: any) => any;
}, {
    label: string;
    title: string;
    type: string;
    isNeedDoubleConfirm: boolean;
    selectDic: HuiLineEditDialogComboItem[];
    isSelectMuti: boolean;
    doubleConfirmTips: string;
}, {}>> & Record<string, any>;

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
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        row: PropType<{
            [key: string]: string;
        }>;
        width: {
            type: PropType<number>;
            required: true;
            default: number;
        };
        disabled: {
            type: PropType<boolean>;
            required: true;
            default: boolean;
        };
        baseClass: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        field: {
            type: PropType<string>;
            required: true;
        };
    }>> & {
        onConfirm?: (row: {
            [key: string]: string;
        }) => any;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        confirm: (row: {
            [key: string]: string;
        }) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        row: PropType<{
            [key: string]: string;
        }>;
        width: {
            type: PropType<number>;
            required: true;
            default: number;
        };
        disabled: {
            type: PropType<boolean>;
            required: true;
            default: boolean;
        };
        baseClass: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        field: {
            type: PropType<string>;
            required: true;
        };
    }>> & {
        onConfirm?: (row: {
            [key: string]: string;
        }) => any;
    }, {
        width: number;
        disabled: boolean;
        baseClass: string;
    }, true, {}, {}, {
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
        width: {
            type: PropType<number>;
            required: true;
            default: number;
        };
        disabled: {
            type: PropType<boolean>;
            required: true;
            default: boolean;
        };
        baseClass: {
            type: PropType<string>;
            required: true;
            default: string;
        };
        field: {
            type: PropType<string>;
            required: true;
        };
    }>> & {
        onConfirm?: (row: {
            [key: string]: string;
        }) => any;
    }, {}, {}, {}, {}, {
        width: number;
        disabled: boolean;
        baseClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    row: PropType<{
        [key: string]: string;
    }>;
    width: {
        type: PropType<number>;
        required: true;
        default: number;
    };
    disabled: {
        type: PropType<boolean>;
        required: true;
        default: boolean;
    };
    baseClass: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    field: {
        type: PropType<string>;
        required: true;
    };
}>> & {
    onConfirm?: (row: {
        [key: string]: string;
    }) => any;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    confirm: (row: {
        [key: string]: string;
    }) => void;
}, string, {
    width: number;
    disabled: boolean;
    baseClass: string;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
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
export declare const HuiPreviewRichTextDialog: SFCWithInstall<DefineComponent<{
    title: {
        type: PropType<string>;
        default: string;
    };
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    title: string;
}, {}>> & Record<string, any>;

/**
 * 地区选择弹窗
 */
export declare const HuiRegionTreeDialog: SFCWithInstall<DefineComponent<{
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
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
}>> & {
    onOnSubmit?: (region: {
        id: string;
        regionList: any[];
    }) => any;
}, {
    accordion: boolean;
    nodeKey: string;
    treeLabelKey: string;
    isConfirmClose: boolean;
    showCheckbox: boolean;
}, {}>> & Record<string, any>;

/**
 * 地区树Popover
 */
export declare const HuiRegionTreePopover: SFCWithInstall<DefineComponent<{
    region: PropType<string>;
    width: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    onlySelectLeaf: {
        type: PropType<boolean>;
        default: boolean;
    };
    isReadonly: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onRegionChange: (region: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    region: PropType<string>;
    width: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    accordion: {
        type: PropType<boolean>;
        default: boolean;
    };
    treeLabelKey: {
        type: PropType<string>;
        default: string;
    };
    onlySelectLeaf: {
        type: PropType<boolean>;
        default: boolean;
    };
    isReadonly: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onOnRegionChange?: (region: string) => any;
}, {
    width: string | number;
    accordion: boolean;
    treeLabelKey: string;
    onlySelectLeaf: boolean;
    isReadonly: boolean;
}, {}>> & Record<string, any>;

export declare const HuiRules: {
    /**
     * 是否url
     * @param isCanEmpty 是否可以为空，默认不能为空
     * @param tips 错误提示
     */
    urlRule: (isCanEmpty?: boolean, tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否版本号
     * @param tips 错误提示
     */
    versionRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否json
     * @param tips 错误提示
     */
    jsonRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 验证整数
     * @param isCanZero 是否能输0
     * @param isCanNegative 是否能输负数
     */
    intNumRule: (isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证小数
     * @param digit 小数位数
     * @param isCanZero 是否能输0
     * @param isCanNegative 是否能输负数
     */
    digitNumRule: (digit?: number, isCanZero?: boolean, isCanNegative?: boolean) => {
        validator: (rule: any, value: any, callback: any) => any;
        trigger: string;
    };
    /**
     * 验证码验证
     * @param tips 错误提示
     * @param codeLength 验证码长度
     */
    codeRule: (tips?: string, codeLength?: number) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 电话号码验证
     * @param tips 错误提示
     */
    phoneNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 验证数字范围
     * @param min 最小值
     * @param max 最大值
     * @param tips 错误提示
     */
    numRangeRule: (min: number | string, max: number | string, tips: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
};

/**
 * select下来加载状态组件
 */
export declare const HuiSelectLoadStatus: SFCWithInstall<DefineComponent<{
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
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
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
}>>, {}, {}>> & Record<string, any>;

/**
 * 链接预览弹窗
 */
export declare const HuiShowUrlDialog: SFCWithInstall<DefineComponent<{
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
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
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
}>>, {
    title: string;
    width: string;
    height: string;
}, {}>> & Record<string, any>;

/**
 * 逗号分割字符串输入对话框
 */
export declare const HuiStringArrayInputDialog: SFCWithInstall<DefineComponent<{
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
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
}>> & {
    onOnSubmit?: (id: string, info: string) => any;
}, {
    label: string;
    title: string;
    placeholder: string;
    tips: boolean;
}, {}>> & Record<string, any>;

/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymce: SFCWithInstall<DefineComponent<{
    tinymceContent: PropType<string>;
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    tinymceContent: PropType<string>;
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>>, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}>> & Record<string, any>;

/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymceDialog: SFCWithInstall<DefineComponent<{
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}, {
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    linkAttribute: {
        type: PropType< HuiTinymceLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & {
    onOnSubmit?: (tinymceContent: string, row?: any, field?: string) => any;
}, {
    width: string;
    height: string | number;
    linkAttribute: HuiTinymceLink[];
}, {}>> & Record<string, any>;

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

/**
 * 普通弹框通用逻辑
 * 集成 el-dialog 组件 的hooks，props 透传到 el-dialog
 * @param { getData, beforeOpen, beforeClose }
 * @returns
 * @example
 *  normalDialogTest.value?.open(id, payload)
 * <NormalDialogTest ref="formDialogTest" top="40vh" width="60vw" @open="openNormalDialog" @close="closeNormalDialog" />
 */
export declare const useHuiDialog: () => {
    id: Ref<string>;
    show: Ref<boolean>;
    payload: Ref<{}>;
    dialogLoading: Ref<boolean>;
    confirmLoading: Ref<boolean>;
    open: (dataId?: string, info?: {}) => void;
    close: () => void;
};

/**
 * 表单弹框通用逻辑
 * 集成 el-dialog 组件 的hooks, props 透传到 el-dialog
 * @param {*} HuiFormDialogParams
 * @returns
 * @example
 * formDialogTest.value?.open()
 * <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="onFormDialogOpen" @close="onFormDialogClose" />
 */
export declare const useHuiFormDialog: ({ formModel, showSuccessTip, isNeedDoubleConfirm, doubleConfirmConfig, beforeSubmit, submitCheck, afterSubmit, doubleConfirmAction, put, post }: UseHuiFormDialogParams) => {
    show: Ref<boolean>;
    form: Ref<{
        [x: string]: any;
        id?: string | number;
    }>;
    formRef: Ref<any>;
    formLoading: Ref<boolean>;
    confirmLoading: Ref<boolean>;
    open: (id?: string, defaultFormValue?: {}) => void;
    close: () => void;
    handleSubmit: () => void;
    submitOk: (res: any) => void;
    handleCancel: () => void;
    onOpen: () => void;
    onClose: () => void;
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
    put?: any | null;
    post?: any | null;
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

