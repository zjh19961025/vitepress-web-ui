import { UseHuiFormDialogForm, UseHuiFormDialogParams } from './type';
import { Ref } from 'vue';

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
