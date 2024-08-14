# [说明文档](http://192.168.31.5/front-end/hua5-web-ui/unocssPreset/)


# 特别说明：
### 导出 和 打包
导出使用：package.json
``` json
{
"exports": {
    ".": {
      "types": "./types/index.d.ts", // 类型声明文件
      "import": "./src/index.ts" // 源码导出使用
    },
    "./presetHui": "./src/preset-hui/index.ts",
    "./global": {
      "types": "./global.d.ts"
    }
  },
}
```
* 使用的是源码导出使用，打包仅用于生成类型声明文件 types/index.d.ts
* 如果需要更新 声明文件，那么可运行打包命令
    ```
    pnpm build
    ```