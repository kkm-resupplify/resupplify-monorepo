import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanySettingsView from '@/views/Company/Settings/CompanySettingsView.vue'
import { MustBeAuthenticated } from '../navigationGuards'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
  static readonly USER_DETAILS: string = 'USER_DETAILS'
  static readonly COMPANY_SETTINGS_PROFILE: string = 'COMPANY_SETTINGS_PROFILE'
}

const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user/profile/:id',
    name: UserProfileRouteEnum.USER_PROFILE,
    component: UserProfileView
  },
  {
    path: '/company/settings/profile',
    name: UserProfileRouteEnum.COMPANY_SETTINGS_PROFILE,
    component: CompanySettingsView,
    beforeEnter: () => {
      return MustBeAuthenticated.guard()
    }
  }
]

export default UserRoutes
