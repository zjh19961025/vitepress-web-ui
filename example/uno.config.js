import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetHua5 } from '@hua5/hua5-web-ui/config/uno-preset'

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
  // 预飞行
  preflights: [],
  // 分层
  layers: {
    // 基础层
    base: 1,
    // 组件层
    components: 2,
    // 工具层
    utilities: 3,
    // 默认层
    default: 4,
  },
  // 预设
  presets: [
    presetUno(),
    presetHua5(),
  ],
})
