import type { RouteRecordRaw } from 'vue-router'

import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'

const AuthRoutes: RouteRecordRaw[] = [
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView }
]

export default AuthRoutes
