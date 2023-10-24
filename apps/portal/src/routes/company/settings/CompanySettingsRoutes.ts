import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustBeAuthenticatedNavigationGuard, MustHaveUserDetailsNavigationGuard } from '@/routes/navigationGuards'
import CompanySettingsView from '@/views/Company/Settings/CompanySettingsView.vue'

class CompanyRegisterRouteEnum extends BaseEnum {
  static readonly COMPANY_SETTINGS_PROFILE: string = 'COMPANY_SETTINGS_PROFILE'
}

const CompanyRegisterRoutes: RouteRecordRaw[] = [
  {
    path: 'settings/profile',
    name: CompanyRegisterRouteEnum.COMPANY_SETTINGS_PROFILE,
    component: CompanySettingsView,
    beforeEnter: () => {
      const mustBeAuthenticated = MustBeAuthenticatedNavigationGuard.guard()
      if (mustBeAuthenticated) return MustBeAuthenticatedNavigationGuard

      const mustHaveUserDetailsNavigationGuard = MustHaveUserDetailsNavigationGuard.guard()
      if (mustHaveUserDetailsNavigationGuard) return mustHaveUserDetailsNavigationGuard
    }
  }
]

export default CompanyRegisterRoutes
