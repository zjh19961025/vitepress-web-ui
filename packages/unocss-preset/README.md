## unocss
1. 在 js 文件中使用 unocss 需要增加注释标记, 用于 unocss 扫描解析
``` js
// @unocss-include
```

## css 相关
#### 颜色使用

1. 对 unocss-preset 颜色覆盖：

   * 对 在js中的颜色进行覆盖

     ```
     // unocss.theme.ts文件
     const theme = {
       colors: {
         primary: "pink",
       },
       backgroundColor: {
         normal: "red",
       },
     }
     export default theme
     
     // main.js
     import appTheme from '../unocss.theme'
     import unocssPreset from '@hua5/unocss-preset'

     app.use(unocssPreset, appTheme)
     ```

   * 对于unocss的颜色覆盖

     ```
     // 项目中的 uno.config.js
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
   
3. 颜色在js中的使用，使用 window.theme

   ```js
   window.theme.colors?.theme // 基础色
   window.theme.textColor?.in_theme // 文本颜色
   window.theme.borderColor?.normal // border颜色
   window.theme.backgroundColor?.normal // bg 颜色
   ```

4. css 中：使用 theme('颜色定义')

   ```css
   color: theme('colors.normal')
   background: theme('textColor.normal')
   ```

5. 模板中：

   * 使用类

     ```
     bg-normal
     text-normal
     b-(normal solid 2)
     ```

   * 使用变量: theme 已挂载到原型

     ```
     theme.colors?.theme // 基础色
     theme.textColor?.in_theme // 文本颜色
     theme.borderColor?.normal // border颜色
     theme.backgroundColor?.normal // bg 颜色
     ```

#### 公共css

1. 对于之前实现的公共class, 使用 uno 的 shortcuts 来实现
2. 在 src/shortcuts 添加公共的 shortcuts