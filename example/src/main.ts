import 'element-plus/dist/index.css'
import 'zjh-web-ui/style'
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import zjhWebLib from "zjh-web-lib"
import zjhWebUI from "zjh-web-ui"
import { hlibDelegate } from "./delegate/HlibDelegate"
import { huiDelegate } from "./delegate/HuiDelegate"
import unocssPreset from 'zjh-web-ui'
import theme from '../unocss.theme'

const app = createApp(App)

app.use(router as any)
app.use(zjhWebLib, {
  delegate: hlibDelegate,
})
app.use(zjhWebUI, {
  isInstallComponents: false,
  delegate: huiDelegate,
})

app.use(unocssPreset, theme)
app.mount('#app')
