import { defineConfig } from 'vite'
import {
  createVue,
  createUnocss,
  createDts,
} from "./build"

export default defineConfig({
  plugins: [
    createVue(),
    createUnocss(),
    createDts(),
  ],
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  // 打包配置
  build: {
    rollupOptions: {
      // 排除不需要的依赖
      external: [
        'vue', 'unocss',
        'element-plus', "zjh-utils", "zjh-web-lib", "@hua5/unocss-preset",
        "@tinymce/tinymce-vue", "@element-plus/icons-vue"],
      output: [
        {
          // 打包成 es module
          format: 'es',
          // 重命名
          entryFileNames: '[name].js',
          // 打包目录和开发目录对应
          preserveModules: true,
          // 指定保留模块结构的根目录
          preserveModulesRoot: 'src',
        },
      ],
    },
    // 库打包选项
    lib: {
      // 指定入口文件
      entry: 'src/index.ts',
      // 组件库名称
      name: 'hua5-web-ui',
    },
  },
})
