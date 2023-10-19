import type { RouteRecordRaw } from 'vue-router'

import UserSettingsView from '@/views/User/Settings/UserSettingsView.vue'

const UserSettingsRoutes: RouteRecordRaw[] = [
  { path: 'settings', component: UserSettingsView },
  { path: 'profile', component: UserSettingsView }
]

export default UserSettingsRoutes
