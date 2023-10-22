import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
  static readonly USER_SETTINGS: string = 'USER_SETTINGS'
  static readonly USER_SETTINGS_EDIT: string = 'USER_SETTINGS_EDIT'
}

const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user/profile/:slug',
    name: UserProfileRouteEnum.USER_PROFILE,
    component: UserProfileView
  }
]

export default UserRoutes
