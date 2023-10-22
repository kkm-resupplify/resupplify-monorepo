import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import {
  MustBeAuthenticatedNavigationGuard,
  MustHaveUserDetailsNavigationGuard
} from '@/routes/navigationGuards'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_DASHBOARD: string = 'COMPANY_DASHBOARD'
}

const CompanyDashboardRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: CompanyProfileRouteEnum.COMPANY_DASHBOARD,
    component: CompanyDashboardView,
    beforeEnter: () => {
      const mustBeAuthenticatedNavigationGuard = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticatedNavigationGuard) return mustBeAuthenticatedNavigationGuard

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard
    }
  }
]

export default CompanyDashboardRoutes
