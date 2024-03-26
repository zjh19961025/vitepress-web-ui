// 用于处理Vue单文件组件（.vue文件）,可以将Vue组件编译成JavaScript代码，以便在浏览器中使用
import createVue from "./vue"
// 可以直接在script标签上定义name。 如：<script lang="ts" setup name="firstPage">
// import createSetupExtend from './setup-extend'
// 通过静态分析代码，自动生成并整合所需的 CSS 样式，并通过诸如 Tree Shaking、PurgeCSS 等技术进行优化和压缩
import createUnocss from "./unocss"
// 借助 vite-plugin-dts 插件，生成 .d.ts 文件
import createDts from './dts'

// 插件集合
export {
  createVue,
  createUnocss,
  createDts,
}
