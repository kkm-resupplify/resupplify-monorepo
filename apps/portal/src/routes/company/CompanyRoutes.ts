import type { RouteRecordRaw } from 'vue-router'
import CompanyManagementRoutes from './management/CompanyManagementRoutes'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanyViewLayout from '@/layouts/view/CompanyViewLayout.vue'
import {
  MustBeAuthenticatedNavigationGuard,
  MustHaveUserDetailsNavigationGuard,
  MustBelongToCompanyNavigationGuard
} from '@/routes/navigationGuards'
import { useCompanyRoleStore } from '@/stores/company/useCompanyRoleStore'
import CompanyRoleService from '@/services/company/CompanyRoleService'

class CompanyRouteEnum extends BaseEnum {
  static readonly COMPANY: string = 'COMPANY'
}

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    name: CompanyRouteEnum.COMPANY,
    component: CompanyViewLayout,
    children: [...CompanyManagementRoutes],
    beforeEnter: async () => {
      const mustBeAuthenticatedNavigationGuard = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticatedNavigationGuard) return mustBeAuthenticatedNavigationGuard

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard

      const mustBelongToCompanyNavigationGuard = MustBelongToCompanyNavigationGuard.guard()
      if (mustBelongToCompanyNavigationGuard) return mustBelongToCompanyNavigationGuard

      const roles = await CompanyRoleService.getRoles()
      const companyRoleStore = useCompanyRoleStore()

      if (roles) companyRoleStore.setCompanyRoles(roles)
    }
  }
]

export default CompanyRoutes
