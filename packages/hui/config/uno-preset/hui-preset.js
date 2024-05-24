import { presetUno } from 'unocss'
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
    // 基础颜色：colors中定义
    // 功能颜色：功能属性中进行定义
    // 注意：各个功能颜色可重名，但不能和基础颜色重名
    theme: {
      colors: {
        // 基础颜色
        white: '#FFFFFF',
        black: '#000000',
        ccc: '#cccccc',
        ddd: '#dddddd',
        eee: '#eeeeee',
        // 类型颜色
        primary: '#409eff',
        success: '#1CA817',
        warning: '#ECA232',
        danger: '#CA2020',
        error: '#CA2020',
        info: '#909399',
        disabled: '#c0c4cc',
        special: '#27B3C5',
      },
      // 文本颜色
      textColor: {
        normal: "#303133",
        regular: "#606266",
        secondary: "#909399",
        placeholder: "#c0c4cc",
      },
      // 背景颜色
      backgroundColor: {
        normal: '#F5F7FA',
        page: '#F5F7FA',
        overlay: '#ffffff',
      },
      // 边框颜色
      borderColor: {
        normal: "#dcdfe6",
        light: "#e4e7ed",
        lighter: "#ebeef5",
        extra_light: "#f2f6fc",
        dark: "#d4d7de",
        darker: "#cdd0d6",
      },
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
