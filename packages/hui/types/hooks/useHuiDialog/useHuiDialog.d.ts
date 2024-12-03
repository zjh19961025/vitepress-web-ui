import { Ref } from 'vue';
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
