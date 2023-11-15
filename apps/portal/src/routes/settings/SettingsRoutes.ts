import type { RouteRecordRaw } from 'vue-router'
import SettingsView from '@/views/Settings/SettingsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustBeAuthenticatedNavigationGuard } from '@/routes/navigationGuards'

class SettingsRouteEnum extends BaseEnum {
  static readonly SETTINGS: string = 'SETTINGS'
}

const SettingRoutes: RouteRecordRaw[] = [
  {
    path: '/settings',
    name: SettingsRouteEnum.SETTINGS,
    component: SettingsView,
    beforeEnter: () => {
      return MustBeAuthenticatedNavigationGuard.guard()
    }
  }
]

export default SettingRoutes
