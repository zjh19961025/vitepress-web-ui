# 颜色使用

### web-ui的颜色
对 web-ui 颜色覆盖：对 unocss中的颜色进行覆盖
```
theme: {
  colors:{
    primary: '#409eff'
  },
  textColor:{
    normal: '#F5F7FA',
  },
  backgroundColor:{
    normal: '#F5F7FA',
  },
  borderColor: {
    normal: "#dcdfe6",
  } 
}
```

### element-plus 颜色
1. 使用scss进行颜色定义 和 提前声明

```scss
/**
* 对 element-plus 进行颜色覆盖，和提前声明
**/
$--colors: (
  "primary": (
    "base": #409eff,
  ),
  "success": (
    "base": #1ca817,
  ),
  "warning": (
    "base": #eca232,
  ),
  "danger": (
    "base": #ca2020,
  ),
  "error": (
    "base": #ca2020,
  ),
  "info": (
    "base": #909399,
  ),
);

$--text-colors: (
  "primary": #303133,
  "regular": #606266,
  "secondary": #909399,
  "placeholder": #c0c4cc,
  "disabled": #c0c4cc,
);

$--bg-colors: (
  "": #f5f7fa,
  "page": #f5f7fa,
  "overlay": #ffffff,
);

$--border-colors: (
  "": #dcdfe6,
  "light": #e4e7ed,
  "lighter": #ebeef5,
  "extra-light": #f2f6fc,
  "dark": #d4d7de,
  "darker": #cdd0d6,
);

@forward "element-plus/theme-chalk/src/common/var.scss" with (
  $colors: $--colors,
  $text-color: $--text-colors,
  $border-color: $--border-colors,
  $bg-color: $--bg-colors
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