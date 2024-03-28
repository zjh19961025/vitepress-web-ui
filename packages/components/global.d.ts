// GlobalComponents for Volar
declare module 'vue' {
  /**
   * 声明全局组件，便于 volar 识别
   */
  export interface GlobalComponents {
    HuiTest: typeof import('@hua5/hua5-web-ui')['HuiTest']
  }

  /**
   * 已添加到原型上的
   */
  interface ComponentCustomProperties {
    addUnit: typeof import('@hua5/hua5-web-ui')['addUnit']
    addStyle: typeof import('@hua5/hua5-web-ui')['addStyle']
  }
}

export {}
