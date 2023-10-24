import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import {
  MustBeAuthenticatedNavigationGuard,
  MustHaveUserDetailsNavigationGuard
} from '@/routes/navigationGuards'

class CompanyRegisterRouteEnum extends BaseEnum {
  static readonly COMPANY_REGISTER: string = 'COMPANY_REGISTER'
}

const CompanyRegisterRoutes: RouteRecordRaw[] = [
  {
    path: 'register',
    name: CompanyRegisterRouteEnum.COMPANY_REGISTER,
    component: CompanyDashboardView,
    beforeEnter: () => {
      const mustBeAuthenticated = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticated) return mustBeAuthenticated

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard
    }
  }
]

export default CompanyRegisterRoutes
