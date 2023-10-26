import CompanyMembersView from '@/views/Company/Management/Members/CompanyMembersView.vue'
import CompanyMembersActiveMembersView from '@/views/Company/Management/Members/CompanyMembersActiveMembersView.vue'
import CompanyMembersPermissionsView from '@/views/Company/Management/Members/CompanyMembersPermissionsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_MEMBERS: string = 'COMPANY_MEMBERS'
  static readonly COMPANY_MEMBERS_ACTIVE: string = 'COMPANY_MEMBERS_ACTIVE'
  static readonly COMPANY_MEMBERS_PERMISSIONS: string = 'COMPANY_MEMBERS_PERMISSIONS'
}

const CompanyManagementMembersRoutes: RouteRecordRaw[] = [
  {
    path: '/company/members',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS,
    component: CompanyMembersView
  },
  {
    path: '/company/members/active',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS_ACTIVE,
    component: CompanyMembersActiveMembersView
  },
  {
    path: '/company/members/permissions',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS_PERMISSIONS,
    component: CompanyMembersPermissionsView
  }
]

export default CompanyManagementMembersRoutes
