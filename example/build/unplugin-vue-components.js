// components 配置
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Hua5UIResolver } from "@hua5/hua5-web-ui/config/resolver"

export default function createAutoComponents() {
  return Components({
    // 使用预设解析器解析第三方组件库
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass',
      }),
      Hua5UIResolver(),
    ],
  })
}
