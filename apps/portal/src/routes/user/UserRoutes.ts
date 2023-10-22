import type { RouteRecordRaw } from 'vue-router'
import UserProfileView from '@/views/User/Profile/UserProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import UserSettingsView from '@/views/User/Settings/UserSettingsView.vue'
import { MustBeAuthenticated } from '@/routes/navigationGuards'
import UserDetailsForm from '@/components/core/user/details/UserDetailsForm.vue'

class UserProfileRouteEnum extends BaseEnum {
  static readonly USER_PROFILE: string = 'USER_PROFILE'
  static readonly USER_SETTINGS: string = 'USER_SETTINGS'
  static readonly USER_SETTINGS_EDIT: string = 'USER_SETTINGS_EDIT'
}

const UserRoutes: RouteRecordRaw[] = [
  {
    path: '/user/profile/:id',
    name: UserProfileRouteEnum.USER_PROFILE,
    component: UserProfileView
  },
  {
    path: '/settings/profile/',
    name: UserProfileRouteEnum.USER_SETTINGS,
    component: UserSettingsView,
    beforeEnter: () => {
      return MustBeAuthenticated.guard()
    }
  },
  {
    path: '/settings/profile/edit',
    name: UserProfileRouteEnum.USER_SETTINGS_EDIT,
    component: UserDetailsForm,
    beforeEnter: () => {
      return MustBeAuthenticated.guard()
    }
  }
]

export default UserRoutes
