import type { RouteRecordRaw } from 'vue-router'
import SettingsView from '@/views/Settings/SettingsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class SettingsRouteEnum extends BaseEnum {
  static readonly SETTINGS: string = 'SETTINGS'
}

const SettingRoutes: RouteRecordRaw[] = [
  { path: '/settings', name: SettingsRouteEnum.SETTINGS, component: SettingsView }
]

export default SettingRoutes
