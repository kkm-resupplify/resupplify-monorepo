import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './routes/index'
import { i18n } from './translation/index'
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import './assets/main.scss'
import 'material-icons/iconfont/material-icons.css'
import 'material-symbols/outlined.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import registerGlobalComponentsPlugin from './plugins/components/registerGlobalComponentsPlugin'
import globalValidatorsPlugin from './plugins/vee-validate/veeValidatePlugin'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(i18n as any)
app.use(router)
app.use(pinia)

const userThemeStore = useUserThemeStore()
userThemeStore.initializeTheme()

app.use(registerGlobalComponentsPlugin)
app.use(globalValidatorsPlugin)
app.mount('#app')
