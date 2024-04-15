import { presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import commonShortcuts from './common-shortcuts'
import adminShortcuts from './admin-shortcuts'

export function presetHui() {
  return {
    name: 'presetHui',
    // 规则
    rules: [],
    // 快捷方式
    shortcuts: [
      ...commonShortcuts,
      ...adminShortcuts,
    ],
    // 主题
    theme: {
      colors: {
        // 基础颜色
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        ccc: 'var(--color-ccc)',
        ddd: 'var(--color-ddd)',
        eee: 'var(--color-eee)',
        // 类型颜色
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        disabled: 'var(--color-disabled)',
        special: 'var(--color-special)',
        // 背景颜色
        bg_normal: 'var(--bg-color)',
        bg_page: 'var(--bg-color-page)',
        bg_overlay: 'var(--bg-color-overlay)',
        // 文本颜色 t打头
        t_primary: "var(--text-color-primary)",
        t_regular: "var(--text-color-regular)",
        t_secondary: "var(--text-color-secondary)",
        t_placeholder: "var(--text-color-placeholder)",
        t_disabled: "var(--text-color-disabled)",
        // 边框
        b_normal: "var(--border-color)",
        b_light: "var(--border-color-light)",
        b_lighter: "var(--border-color-lighter)",
        b_extra_light: "var(--border-color-extra-light)",
        b_dark: "var(--border-color-dark)",
        b_darker: "var(--border-color-darker)",
      },
    },
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
    layers: {},
    // 预设
    presets: [
      presetUno(),
      // 转换 rem 到 px
      presetRemToPx({
      // 1单位 = 0.25*rem --> 1rem = 4px
        baseFontSize: 4,
      }),
    ],
  }
}
