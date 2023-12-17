import CompanyPreviewDashboardPanelVue from '@/components/core/company/preview/offer/dashboard/CompanyPreviewDashboardPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyPreviewRouteEnum extends BaseEnum {
  static readonly COMPANY_PREVIEW_OFFERS: string = 'COMPANY_PREVIEW_OFFERS'
}

const CompanyPreviewOfferRoutes: RouteRecordRaw[] = [
  {
    path: 'company/:slug',
    name: CompanyPreviewRouteEnum.COMPANY_PREVIEW_OFFERS,
    component: CompanyPreviewDashboardPanelVue
  }
]

export default CompanyPreviewOfferRoutes
