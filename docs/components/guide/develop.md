# 结构说明
1. index.ts 组件库入口
2. delegate 组件库依赖。
    * **组件库的外部依赖都在此文件中声明，由外部传入，通过 windows.huiDelegate 使用**
3. components 要导出的组件
4. directives 自定义指令
5. hooks
6. utils 和UI相关的工具方法

## 组件
1. src 编写组件
```
ComponentName
  - ComponentName.vue // 组件实现
  - type.ts  // 组件相关类型，使用module形式
  - index.ts // 导出
  - ... // 其他
```
2. src/components.ts 文件中进行导出
3. components-install-list.ts 中进行添加，当需要全局安装组件的时候，可安装组件
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

## Vue 全局属性添加
1. 在 utils/install-helper/install.ts 中进行添加
2. 在 global.d.ts 中 的 ComponentCustomProperties 进行全局说明

## 发布
1. [pnpm 账号配置](https://thoughts.aliyun.com/workspaces/645b543034e5e2001a169b10/docs/660a3fd32d39760001c10ad0)
2. 发布: 根目录
```
  pnpm publish:ui // 发布 hui 组件库
```

## 文档
#### 1. 文档编写
dev 上编写文档，**需要对 hui 中的 package.json 做修改, 将 import 指向打包的文件**
``` json{5, 5}
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js", // dist/index.js => src/index.ts
    },
    "./style": "./dist/style.css",
    "./config/*": "./config/*",
    "./global": {
      "types": "./global.d.ts"
    }
  },
}
```
#### 2. 文档发布：
在 [jenkins](http://192.168.31.5:9110/job/%E5%89%8D%E7%AB%AF/) 中点击发布(发布的是**master**分支)

## 富文本插件tinymce 使用说明
1. 将example/public/tinymce的文件夹复制到项目的public文件夹下
2. 在项目的index.html中引入tinymce.min.js
   ``` html
   <script src="/tinymce/tinymce.min.js"></script>
   ```
3. 安装@tinymce/tinymce-vue
    pnpm add --save "@tinymce/tinymce-vue@^5"


## css 相关
### element-plus 颜色覆盖
1. 参考[example工程](https://codeup.aliyun.com/hua5/web/common/hua5-web-ui/blob/master/example/src/css/element/index.scss)中的文件，可直接把该文件复制到项目中，修改对应的颜色。

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

2. 将此文件在[vite.config.ts](https://codeup.aliyun.com/hua5/web/common/hua5-web-ui/blob/master/example/vite.config.ts)中引入

```typescript
css: {
    preprocessorOptions: {
        scss: {
        additionalData: `@use "@/css/element/index.scss" as *;`,
        },
    },
},
```