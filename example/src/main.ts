import './assets/main.css'
import 'hua5-web-ui/lib/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
