import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  title: "hua5-web-ui",
  description: "hua5-web-ui",
  vite:{
    plugins: [
      UnoCSS()
    ]
  },
  themeConfig: {

    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/index' }
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: '倒计时', link: '/components/HuiCountDownButton' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
