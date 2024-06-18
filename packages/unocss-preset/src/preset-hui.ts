import { presetUno, type PresetOptions } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import commonShortcuts from './shortcuts/common-shortcuts'
import adminShortcuts from './shortcuts/admin-shortcuts'
import { uiTheme as theme } from "./theme"
import rules from './rules'
export function presetHui(): PresetOptions {
  return {
    name: 'presetHui',
    // 自定义规则
    rules,
    // 主题
    // 基础颜色：colors中定义
    // 功能颜色：功能属性中进行定义
    // 注意：各个功能颜色可重名，但不能和基础颜色重名
    theme,
    // 快捷方式
    shortcuts: [
      ...commonShortcuts,
      ...adminShortcuts,
    ],
    autocomplete: {
      templates: [
        'bg-$backgroundColor',
        '(text|c)-$textColor',
        '(border|b)-$borderColor',
      ],
    },
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
