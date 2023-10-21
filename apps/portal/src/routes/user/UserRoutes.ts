import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import UserDetailsViewVue from '@/views/UserDetails/UserDetailsView.vue'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
  static readonly USER_DETAILS: string = 'USER_DETAILS'
}

const UserRoutes: RouteRecordRaw[] = [
  { path: '/user/profile/:id', name: UserProfileRouteEnum.USER_PROFILE, component: UserProfileView },
  { path: '/user/details', name: UserProfileRouteEnum.USER_DETAILS, component: UserDetailsViewVue }
]

export default UserRoutes
