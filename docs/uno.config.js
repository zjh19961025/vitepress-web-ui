import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetHui } from '@hua5/unocss-preset/presetHui'
export default defineConfig({
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
