import type { RouteRecordRaw } from 'vue-router'
import CompanyProfileViewVue from '@/views/Company/Profile/CompanyProfileView.vue'

const CompanyProfileRoutes: RouteRecordRaw[] = [
  {
    path: 'profile/:slug',
    component: CompanyProfileViewVue
  }
]

export default CompanyProfileRoutes
