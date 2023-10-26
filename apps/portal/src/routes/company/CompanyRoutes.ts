import type { RouteRecordRaw } from 'vue-router'
import CompanyManagementRoutes from './management/CompanyManagementRoutes'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanyDashboardView from '@/views/Company/Management/CompanyDashboardView.vue'

import {
  MustBeAuthenticatedNavigationGuard,
  MustHaveUserDetailsNavigationGuard,
  MustBelongToCompanyNavigationGuard
} from '@/routes/navigationGuards'

class CompanyRouteEnum extends BaseEnum {
  static readonly COMPANY: string = 'COMPANY'
}

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    name: CompanyRouteEnum.COMPANY,
    component: CompanyDashboardView,

    beforeEnter: () => {
      const mustBeAuthenticatedNavigationGuard = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticatedNavigationGuard) return mustBeAuthenticatedNavigationGuard

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard

      const mustBelongToCompanyNavigationGuard = MustBelongToCompanyNavigationGuard.guard()
      if (mustBelongToCompanyNavigationGuard) return mustBelongToCompanyNavigationGuard
    }
  },
  ...CompanyManagementRoutes
]

export default CompanyRoutes
