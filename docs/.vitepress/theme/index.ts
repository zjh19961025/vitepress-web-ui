import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// 自定义组件
import { VPDemo } from '../../vitepress'
// element相关
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'
// hua5WebUI相关
import hua5WebUI from "@hua5/hua5-web-ui"
import '@hua5/hua5-web-ui/style'
// unocss相关
import "virtual:uno.css";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('Demo', VPDemo)
    app.use(hua5WebUI)
  }
} satisfies Theme
