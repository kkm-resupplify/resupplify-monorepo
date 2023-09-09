import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/index'
import { i18n } from './translation/index'
import './assets/main.scss'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)

const pinia = createPinia()

app.use(i18n as any)
app.use(router)
app.use(pinia)

app.mount('#app')
