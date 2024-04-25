import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import countDownButton from '../../examples/HuiCountDownButton/CountDownButton.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
    app.component("countDownButton", countDownButton);
  }
} satisfies Theme
