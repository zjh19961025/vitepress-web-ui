import { h, render } from 'vue'
import confirmComponent from './message-box.vue'
import { to } from "@hua5/hua5-utils"

export interface PayLoadType {
  /** 弹窗提示文字内容· */
  tip?:string,
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
  /** 弹窗样式类名 */
  className?: string,
}
export const hua5MsgBox = (title: string, payLoad:PayLoadType = {}) => {
  const { iconType = 'info', type = 'info', cancelText, confirmText, width, className, tip } = payLoad
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
      resolve(false)
      render(null, document.body)
    }

    // 1. 生成 vnode
    const vnode = h(confirmComponent, {
      title,
      tip,
      iconType,
      type,
      cancelText,
      confirmText,
      width,
      className,
      cancelHandler,
      confirmHandler,
      closeBox,
    })

    // 2. render 渲染
    render(vnode, document.body)
  })
}

export const msgBox = (title: string, payLoad?:PayLoadType) => {
  return to(hua5MsgBox(title, payLoad))
}
