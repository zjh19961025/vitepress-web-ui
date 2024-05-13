import { ref, toValue } from "vue"
/**
 * 普通弹框通用逻辑
 * 集成 el-dialog 组件 的hooks，props 透传到 el-dialog
 * @param { getData, beforeOpen, beforeClose }
 * @returns
 * @example
 *  normalDialogTest.value?.open(id, payload)
 * <NormalDialogTest ref="formDialogTest" top="40vh" width="60vw" @open="openNormalDialog" @close="closeNormalDialog" />
 */
export const useHuiDialog = function() {
  const id = ref('')
  const show = ref(false)
  const payload = ref({})
  // 加载
  const dialogLoading = ref(false)
  const confirmLoading = ref(false)

  const open = (dataId = "", info = {}) => {
    id.value = dataId
    payload.value = toValue(info)
    show.value = true
  }

  const close = () => {
    show.value = false
  }

  return {
    id,
    show,
    payload,
    dialogLoading,
    confirmLoading,
    open,
    close,
  }
}
