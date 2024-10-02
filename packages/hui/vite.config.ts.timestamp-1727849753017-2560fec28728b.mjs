// vite.config.ts
import { defineConfig } from "file:///C:/project/hua5-web-ui/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2_sass@1.77.5/node_modules/vite/dist/node/index.js";

// build/vue.js
import vue from "file:///C:/project/hua5-web-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.2_sass@1.77.5__vue@3.4.29_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
function createVue() {
  return vue();
}

// build/unocss.js
import UnoCSS from "file:///C:/project/hua5-web-ui/node_modules/.pnpm/unocss@0.58.9_postcss@8.4.38_rollup@4.18.0_vite@5.3.1_@types+node@20.14.2_sass@1.77.5_/node_modules/unocss/dist/vite.mjs";
function createUnoCSS() {
  return UnoCSS();
}

// build/dts.js
import dts from "file:///C:/project/hua5-web-ui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_rollup@4.18.0_typescript@5.4.5_vite@5.3.1_@types+node@20.14.2_sass@1.77.5_/node_modules/vite-plugin-dts/dist/index.mjs";
function createDts() {
  return dts({
    // 输出目录
    outDir: ["types", "dist"],
    // 将动态引入转换为静态（例如：`import('vue').DefineComponent` 转换为 `import { DefineComponent } from 'vue'`）
    staticImport: true,
    // 将所有的类型合并到一个文件中
    rollupTypes: true
  });
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    createVue(),
    createUnoCSS(),
    createDts()
  ],
  resolve: {
    // 导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  // 打包配置
  build: {
    rollupOptions: {
      // 排除不需要的依赖
      external: [
        "vue",
        "unocss",
        "element-plus",
        "@hua5/hua5-utils",
        "@hua5/hua5-web-lib",
        "@hua5/unocss-preset",
        "@tinymce/tinymce-vue",
        "@element-plus/icons-vue"
      ],
      output: [
        {
          // 打包成 es module
          format: "es",
          // 重命名
          entryFileNames: "[name].js",
          // 打包目录和开发目录对应
          preserveModules: true,
          // 指定保留模块结构的根目录
          preserveModulesRoot: "src"
        }
      ]
    },
    // 库打包选项
    lib: {
      // 指定入口文件
      entry: "src/index.ts",
      // 组件库名称
      name: "hua5-web-ui"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdnVlLmpzIiwgImJ1aWxkL3Vub2Nzcy5qcyIsICJidWlsZC9kdHMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0XFxcXGh1YTUtd2ViLXVpXFxcXHBhY2thZ2VzXFxcXGh1aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxccHJvamVjdFxcXFxodWE1LXdlYi11aVxcXFxwYWNrYWdlc1xcXFxodWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3QvaHVhNS13ZWItdWkvcGFja2FnZXMvaHVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHtcclxuICBjcmVhdGVWdWUsXHJcbiAgY3JlYXRlVW5vY3NzLFxyXG4gIGNyZWF0ZUR0cyxcclxufSBmcm9tIFwiLi9idWlsZFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIGNyZWF0ZVZ1ZSgpLFxyXG4gICAgY3JlYXRlVW5vY3NzKCksXHJcbiAgICBjcmVhdGVEdHMoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIC8vIFx1NUJGQ1x1NTE2NVx1NjVGNlx1NjBGM1x1ODk4MVx1NzcwMVx1NzU2NVx1NzY4NFx1NjI2OVx1NUM1NVx1NTQwRFx1NTIxN1x1ODg2OFxyXG4gICAgZXh0ZW5zaW9uczogWycubWpzJywgJy5qcycsICcubXRzJywgJy50cycsICcuanN4JywgJy50c3gnLCAnLmpzb24nLCAnLnZ1ZSddLFxyXG4gIH0sXHJcbiAgLy8gXHU2MjUzXHU1MzA1XHU5MTREXHU3RjZFXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gXHU2MzkyXHU5NjY0XHU0RTBEXHU5NzAwXHU4OTgxXHU3Njg0XHU0RjlEXHU4RDU2XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgJ3Z1ZScsICd1bm9jc3MnLFxyXG4gICAgICAgICdlbGVtZW50LXBsdXMnLCBcIkBodWE1L2h1YTUtdXRpbHNcIiwgXCJAaHVhNS9odWE1LXdlYi1saWJcIiwgXCJAaHVhNS91bm9jc3MtcHJlc2V0XCIsXHJcbiAgICAgICAgXCJAdGlueW1jZS90aW55bWNlLXZ1ZVwiLCBcIkBlbGVtZW50LXBsdXMvaWNvbnMtdnVlXCJdLFxyXG4gICAgICBvdXRwdXQ6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLyBcdTYyNTNcdTUzMDVcdTYyMTAgZXMgbW9kdWxlXHJcbiAgICAgICAgICBmb3JtYXQ6ICdlcycsXHJcbiAgICAgICAgICAvLyBcdTkxQ0RcdTU0N0RcdTU0MERcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcclxuICAgICAgICAgIC8vIFx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG4gICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG4gICAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU0RkREXHU3NTU5XHU2QTIxXHU1NzU3XHU3RUQzXHU2Nzg0XHU3Njg0XHU2ODM5XHU3NkVFXHU1RjU1XHJcbiAgICAgICAgICBwcmVzZXJ2ZU1vZHVsZXNSb290OiAnc3JjJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIC8vIFx1NUU5M1x1NjI1M1x1NTMwNVx1OTAwOVx1OTg3OVxyXG4gICAgbGliOiB7XHJcbiAgICAgIC8vIFx1NjMwN1x1NUI5QVx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlxyXG4gICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXHJcbiAgICAgIC8vIFx1N0VDNFx1NEVGNlx1NUU5M1x1NTQwRFx1NzlGMFxyXG4gICAgICBuYW1lOiAnaHVhNS13ZWItdWknLFxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHByb2plY3RcXFxcaHVhNS13ZWItdWlcXFxccGFja2FnZXNcXFxcaHVpXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0XFxcXGh1YTUtd2ViLXVpXFxcXHBhY2thZ2VzXFxcXGh1aVxcXFxidWlsZFxcXFx2dWUuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3QvaHVhNS13ZWItdWkvcGFja2FnZXMvaHVpL2J1aWxkL3Z1ZS5qc1wiOy8vIHZ1ZSBcdTkxNERcdTdGNkVcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZ1ZSgpIHtcclxuICByZXR1cm4gdnVlKClcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHByb2plY3RcXFxcaHVhNS13ZWItdWlcXFxccGFja2FnZXNcXFxcaHVpXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0XFxcXGh1YTUtd2ViLXVpXFxcXHBhY2thZ2VzXFxcXGh1aVxcXFxidWlsZFxcXFx1bm9jc3MuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3QvaHVhNS13ZWItdWkvcGFja2FnZXMvaHVpL2J1aWxkL3Vub2Nzcy5qc1wiOy8vIHVub2NzcyBcdTkxNERcdTdGNkVcclxuaW1wb3J0IFVub0NTUyBmcm9tIFwidW5vY3NzL3ZpdGVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVW5vQ1NTKCkge1xyXG4gIHJldHVybiBVbm9DU1MoKVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdFxcXFxodWE1LXdlYi11aVxcXFxwYWNrYWdlc1xcXFxodWlcXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RcXFxcaHVhNS13ZWItdWlcXFxccGFja2FnZXNcXFxcaHVpXFxcXGJ1aWxkXFxcXGR0cy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdC9odWE1LXdlYi11aS9wYWNrYWdlcy9odWkvYnVpbGQvZHRzLmpzXCI7Ly8gZHRzIFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUR0cygpIHtcclxuICByZXR1cm4gZHRzKHtcclxuICAgIC8vIFx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxyXG4gICAgb3V0RGlyOiBbJ3R5cGVzJywgXCJkaXN0XCJdLFxyXG4gICAgLy8gXHU1QzA2XHU1MkE4XHU2MDAxXHU1RjE1XHU1MTY1XHU4RjZDXHU2MzYyXHU0RTNBXHU5NzU5XHU2MDAxXHVGRjA4XHU0RjhCXHU1OTgyXHVGRjFBYGltcG9ydCgndnVlJykuRGVmaW5lQ29tcG9uZW50YCBcdThGNkNcdTYzNjJcdTRFM0EgYGltcG9ydCB7IERlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdgXHVGRjA5XHJcbiAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAvLyBcdTVDMDZcdTYyNDBcdTY3MDlcdTc2ODRcdTdDN0JcdTU3OEJcdTU0MDhcdTVFNzZcdTUyMzBcdTRFMDBcdTRFMkFcdTY1ODdcdTRFRjZcdTRFMkRcclxuICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gIH0pXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxTQUFTLG9CQUFvQjs7O0FDQ2xVLE9BQU8sU0FBUztBQUVELFNBQVIsWUFBNkI7QUFDbEMsU0FBTyxJQUFJO0FBQ2I7OztBQ0pBLE9BQU8sWUFBWTtBQUVKLFNBQVIsZUFBZ0M7QUFDckMsU0FBTyxPQUFPO0FBQ2hCOzs7QUNKQSxPQUFPLFNBQVM7QUFFRCxTQUFSLFlBQTZCO0FBQ2xDLFNBQU8sSUFBSTtBQUFBO0FBQUEsSUFFVCxRQUFRLENBQUMsU0FBUyxNQUFNO0FBQUE7QUFBQSxJQUV4QixjQUFjO0FBQUE7QUFBQSxJQUVkLGFBQWE7QUFBQSxFQUNmLENBQUM7QUFDSDs7O0FITEEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLElBRVAsWUFBWSxDQUFDLFFBQVEsT0FBTyxRQUFRLE9BQU8sUUFBUSxRQUFRLFNBQVMsTUFBTTtBQUFBLEVBQzVFO0FBQUE7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUFPO0FBQUEsUUFDUDtBQUFBLFFBQWdCO0FBQUEsUUFBb0I7QUFBQSxRQUFzQjtBQUFBLFFBQzFEO0FBQUEsUUFBd0I7QUFBQSxNQUF5QjtBQUFBLE1BQ25ELFFBQVE7QUFBQSxRQUNOO0FBQUE7QUFBQSxVQUVFLFFBQVE7QUFBQTtBQUFBLFVBRVIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixpQkFBaUI7QUFBQTtBQUFBLFVBRWpCLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUE7QUFBQSxNQUVQLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
