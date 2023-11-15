import type { RouteRecordRaw } from 'vue-router'
import CompanyProfileViewVue from '@/views/Company/Profile/CompanyProfileView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly PROFILE_SLUG: string = 'PROFILE_SLUG'
}

const CompanyProfileRoutes: RouteRecordRaw[] = [
  {
    path: 'profile/:slug',
    component: CompanyProfileViewVue,
    name: CompanyProfileRouteEnum.PROFILE_SLUG
  }
]

export default CompanyProfileRoutes
