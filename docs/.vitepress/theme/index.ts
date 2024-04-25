import { h } from 'vue'
import "virtual:uno.css";
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// const modules = import.meta.glob('../../**/**/*.vue')

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);

    // 挂载组件
    // for (const path in modules) {
    //   modules[path]().then((mod) => {
    //     const component = mod.default
    //     console.log(component,mod.default.name);
        
    //     app.component(mod.default.name, component)
    //   })
    // }
  }
} satisfies Theme
