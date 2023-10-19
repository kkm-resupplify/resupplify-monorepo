import type { RouteRecordRaw } from 'vue-router'

import UserSetingsRoutes from './settings/UserSettingsRoutes'

const UserRoutes: RouteRecordRaw[] = [
  { path: '/user', name: 'user', children: [...UserSetingsRoutes] }
]

export default UserRoutes
