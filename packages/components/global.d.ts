// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    HuiTest: typeof import('@hua5/hua5-web-ui')['HuiTest']
  }
}
export {}
