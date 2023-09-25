import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import 'material-icons/iconfont/material-icons.css'
import registerGlobalComponentsPlugin from './plugins/components/registerGlobalComponentsPlugin'

const app = createApp(App)

app.use(createPinia())
app.use(registerGlobalComponentsPlugin)

app.mount('#app')
