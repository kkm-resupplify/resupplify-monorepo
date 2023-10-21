import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustNotBeAuthenticated } from '@/routes/navigationGuards'

class AuthRouteEnum extends BaseEnum {
  static readonly LOGIN: string = 'LOGIN'
  static readonly REGISTER: string = 'REGISTER'
}

const AuthRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: AuthRouteEnum.LOGIN,
    component: LoginView,
    beforeEnter: () => {
      return MustNotBeAuthenticated.guard()
    }
  },
  {
    path: '/register',
    name: AuthRouteEnum.REGISTER,
    component: RegisterView,
    beforeEnter: () => {
      return MustNotBeAuthenticated.guard()
    }
  }
]

export default AuthRoutes
