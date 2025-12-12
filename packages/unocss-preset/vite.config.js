import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
/**
 * 主要用来生成声明文件
 * 使用端使用的还是源码引入，可查看 package.json
 */
export default defineConfig({
  plugins: [
    dts({
      // 输出目录
      outDir: ['types', "dist"],
      // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
      staticImport: true,
      // 将所有的类型合并到一个文件中
      rollupTypes: true,
    }),
  ],
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  // 打包配置
  build: {
    rollupOptions: {
      // 排除不需要的依赖
      external: ['vue', 'unocss', "zjh-utils"],
      output: [
        {
          // 打包成 es module
          format: 'es',
          // 重命名
          entryFileNames: '[name].js',
        },
      ],
    },
    // 库打包选项
    lib: {
      // 指定入口文件
      entry: 'src/index.ts',
      // 组件库名称
      name: 'unocss-preset',
    },
  },
})
