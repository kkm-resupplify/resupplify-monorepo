import type { RouteRecordRaw } from 'vue-router'
import CompanyMembersView from '@/views/Company/Members/CompanyMembersView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import {
  MustBeAuthenticatedNavigationGuard,
  MustHaveUserDetailsNavigationGuard
} from '@/routes/navigationGuards'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_MEMBERS: string = 'COMPANY_MEMBERS'
}

const CompanyMembersRoutes: RouteRecordRaw[] = [
  {
    path: 'members',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS,
    component: CompanyMembersView,
    beforeEnter: () => {
      const mustBeAuthenticatedNavigationGuard = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticatedNavigationGuard) return mustBeAuthenticatedNavigationGuard

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard
    }
  }
]

export default CompanyMembersRoutes
