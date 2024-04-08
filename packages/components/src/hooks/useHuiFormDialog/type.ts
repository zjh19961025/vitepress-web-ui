declare module "UseHuiFormDialogType" {
    export type FormVoidAction = (submitForm: FormBaseType) => void
    export type FormAnyAction = (submitForm: FormBaseType) => any
    export type FormBoolAction = (submitForm: FormBaseType) => boolean
    export interface FormBaseType {
          id?: string | number,
          [key: string]: any,
        }
    export interface DoubleConfirmConfig {
          message: string,
          title?: string,
          cancelButtonText?: string,
          confirmButtonText?: string,
          [key: string]: any,
        }

    export interface HuiFormDialogParams {
      /**
       * 表单格式
       */
      formModel: FormBaseType | object | null,
      /**
       * 是否显示提交成功提示
       */
      showSuccessTip?: boolean,
      /**
       * 提交之前的处理，可用于转化提交的表单
       */
      beforeSubmit?: null | FormAnyAction,
      /**
       * 提交之前的检查
       */
      submitCheck?: null | FormBoolAction,
      /**
       * 提交成功之后的处理
       */
      afterSubmit?: null | FormVoidAction,
      /**
       * 是否需要二次确认
       */
      isNeedDoubleConfirm?: boolean,
      /**
       * 二次确认弹框配置，不传使用默认值
       */
      doubleConfirmConfig?: DoubleConfirmConfig,
      /**
       * 二次确认方法，优先级高于配置, submitForm：要提交的表单; submitAction：提交吹; cancelAction: 取消提交处理
       */
      doubleConfirmAction?: null | ((submitForm: FormBaseType, submitAction: FormVoidAction, cancelAction: () => void) => void)
      put?: any | null,
      post?: any | null,
    }
  }
