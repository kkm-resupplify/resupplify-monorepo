import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/index'
import { i18n } from './translation/index'
import './assets/main.css'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
