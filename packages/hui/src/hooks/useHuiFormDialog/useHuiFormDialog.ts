import { ref, getCurrentInstance, toValue } from 'vue'
import { HuiTool } from "../../utils/index"
import type { UseHuiFormDialogForm, UseHuiFormDialogParams } from "./type"

/**
 * 表单弹框通用逻辑
 * 集成 el-dialog 组件 的hooks, props 透传到 el-dialog
 * @param {*} UseHuiFormDialogParams
 * @returns
 * @example
 * formDialogTest.value?.open()
 * <FormDialogTest ref="formDialogTest" top="20vh" width="40vw" @open="beforeOpen" @close="beforeClose" />
 */
export const useHuiFormDialog = function({
  formModel = {},
  showSuccessTip = true,
  isNeedDoubleConfirm = false,
  doubleConfirmConfig = {
    message: "是否确认提交?",
    payload: { iconType: 'success' },
  },
  beforeSubmit,
  submitCheck,
  afterSubmit,
  doubleConfirmAction,
  put,
  post }: UseHuiFormDialogParams,
) {
  const instance = getCurrentInstance()

  const show = ref(false)
  const form = ref<UseHuiFormDialogForm>({})
  const formLoading = ref(false)
  const confirmLoading = ref(false)
  const formRef = ref<any>(null)

  const open = (id = "", defaultFormValue = {}) => {
    resetLoading()
    resetFormFields()
    form.value = { ...toValue(formModel), ...toValue(defaultFormValue) }
    form.value.id = id
    show.value = true
  }

  const close = () => {
    show.value = false
  }

  function resetLoading() {
    formLoading.value = false
    confirmLoading.value = false
  }

  function resetFormFields() {
    if (formRef.value) formRef.value?.resetFields()
  }

  /**
   * 处理提交
   */
  const handleSubmit = () => {
    formRef?.value?.validate(async(valid: any) => {
      if (valid) {
        confirmLoading.value = true
        // 用于表单数据的重新构造
        let submitForm = { ...form.value }
        if (beforeSubmit) {
          const returnsubmitForm = beforeSubmit(submitForm)
          if (returnsubmitForm) submitForm = returnsubmitForm
        }
        // 控制提交格式
        const removeKeys = []
        for (const key in submitForm) {
          if (!Object.keys(toValue(formModel))?.includes(key)) {
            removeKeys.push(key)
          }
        }
        for (const key of removeKeys) {
          delete submitForm[key]
        }

        // 用于验证是否能提交表单
        if (submitCheck) {
          const isCanSubmit = submitCheck(submitForm)
          if (!isCanSubmit) {
            confirmLoading.value = false
            return
          }
        }
        // 二次确认处理
        if (toValue(isNeedDoubleConfirm) || doubleConfirmAction) {
          showDoubleConfirm(submitForm)
          return
        }
        // 提交表单
        submit(submitForm)
      } else {
        HuiTool.err('验证未通过')
        confirmLoading.value = false
        return false
      }
    })
  }

  /**
   * 二次确认
   * @param submitForm
   * @returns
   */
  const showDoubleConfirm = async(submitForm: UseHuiFormDialogForm) => {
    // 自定义二次确认
    if (doubleConfirmAction) {
      doubleConfirmAction(submitForm, submit, cancelSubmit)
      return
    }
    const [, res] = await HuiTool.msgBox(doubleConfirmConfig.message, doubleConfirmConfig.payload)
    res ? submit(submitForm) : cancelSubmit()
  }
  // 二次确认提交
  const submit = async(submitForm: UseHuiFormDialogForm) => {
    if (!put && !post) {
      confirmLoading.value = false
      HuiTool.err('没有 put 或 post 提交方法')
      return
    }
    const [, res] = form.value.id ? await put(form.value.id, submitForm) : await post(submitForm)
    confirmLoading.value = false
    if (afterSubmit) afterSubmit(res)
    if (!res) return false
    submitOk(res)
  }
  // 二次确认取消提交
  const cancelSubmit = () => {
    confirmLoading.value = false
  }

  /**
   * 提交成功
   * @param res
   */
  const submitOk = (res: any) => {
    showSuccessTip && HuiTool.ok('提交成功')
    instance?.proxy?.$emit('submitOk', res)
    close()
  }

  const handleCancel = () => {
    close()
  }

  return {
    show,
    form,
    formRef,
    formLoading,
    confirmLoading,

    open,
    close,
    resetLoading,
    resetFormFields,
    handleSubmit,
    handleCancel,
  }
}
