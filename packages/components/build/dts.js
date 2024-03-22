// dts 配置
import dts from 'vite-plugin-dts'

export default function createDts() {
  return dts({
    // 输出目录
    outDir: ['types'],
    // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
    staticImport: true,
    // 将所有的类型合并到一个文件中
    rollupTypes: true,
  })
}
