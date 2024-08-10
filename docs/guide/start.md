# 快速开始

## 引入

```ts{3-5,10-13}
// main.ts
import { createApp } from 'vue'
import '@hua5/hua5-web-ui/style'
import hua5WebUI from "@hua5/hua5-web-ui"
import { huiDelegate } from '@/delegate'
import App from './App.vue'

const app = createApp(App)

app.use(hua5WebUI, {
  delegate: huiDelegate,
  isInstallComponents: false // 是否自动安装组件, 默认为false
})
app.mount('#app')

```

## HuiDelegate 配置说明

```ts
import type { HuiDelegate } from "@hua5/hua5-web-ui"

export const huiDelegate: HuiDelegate = {
  // 返回区域树
  getRegionTree,
  // oss 上传
  putOss,
}
```

## Volar 支持
在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@hua5/hua5-web-ui/global"]
  }
}
```