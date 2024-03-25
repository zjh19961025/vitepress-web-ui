// 用于处理Vue单文件组件（.vue文件）,可以将Vue组件编译成JavaScript代码，以便在浏览器中使用
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动导入插件，在页面中使用未导入的符号，插件将自动识别并按需导入.
import createAutoImport from "./unplugin-auto-import"
// 组件自动导入插件，高效的管理和使用组件，无需导入和注册，插件将自动识别并按需导入并完成注册
import createComponents from "./unplugin-vue-components"
// 在 Vue 应用程序中启动 Vue开发者工具 以便可以在浏览器中方便的调试和测试应用程序
import VueDevTools from 'vite-plugin-vue-devtools'
// 通过静态分析代码，自动生成并整合所需的 CSS 样式，并通过诸如 Tree Shaking、PurgeCSS 等技术进行优化和压缩
import UnoCSS from "unocss/vite"

export default function createVitePlugins(viteEnv, isBuild = false) {
  // 插件集合
  const vitePlugins = []
  // 插件载入
  vitePlugins.push(vue())
  vitePlugins.push(vueJsx())
  vitePlugins.push(UnoCSS())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  // 开发工具
  if (!isBuild) {
    vitePlugins.push(VueDevTools())
  }

  // 输出集合
  return vitePlugins
}
