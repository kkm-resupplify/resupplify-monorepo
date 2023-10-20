import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class AuthRouteEnum extends BaseEnum {
  static readonly LOGIN: string = 'LOGIN'
  static readonly REGISTER: string = 'REGISTER'
}

const AuthRoutes: RouteRecordRaw[] = [
  { path: '/login', name: AuthRouteEnum.LOGIN, component: LoginView },
  { path: '/register', name: AuthRouteEnum.REGISTER, component: RegisterView }
]

export default AuthRoutes
