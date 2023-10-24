import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanySettingsView from '@/views/Company/Settings/CompanySettingsView.vue'
import { MustBeAuthenticatedNavigationGuard } from '../navigationGuards'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
  static readonly USER_SETTINGS: string = 'USER_SETTINGS'
  static readonly USER_SETTINGS_EDIT: string = 'USER_SETTINGS_EDIT'
  static readonly USER_SETTINGS_PROFILE: string = 'USER_SETTINGS_PROFILE'
}

const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/company/settings/profile',
    name: UserProfileRouteEnum.COMPANY_SETTINGS_PROFILE,
    component: CompanySettingsView,
    beforeEnter: () => {
      return MustBeAuthenticatedNavigationGuard.guard()
    }
  },
  {
    path: '/user/profile/:slug',
    name: UserProfileRouteEnum.USER_PROFILE,
    component: UserProfileView
  }
]

export default UserRoutes
