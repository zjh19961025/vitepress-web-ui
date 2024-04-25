# 颜色使用

### web-ui的颜色
对 web-ui 颜色覆盖：重写 src/css/corlor 中的颜色。
在项目的公共css文件中将需要被覆盖的颜色进行重写即可。

```css
:root {
  --color-primary: xxx;
  --color-danger: xxx;
  ...
}
```

### element-plus 颜色
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

### 公共css
1. 对于之前实现的公共class, 使用 uno 的 shortcuts 来实现
2. 在 config/uno-preset 添加公共的 shortcuts