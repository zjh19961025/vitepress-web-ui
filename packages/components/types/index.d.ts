import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

/**
 * 样式转换, 对象转字符串，或者字符串转对象
 * @param {object | string} customStyle 需要转换的目标
 * @param {String} target 转换的目的，object-转为对象，string-转为字符串
 * @returns {object|string}
 */
export declare function addStyle(customStyle: string | object, target?: string): {};

/**
 * 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
 * @param value
 * @param unit
 * @returns
 */
export declare function addUnit(value?: string | number, unit?: string): string;

declare const _default: {
    install: (app: App<any>, opt?: HuiOptions) => void;
};
export default _default;

declare interface HuiDelegate {
    /** 地区的所有数据 */
    getRegion: () => any[];
    /**
     * 上传oss
     * @param file 文件信息
     * @returns {Promise<[Error | null, any]>} 上传后的结果
     */
    putOss?: (file: File | Blob | any) => Promise<[Error | null, any]>;
    [key: string]: any;
}

/**
 * 组件导出
 */
export declare const HuiLineEditDialog: SFCWithInstall<DefineComponent<{
    type: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    label: {
        type: PropType<string>;
        default: string;
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    placeholder: {
        type: PropType<string>;
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
    onValueChange: (form: any, row?: any) => void;
    onSubmit: (row: any, prop: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    type: {
        type: PropType<string>;
        default: string;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    isNeedDoubleConfirm: {
        type: PropType<boolean>;
        default: boolean;
    };
    label: {
        type: PropType<string>;
        default: string;
    };
    prop: {
        type: PropType<string>;
        required: true;
    };
    placeholder: {
        type: PropType<string>;
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
    onOnValueChange?: (form: any, row?: any) => any;
    onOnSubmit?: (row: any, prop: string) => any;
}, {
    type: string;
    title: string;
    isNeedDoubleConfirm: boolean;
    label: string;
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
 * option选项
 */
declare type HuiOptions = {
    isInstallComponents: boolean;
    delegate: HuiDelegate;
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
     * 是否正整数
     * @param tips 错误提示
     */
    intNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 指定最大小数位验证
     * @param digit 小数位数
     */
    digitNumRule: (digit?: number) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否非负数
     * @param tips 错误提示
     */
    isPosIntRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
    /**
     * 是否非负的整数
     * @param tips 错误提示
     */
    allNumRule: (tips?: string) => {
        validator: (rule: any, value: any, callback: any) => void;
        trigger: string;
    };
};

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

export declare const HuiTool: {
    ok: (msg: any) => void;
    err: (msg: any) => void;
    addUnit: typeof addUnit;
    addStyle: typeof addStyle;
};

export declare const makeInstaller: (components?: Plugin_2[]) => {
    install: (app: App, opt?: HuiOptions) => void;
};

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
    title?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    [key: string]: any;
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
    isNeedDoubleConfirm?: boolean;
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

/**
 * 来源于 element-plus 中, 给每个组件添加 install 方法
 * @param main
 * @param extra
 * @returns
 */
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E) => SFCWithInstall<T> & E;

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

