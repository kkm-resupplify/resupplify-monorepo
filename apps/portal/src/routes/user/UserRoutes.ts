import type { RouteRecordRaw } from 'vue-router'

import UserProfileView from '@/views/User/Profile/UserProfileView.vue'

const UserRoutes: RouteRecordRaw[] = [
  { path: '/user/profile/:id', name: 'user', component: UserProfileView }
]

export default UserRoutes
