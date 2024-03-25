// auto-import 配置
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Hua5UIResolver } from "@hua5/hua5-web-ui/config/resolver"

export default function createAutoComponents() {
  return AutoImport({
    // 导入预设模块，如不在预设中，请自定义配置
    imports: ["vue"],
    // 是否允许在 template 上使用
    vueTemplate: true,
    // 使用预设解析器解析第三方组件库
    resolvers: [
      ElementPlusResolver(),
      Hua5UIResolver(),
    ],
    // 解决 AutoImport 导致的 eslint 静态检查报错
    eslintrc: {
      enabled: true,
      filepath: "build/description/.eslintrc-auto-import.json",
      globalsPropValue: true,
    },
  })
}
