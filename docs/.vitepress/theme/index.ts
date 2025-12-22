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
// zjhWebUI相关
import 'zjh-web-ui/style'
import { huiDelegate } from '../../delegate/HuiDelegate'
// zjhWebLib相关
import { hlibDelegate } from '../../delegate/HlibDelegate'
// unocss相关
import unocssPreset from '@zjh/unocss-preset'
import "virtual:uno.css";


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  async enhanceApp({ app, router, siteData }) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('Demo', VPDemo)
    /**
     * 库中使用了window, 只有在客户端渲染才能使用window
     * 所以此处，只有客户端渲染才能 app.use
     */
    if(!import.meta.env.SSR){
      app.use(unocssPreset)

      const zjhWebUI = await import("zjh-web-ui")
      window.zjhWebUI=zjhWebUI
      app.use(zjhWebUI.default,{
        delegate: huiDelegate,
        isInstallComponents: true
      })
      const zjhWebLib = await import("zjh-web-lib")
      app.use(zjhWebLib.default, {
        delegate: hlibDelegate,
      })
      /**
       * 为了兼容服务端渲染，不能在组件中直接 import zjhWebLib
       * 因此，挂载在 window 上供组件使用
       */
      window.zjhWebLib=zjhWebLib
    }
  }
} satisfies Theme
