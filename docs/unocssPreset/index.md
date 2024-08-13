# 安装
```bash
pnpm add @hua5/unocss-preset
```

* package.json
``` json
{
    "dependencies": {
        "@hua5/unocss-preset": "^1.0.3",
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
``` ts
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetHui } from '@hua5/unocss-preset'
import appTheme from './unocss.theme'
import hua5Shortcuts from './unocss.shortcuts.ts'
export default defineConfig({
  // 快捷方式
  shortcuts: [
    // 自定义快捷方式
    ...hua5Shortcuts,
  ],
  // 主题
  theme: appTheme,
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  // 预设
  presets: [
    presetHui(),
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
import unocssPreset from '@hua5/unocss-preset'

// vue 相关
app.use(unocssPreset, appTheme)
```