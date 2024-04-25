import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { mdPlugin } from './config/plugins'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  title: "hua5-web-ui",
  description: "hua5-web-ui",
  vite:{
    plugins: [
      UnoCSS(),
      vueSetupExtend()
    ]
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/index' },
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: '倒计时', link: '/components/HuiCountDownButton' },
        ]
      }
    ],
  }
})
