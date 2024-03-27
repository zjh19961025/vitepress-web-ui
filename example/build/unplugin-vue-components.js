/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-unresolved */
// components 配置
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { HuiResolver } from "@hua5/hua5-web-ui/config/resolver"

export default function createAutoComponents() {
  return Components({
    // 为 Components 提供的辅助文件（自动生成）
    dts: "build/description/components.d.ts",
    // 使用预设解析器解析第三方组件库
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
      }),
      HuiResolver(),
    ],
  })
}
