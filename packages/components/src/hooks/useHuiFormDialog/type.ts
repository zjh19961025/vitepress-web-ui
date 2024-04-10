export interface UseHuiFormDialogForm {
  id?: string | number,
  [key: string]: any,
}
export interface UseHuiFormDialogConfirm {
  message: string,
  title?: string,
  cancelButtonText?: string,
  confirmButtonText?: string,
  [key: string]: any,
}

export interface UseHuiFormDialogParams {
  /**
   * 表单格式
   */
  formModel: UseHuiFormDialogForm,
  /**
   * 是否显示提交成功提示
   */
  showSuccessTip?: boolean,
  /**
   * 提交之前的处理，可用于转化提交的表单
   */
  beforeSubmit?: (submitForm: UseHuiFormDialogForm) => UseHuiFormDialogForm,
  /**
   * 提交之前的检查
   */
  submitCheck?: (submitForm: UseHuiFormDialogForm) => boolean,
  /**
   * 提交成功之后的处理
   */
  afterSubmit?: (submitForm: UseHuiFormDialogForm) => void,
  /**
   * 是否需要二次确认
   */
  isNeedDoubleConfirm?: boolean,
  /**
   * 二次确认弹框配置，不传使用默认值
   */
  doubleConfirmConfig?: UseHuiFormDialogConfirm,
  /**
   * 二次确认方法，优先级高于配置, submitForm：要提交的表单; submitAction：提交吹; cancelAction: 取消提交处理
   */
  doubleConfirmAction?: (submitForm: UseHuiFormDialogForm, submitAction: (submitForm: UseHuiFormDialogForm) => void, cancelAction: () => void) => void
  put?: any | null,
  post?: any | null,
}
