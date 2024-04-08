import { ElMessage } from 'element-plus'

export const msgTool = {
  /**
   * 成功消息提示
   * @param msg
   */
  ok: (msg) => {
    ElMessage({
      message: msg,
      type: 'success',
    })
  },
  /**
   * 成功消息提示
   * @param msg
   */
  err: (msg) => {
    ElMessage({
      message: msg,
      type: 'error',
    })
  },
}
