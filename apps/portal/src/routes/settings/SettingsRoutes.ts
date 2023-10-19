import type { RouteRecordRaw } from 'vue-router'

import SettingsView from '@/views/Settings/SettingsView.vue'

const SettingRoutes: RouteRecordRaw[] = [{ path: '/settings', component: SettingsView }]

export default SettingRoutes
