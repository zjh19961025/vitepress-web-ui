import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from "./build/index.js"

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // 根据当前工作目录的 mode 加载 .env 文件
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      // 导入时想要省略的扩展名列表
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/css/element/index.scss" as *;`,
        },
      },
    },
  }
})
