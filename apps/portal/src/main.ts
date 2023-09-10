import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/index'
import { i18n } from './translation/index'
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import './assets/main.scss'
import 'material-icons/iconfont/material-icons.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(i18n as any)
app.use(router)
app.use(pinia)

const userThemeStore = useUserThemeStore()
userThemeStore.initializeTheme()

app.mount('#app')
