/**
 * 全局颜色挂载，便于 js 中使用 unocss 中的颜色
 * window.theme 完全等价于 unocss 中的theme
 */
import type { App } from 'vue'
import { uiTheme, type UITheme } from "./theme"
import { objectUtils } from '@hua5/hua5-utils'

/**
 * Window 全局变量声明
 */
declare global {
  interface Window {
    /** 主题颜色 */
    theme: UITheme;
  }
}

export function install(app: App, options?: any) {
  window.theme = uiTheme
  if (options) {
    const theme = objectUtils.deepMerge(objectUtils.deepClone(uiTheme), objectUtils.deepClone(options))
    window.theme = theme
  }
  app.config.globalProperties.theme = window.theme
}
