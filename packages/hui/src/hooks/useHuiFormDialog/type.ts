import type { Ref } from 'vue'
export interface UseHuiFormDialogForm {
  id?: string | number,
  [key: string]: any,
}
export interface UseHuiFormDialogConfirm {
  message: string,
  payload?: PayLoadType,
}
export interface PayLoadType {
  /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
  iconType?:'info' | 'success' | 'question',
  /** 控制图标展示的颜色 */
  type?: "info" | "success" | "danger" | "warning",
  /** 取消按钮的文本 */
  cancelText?:string,
  /** 确定按钮的文本 */
  confirmText?:string
  /** 弹窗宽度 */
  width?: number
}

export interface UseHuiFormDialogParams {
  /**
   * 编辑接口
   */
  put?: any | null,
  /**
   * 新增接口
   */
  post?: any | null,
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
  isNeedDoubleConfirm?: boolean | Ref<boolean> | any,
  /**
   * 二次确认弹框配置，不传使用默认值
   */
  doubleConfirmConfig?: UseHuiFormDialogConfirm,
  /**
   * 二次确认方法，优先级高于配置, submitForm：要提交的表单; submitAction：提交吹; cancelAction: 取消提交处理
   */
  doubleConfirmAction?: (submitForm: UseHuiFormDialogForm, submitAction: (submitForm: UseHuiFormDialogForm) => void, cancelAction: () => void) => void
}
