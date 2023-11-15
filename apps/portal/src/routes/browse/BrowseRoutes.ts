import type { RouteRecordRaw } from 'vue-router'
import BrowseView from '@/views/Browse/BrowseView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class BrowseRouteEnum extends BaseEnum {
  static readonly BROWSE: string = 'BROWSE'
}

const routes: RouteRecordRaw[] = [
  { path: '/browse', name: BrowseRouteEnum.BROWSE, component: BrowseView }
]

export default routes
