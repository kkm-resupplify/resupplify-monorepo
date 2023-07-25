import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/index'
import { i18n } from './translation/index'
import './assets/main.css'
import { useI18n } from 'vue-i18n'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n)
app.use(router)
app.use(pinia)

app.mount('#app')

app.config.globalProperties.$t = useI18n()
app.config.globalProperties.$d = useI18n()
app.config.globalProperties.$n = useI18n()
