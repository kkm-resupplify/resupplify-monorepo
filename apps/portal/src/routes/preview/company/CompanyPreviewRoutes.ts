import CompanyPreviewView from '@/views/Preview/CompanyPreviewView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyPreviewRouteEnum extends BaseEnum {
  static readonly COMPANY_PREVIEW: string = 'COMPANY_PREVIEW'
}

const CompanyPreviewRoutes: RouteRecordRaw[] = [
  {
    path: '/preview/company/:slug',
    name: CompanyPreviewRouteEnum.COMPANY_PREVIEW,
    component: CompanyPreviewView
  }
]

export default CompanyPreviewRoutes
