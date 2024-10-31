import { HuiTinymcePropsType } from '../HuiTinymce/type';

/**
 * HuiTinymceDialogPropsType 需要的props参数
 */
export type HuiTinymceDialogPropsType = HuiTinymcePropsType;
/**
 * HuiTinymceDialog emit事件
 */
export type HuiTinymceDialogEmitType = {
    onSubmit: [tinymceContent: string, row?: any, field?: string];
};
