import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'
// eslint-disable-next-line import/no-unresolved
import { presetHui } from '@hua5/unocss-preset/presetHui'

export default defineConfig({
  // 预设
  presets: [
    presetHui(),
  ],
  // 转换器
  transformers: [
    // 指令转换器
    transformerDirectives(),
    // 变体组转换器
    transformerVariantGroup(),
  ],
})
