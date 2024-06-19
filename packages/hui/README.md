## 组件添加
1. src 编写组件
```
ComponentName
  - ComponentName.vue // 组件实现
  - type.ts  // 组件相关类型，使用module形式
  - index.ts // 导出
  - ... // 其他
```
2. components.ts 中进行导出
3. components-install-list.ts 中进行添加
4. global.d.ts 中 的 GlobalComponents 进行全局说明

##### volar支持 说明
```json
// 在 主工程中添加types
// If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@hua5/hua5-web-ui/global"]
  }
}
```

## hooks添加
在hooks中参照添加

## 工具方法添加： utils 中进行添加


## Vue属性添加：
1. 在 utils/install-helper/install.ts 中进行添加
2. 在 global.d.ts 中 的 ComponentCustomProperties 进行全局说明

## 发布：
1. 添加用户
 * 在 cmd 中进行添加用户，[查看账号密码](https://packages.aliyun.com/npm/npm-registry/guide)，在页面中点看账号处的小眼睛查看
```
  // 在 cmd 中进行添加用户
  pnpm adduser
```
2. 发布: 在对应包的文件夹中
```
  pnpm publish
```

#### 富文本组件使用说明
1. 将example/public/tinymce的文件夹复制到项目的public文件夹下
2. 在项目的index.html中引入tinymce.min.js
   ``` html
   <script src="/tinymce/tinymce.min.js"></script>
   ```
3. 安装@tinymce/tinymce-vue
    pnpm add --save "@tinymce/tinymce-vue@^5"


## css 相关
1. element-plus 颜色覆盖
   1. 参考`example`中 `/src/css/element/index.scss`文件，直接把该文件复制到项目中，将需要被覆盖的样式直接修改为对应的颜色即可。

      ```scss
      $--colors: (
        "primary": (
          "base": #409eff,
        ),
       ...
      );
      ...
      
      @forward "element-plus/theme-chalk/src/common/var.scss" with (
        $colors: $--colors,
        $text-color: $--text-colors,
        $border-color: $--border-colors,
        $bg-color: $--bg-colors,
      );
      ```

   2. 将此文件在`vite.config.ts`中引入

      ```typescript
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/css/element/index.scss" as *;`,
          },
      	},
      },
      ```