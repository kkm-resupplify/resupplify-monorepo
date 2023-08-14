import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import 'material-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
