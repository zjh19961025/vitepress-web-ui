# 快速开始

## 引入

```ts{3-5,10-13}
// main.ts
import { createApp } from 'vue'
import 'zjh-web-ui/style'
import zjhWebUI from "zjh-web-ui"
import { huiDelegate } from '@/delegate'
import App from './App.vue'

const app = createApp(App)

app.use(zjhWebUI, {
  delegate: huiDelegate,
  isInstallComponents: false // 是否自动安装组件, 默认为false
})
app.mount('#app')

```

## HuiDelegate 配置说明

```ts
import type { HuiDelegate } from "zjh-web-ui"

export const huiDelegate: HuiDelegate = {
  // 返回区域树
  getRegionTree,
  // oss 上传
  putOss,
}
```
```ts
export declare interface HuiDelegate {
    /**
     * 地区的所有数据
     * @returns
     */
    getRegionTree?: () => any[] | Promise<any[]>;
    /**
     * 上传oss
     * @param file 文件信息
     * @returns {Promise<[any, any]>} 上传后的结果
     */
    putOss?: (file: File | Blob | any) => Promise<[any, any]>;
    /**
     * 地图相关配置
     */
    amapConfig?: {
        key: string;
        serviceHost: string;
    };
    /**
     * 其他配置
     */
    [key: string]: any;
}
```

## Volar 支持
在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["zjh-web-ui/global"]
  }
}
```