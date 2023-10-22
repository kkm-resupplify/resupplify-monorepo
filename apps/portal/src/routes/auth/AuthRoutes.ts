import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import LogoutView from '@/views/Logout/LogoutView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import {
  MustNotBeAuthenticatedNavigationGuard,
  MustBeAuthenticatedNavigationGuard
} from '@/routes/navigationGuards'

class AuthRouteEnum extends BaseEnum {
  static readonly LOGIN: string = 'LOGIN'
  static readonly LOGOUT: string = 'LOGOUT'
  static readonly REGISTER: string = 'REGISTER'
}

const AuthRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: AuthRouteEnum.LOGIN,
    component: LoginView,
    beforeEnter: () => {
      return MustNotBeAuthenticatedNavigationGuard.guard()
    }
  },
  {
    path: '/logout',
    name: AuthRouteEnum.LOGOUT,
    component: LogoutView,
    beforeEnter: () => {
      return MustBeAuthenticatedNavigationGuard.guard()
    }
  },
  {
    path: '/register',
    name: AuthRouteEnum.REGISTER,
    component: RegisterView,
    beforeEnter: () => {
      return MustNotBeAuthenticatedNavigationGuard.guard()
    }
  }
]

export default AuthRoutes
