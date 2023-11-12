import type { RouteRecordRaw } from 'vue-router'
import BaseEnum from '@sharedEnums/BaseEnum'
import BasicViewLayoutVue from '@/layouts/view/BasicViewLayout.vue'

class AdminRouteEnum extends BaseEnum {
  static readonly HOME: string = 'HOME'
}

const AdminRoutes: RouteRecordRaw[] = [
  { path: '/', name: AdminRouteEnum.HOME, component: BasicViewLayoutVue, children: [] }
]

export default AdminRoutes
