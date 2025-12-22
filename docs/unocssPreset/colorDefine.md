# 对 unocss-preset 中的 颜色 增加 或 覆盖
### 定义颜色
* 颜色定义都在 unocss.theme.ts 中进行
* 如果和 unocss-preset 中的颜色同名，那么覆盖
``` js
// unocss.theme.ts文件
const theme = {
  colors: {
    // 通用颜色定义，
  },
  textColor: {
    // 文本专用颜色定义
  },
  backgroundColor: {
    // 背景专用颜色定义
  },
  borderColor: {
    // 边框专用颜色定义
  },
}
export default theme
```
* 说明：
1. 划分 textColor、backgroundColor、borderColor 是为了避免重名
2. 在 textColor、backgroundColor、borderColor 中定义颜色，命名可以和具体的场景关联。

### 设置在 js 中的颜色
```
// main.js
import appTheme from '../unocss.theme'
import unocssPreset from '@zjh/unocss-preset'

// vue 相关
app.use(unocssPreset, appTheme)
```

### 设置在 unocss 中的颜色
```
// uno.config.js
import theme from './unocss.theme'
export default defineConfig({
  // 主题
  theme,
})
```