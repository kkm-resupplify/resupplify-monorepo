import type { RouteRecordRaw } from 'vue-router'
import OffersView from '@/views/Offers/OffersView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class BrowseRouteEnum extends BaseEnum {
  static readonly OFFERS: string = 'OFFERS'
}

const routes: RouteRecordRaw[] = [
  { path: '/offers', name: BrowseRouteEnum.OFFERS, component: OffersView }
]

export default routes
