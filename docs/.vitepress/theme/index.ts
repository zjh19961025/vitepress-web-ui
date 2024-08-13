import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// 自定义组件
import { VPDemo } from '../../vitepress'
// element相关
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/dark/css-vars.css'
// hua5WebUI相关
import '@hua5/hua5-web-ui/style'
import { huiDelegate } from '../../delegate/HuiDelegate'
// hua5WebLib相关
import { hlibDelegate } from '../../delegate/HlibDelegate'
import unocssPreset from '@hua5/unocss-preset'
// unocss相关
import "virtual:uno.css";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  async enhanceApp({ app, router, siteData }) {
    app.use(unocssPreset)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('Demo', VPDemo)
    if(!import.meta.env.SSR){
      const hua5WebUI = await import("@hua5/hua5-web-ui")
      app.use(hua5WebUI.default,{
        delegate: huiDelegate,
        isInstallComponents: true
      })
      const hua5WebLib = await import("@hua5/hua5-web-lib")
      app.use(hua5WebLib.default, {
        delegate: hlibDelegate,
      })
    }
  }
} satisfies Theme
