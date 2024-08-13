# theme
theme 挂载到了 window 和 vue全局属性
```
export function install(app: App, options?: any) {
  window.theme = uiTheme
  app.config.globalProperties.theme = window.theme
}
```

# css 中使用颜色
**使用 [theme('颜色定义')](https://unocss.dev/transformers/directives#theme) 指令**
 ```css
    color: theme('colors.normal')
    background: theme('textColor.normal')
```

# js中的使用颜色
**使用 window.theme**
```js
window.theme.colors?.theme // 基础色
window.theme.textColor?.in_theme // 文本颜色
window.theme.borderColor?.normal // border颜色
window.theme.backgroundColor?.normal // bg 颜色
```

# 模板中：
* 使用类
```
bg-normal
text-normal
b-(normal solid 2)
```

* 使用变量: theme 已挂载到vue全局属性
```
theme.colors?.theme // 基础色
theme.textColor?.in_theme // 文本颜色
theme.borderColor?.normal // border颜色
theme.backgroundColor?.normal // bg 颜色
```