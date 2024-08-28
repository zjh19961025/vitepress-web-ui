import { ElMessage } from 'element-plus'
import { msgBox, type PayLoadType } from './message-box/index.ts'

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
  /**
   * 二次确定弹窗
   */
  msgBox,
  /**
   * 图标为钩的二次确定弹窗
   */
  msgBoxSuccess: (content:string, payload:PayLoadType = {}) => {
    return msgBox(content, { iconType: "success", ...payload })
  },
  /**
   * 图标为问号的二次确定弹窗
   */
  msgBoxQues: (content:string, payload:PayLoadType = {}) => {
    return msgBox(content, { iconType: "question", ...payload })
  },
}
