/* eslint-disable import/no-unresolved */
import 'element-plus/dist/index.css'
import '@hua5/hua5-web-ui/style'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'
import hua5WebUI from "@hua5/hua5-web-ui"

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(hua5WebUI)
app.mount('#app')
