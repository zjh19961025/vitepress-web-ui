import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { mdPlugin } from './config/plugins'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { sidebar } from './config/sidebar'
import { nav } from './config/navbar'
// 自动导入支持
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  title: "hua5-web-ui",
  description: "hua5-web-ui",
  vite: {
    plugins: [
      UnoCSS(),
      vueSetupExtend(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        // 生成的文件名和位置
        dts: 'declare-auto/auto-import.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        // 要搜索组件的目录,设置的目录下的组件会自动导入
        dirs: ['src/components'],
        // 组件有效扩展名
        extensions: ['vue'],
        // 生成的文件名和位置
        dts: 'declare-auto/components.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'local'
    }
  },
})
