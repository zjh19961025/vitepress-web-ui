// GlobalComponents for Volar
// 指定了模块名为 'vue'，表示对 Vue.js 模块进行扩展。
declare module 'vue' {
  /**
   * 已添加到原型上的
   */
  interface ComponentCustomProperties {
    theme: typeof import('@zjh/unocss-preset')['uiTheme']
  }
}
export {}
