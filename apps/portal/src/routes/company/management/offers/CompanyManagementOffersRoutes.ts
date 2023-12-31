import CompanyOffersView from '@/views/Company/Management/CompanyOffersView.vue'
import OfferDashboardPanel from '@/components/core/company/management/offers/dashboard/OfferDashboardPanel.vue'
import OfferCreatorPanel from '@/components/core/company/management/offers/creator/OfferCreatorPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyManagementOffersRouteEnum extends BaseEnum {
  static readonly COMPANY_OFFERS_TILES: string = 'COMPANY_OFFERS_TILES'
  static readonly COMPANY_OFFERS_DASHBOARD: string = 'COMPANY_OFFERS_DASHBOARD'
  static readonly COMPANY_OFFERS_CREATOR: string = 'COMPANY_OFFERS_CREATOR'
}

const CompanyManagementOffersRoutes: RouteRecordRaw[] = [
  {
    path: 'offers',
    name: CompanyManagementOffersRouteEnum.COMPANY_OFFERS_TILES,
    component: CompanyOffersView
  },
  {
    path: 'offers/dashboard',
    name: CompanyManagementOffersRouteEnum.COMPANY_OFFERS_DASHBOARD,
    component: OfferDashboardPanel
  },
  {
    path: 'offers/creator',
    name: CompanyManagementOffersRouteEnum.COMPANY_OFFERS_CREATOR,
    component: OfferCreatorPanel
  }
]

export default CompanyManagementOffersRoutes
