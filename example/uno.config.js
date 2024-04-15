import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetHui } from '@hua5/hua5-web-ui/config/uno-preset/hui-preset'

export default defineConfig({
  // 规则
  rules: [],
  // 快捷方式
  shortcuts: [],
  // 主题
  theme: {},
  // 变体
  variants: [],
  // 提取器
  extractors: [],
  // 转换器
  transformers: [
    // 指令转换器
    transformerDirectives(),
    // 变体组转换器
    transformerVariantGroup(),
  ],
  // 预设
  presets: [
    presetHui(),
  ],
})
