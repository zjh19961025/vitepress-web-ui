import { h, render } from 'vue'
import confirmComponent from './message-box.vue'
import { to } from "@hua5/hua5-utils"

export interface PayLoadType {
  /** 控制图标展示类型 info:叹号 success:钩 question:问号 */
  iconType?:'info' | 'success' | 'question',
  /** 控制图标展示的颜色 */
  type?: "info" | "success" | "danger" | "warning",
  /** 取消按钮的文本 */
  cancelText?:string,
  /** 确定按钮的文本 */
  confirmText?:string
}
export const hua5MsgBox = (content: string, payLoad:PayLoadType = {}) => {
  const { iconType = 'info', type = 'info', cancelText, confirmText } = payLoad
  return new Promise((resolve) => {
    // 取消按钮事件
    const cancelHandler = () => {
      resolve(false)
    }

    // 确定按钮事件
    const confirmHandler = () => {
      resolve(true)
    }

    // 关闭弹层事件
    const closeBox = () => {
      render(null, document.body)
    }

    // 1. 生成 vnode
    const vnode = h(confirmComponent, {
      content,
      iconType,
      type,
      cancelText,
      confirmText,
      cancelHandler,
      confirmHandler,
      closeBox,
    })

    // 2. render 渲染
    render(vnode, document.body)
  })
}

export const msgBox = (content: string, payLoad?:PayLoadType) => {
  return to(hua5MsgBox(content, payLoad))
}
