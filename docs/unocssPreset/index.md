# 安装
```bash
pnpm add @zjh/unocss-preset
```

* package.json
``` json
{
    "dependencies": {
        "@zjh/unocss-preset": "^1.0.3",
    },
    "devDependencies": {
        "@unocss/preset-rem-to-px": "^0.59.4",
        "@unocss/transformer-directives": "^0.60.4",
        "@unocss/transformer-variant-group": "^0.60.4",
        "sass": "^1.74.1",
        "unocss": "^0.58.9",
    }
}

```

# 配置
**uno.config.js**
``` ts
// uno.config.js
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetHui } from '@zjh/unocss-preset/presetHui' // 核心配置， 基础预设引入 很重要
import appTheme from './unocss.theme' // 主题定义
import addminShortcuts from './unocss.shortcuts.ts' // 快捷方式定义
export default defineConfig({
  // 快捷方式，自定义配置， 可选
  shortcuts: [
    // 自定义快捷方式
    ...addminShortcuts,
  ],
  // 主题
  theme: appTheme, // 自定义配置, 可选
  transformers: [
    transformerDirectives(), // 核心配置
    transformerVariantGroup(), // 核心配置
  ],
  // 预设
  presets: [
    presetHui(), // 核心配置
  ],
})
```
### 颜色配置 unocss.theme.ts
``` js
// unocss.theme.ts文件
const theme = {
  colors: {
    // 颜色定义
  },
  textColor: {
    // 颜色定义
  },
  backgroundColor: {
    // 颜色定义
  },
  borderColor: {
    // 颜色定义
  },
}
export default theme
```
### 其他配置
* unocss.shortcuts.ts: shortcuts 配置
* 其他


# 全局引入
```
// main.js
import appTheme from '../unocss.theme'
import unocssPreset from '@zjh/unocss-preset'

// vue 相关
app.use(unocssPreset, appTheme)
```

## 发布
1. [pnpm 账号配置](https://thoughts.aliyun.com/workspaces/645b543034e5e2001a169b10/docs/660a3fd32d39760001c10ad0)
2. 发布:
  * **进入 packages/unocss-preset 目录**
  ``` bash
    pnpm publish // 发布 unocss-preset
  ```