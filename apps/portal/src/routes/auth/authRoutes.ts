import type { Route } from '@/interfaces/route/RouteInterface'

import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'

const authRoutes: Route[] = [
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView }
]

export default authRoutes
