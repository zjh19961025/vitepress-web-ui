# docs

## 添加导航栏

1. 在`.vitepress/config/navbar.ts`文件中进行添加，每配置一个对象，就会增加一个导航栏。

   ```typescript
   export const nav = [
     { text: '首页', link: '/' },
     { text: '指南', link: '/guide/index' },
     { text: '组件', link: '/components/index' },
   ]
   ```

2. 根据上面每个对象的`link`，创建对应的目录及`md`文件，创建文件的位置必须和`link`属性指定的路径一致，否则无法匹配。

## 添加侧边栏

1. 在`.vitepress/config/sidebar.ts`文件中进行添加。

   **注意：** 每个导航栏下的侧边栏是通过路径匹配的。

   ```typescript
   export const sidebar = {
     // 当位于 guide 路径时，会显示此侧边栏
     '/guide/': [
       {
         // 侧边栏标题
         text: '指南',
         // 侧边栏具体配置
         items: [
           { text: '安装', link: '/guide/' },
           { text: '快速开始', link: '/guide/start' },
         ],
       },
     ],
     '/components/': [
       {
         text: '组件',
         items: [
           { text: '倒计时', link: '/components/HuiCountDownButton' },
         ],
       },
     ],
   }
   ```

2. 根据上面每个对象的`link`，创建对应的目录及`md`文件，创建文件的位置必须和`link`属性指定的路径一致，否则无法匹配。

### 编写组件文档

1. 编写组件

   **必须**在`examples`目录下增加组件的示例代码。

   **例：** 在`examples`创建一个`HuiCountDownButton`的文件夹，再创建一个`CountDownButton.vue`来编写真正的组件代码。

   ```vue
   CountDownButton.vue
   
   <script setup lang="ts">
   js逻辑
   </script>
   
   <template>
     dom标签
   </template>
   ```

2. 文档编写

   在`components`中创建对应的`md`文件来书写文档，**必须**使用`:::demo`来包裹组件路径，这样组件的示例及代码就都编写完成了。

   **例：** 在`components`下创建`HuiCountDownButton.md`文件来编写其说明文档。

   ```markdown
   # 倒计时组件
   
   ## 用法
   使用type来确定样式是 button 还是 text
   
   :::demo
   HuiCountDownButton/CountDownButton
   :::
   ```

