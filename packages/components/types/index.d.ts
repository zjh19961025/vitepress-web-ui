import { App } from 'vue';
import { Arrayable } from 'element-plus/es/utils';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FormItemRule } from 'element-plus';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare const _default: {
    install: (app: App<any>, opt?: HuiOptions) => void;
};
export default _default;

/**
 * 倒计时按钮
 */
export declare const HuiCountDownButton: SFCWithInstall<DefineComponent<{
    title: {
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
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    title: {
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
}>>, {
    timeCount: string | number;
    enableClass: string;
    disableClass: string;
}, {}>> & Record<string, any>;

export declare interface HuiDelegate {
    /**
     * 地区的所有数据
     * @returns
     */
    getRegionTree?: () => any[];
    /**
     * 上传oss
     * @param file 文件信息
     * @returns {Promise<[any, any]>} 上传后的结果
     */
    putOss?: (file: File | Blob | any) => Promise<[any, any]>;
    /**
     * 其他配置
     */
    [key: string]: any;
}

/**
 * 组件导出
 */
export declare const HuiLineEditDialog: SFCWithInstall<DefineComponent<{
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
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
    title: {
        type: PropType<string>;
        default: string;
    };
    type: {
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
    title: string;
    type: string;
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
    confirmLoading: Ref<boolean>;
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
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    onRegionChange: (region: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    region: PropType<string>;
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
}>> & {
    onOnRegionChange?: (region: string) => any;
}, {
    accordion: boolean;
    treeLabelKey: string;
    onlySelectLeaf: boolean;
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

/**
 * 逗号分割字符串输入对话框
 */
export declare const HuiStringArrayInputDialog: SFCWithInstall<DefineComponent<{
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    label: {
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
    title: {
        type: PropType<string>;
        required: true;
        default: string;
    };
    label: {
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
    title: string;
    label: string;
    placeholder: string;
    tips: boolean;
}, {}>> & Record<string, any>;

/**
 * 富文本编辑弹窗
 */
export declare const HuiTinymceDialog: SFCWithInstall<DefineComponent<{
    width: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    linkAttribute: {
        type: PropType< HuiTinymceDialogLink[]>;
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
    onSubmit: (tinymceContent: string, row: any, field: string) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    width: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    height: {
        type: PropType<string | number>;
        required: true;
        default: string;
    };
    linkAttribute: {
        type: PropType< HuiTinymceDialogLink[]>;
        required: true;
        default: () => {
            title: string;
            value: string;
        }[];
    };
}>> & {
    onOnSubmit?: (tinymceContent: string, row: any, field: string) => any;
}, {
    width: string | number;
    height: string | number;
    linkAttribute: HuiTinymceDialogLink[];
}, {}>> & Record<string, any>;

/**
 *  链接支持的属性
 */
declare interface HuiTinymceDialogLink {
    /** 链接标题 */
    title: string;
    /** 链接对象的key */
    value: string;
}

export declare const HuiTool: {
    ok: (msg: any) => void;
    err: (msg: any) => void;
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

