import AdminLocaleView from '@/views/Locale/AdminLocaleView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminLocaleRouteEnum extends BaseEnum {
  static readonly ADMIN_LOCALE_TILES: string = 'ADMIN_LOCALE_TILES'
}

const AdminLocaleRoutes: RouteRecordRaw[] = [
  {
    path: 'locale',
    name: AdminLocaleRouteEnum.ADMIN_LOCALE_TILES,
    component: AdminLocaleView
  }
]

export default AdminLocaleRoutes
