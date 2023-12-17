import type { RouteRecordRaw } from 'vue-router'
import CompaniesView from '@/views/Companies/CompaniesView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanyPreviewRoutes from './preview/CompanyPreviewRoutes'

class CompaniesRouteEnum extends BaseEnum {
  static readonly COMPANIES: string = 'COMPANIES'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/companies',
    name: CompaniesRouteEnum.COMPANIES,
    component: CompaniesView,
    children: [...CompanyPreviewRoutes]
  }
]

export default routes
