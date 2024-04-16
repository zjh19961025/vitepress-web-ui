import 'element-plus/dist/index.css'
import '@hua5/hua5-web-ui/style'
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import hua5WebLib from "@hua5/hua5-web-lib"
import hua5WebUI from "@hua5/hua5-web-ui"
import "./css/color.css"
import { hlibDelegate } from "./delegate/HlibDelegate"
import { huiDelegate } from "./delegate/HuiDelegate"

const app = createApp(App)

app.use(router as any)
app.use(hua5WebLib, {
  delegate: hlibDelegate,
})
app.use(hua5WebUI, {
  isInstallComponents: false,
  delegate: huiDelegate,
})
app.mount('#app')
