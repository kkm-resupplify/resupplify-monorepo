import type { RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustNotBeAuthenticatedNavigationGuard } from '@/routes/navigationGuards'

class AuthRouteEnum extends BaseEnum {
  static readonly LOGIN: string = 'LOGIN'
}

const AuthRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: AuthRouteEnum.LOGIN,
    component: LoginView,
    beforeEnter: () => {
      const isNotAuthenticated = MustNotBeAuthenticatedNavigationGuard.guard()

      if (isNotAuthenticated) return isNotAuthenticated
    }
  },
  {
    path: '/',
    redirect: { path: '/admin' }
  }
]

export default AuthRoutes
