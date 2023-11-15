import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/index'
import { i18n } from './translation/index'
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import { useUserStore } from '@/stores/user/useUserStore'
import './assets/main.scss'
import 'material-icons/iconfont/material-icons.css'
import 'material-symbols/outlined.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import registerGlobalComponentsPlugin from './plugins/components/registerGlobalComponentsPlugin'
import veeValidatePlugin from './plugins/vee-validate/veeValidatePlugin'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(i18n as any)
app.use(veeValidatePlugin)

const userThemeStore = useUserThemeStore()
userThemeStore.initializeTheme()

const userStore = useUserStore()
userStore.initializeLocale()

app.use(registerGlobalComponentsPlugin)
app.mount('#app')
