import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
}

const UserRoutes: RouteRecordRaw[] = [
  { path: '/user/profile/:id', name: UserProfileRouteEnum.USER_PROFILE, component: UserProfileView }
]

export default UserRoutes
