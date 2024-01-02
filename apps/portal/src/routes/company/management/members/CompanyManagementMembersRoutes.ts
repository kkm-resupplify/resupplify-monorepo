import CompanyMembersView from '@/views/Company/Management/CompanyMembersView.vue'
import CompanyManagementMembersActivePanel from '@/components/core/company/management/members/active/CompanyManagementMembersActivePanel.vue'
import CompanyManagementMembersPermissionsPanel from '@/components/core/company/management/members/permissions/CompanyManagementMembersPermissionsPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_MEMBERS_TILES: string = 'COMPANY_MEMBERS_TILES'
  static readonly COMPANY_MEMBERS_ACTIVE: string = 'COMPANY_MEMBERS_ACTIVE'
  static readonly COMPANY_MEMBERS_PERMISSIONS: string = 'COMPANY_MEMBERS_PERMISSIONS'
}

const CompanyManagementMembersRoutes: RouteRecordRaw[] = [
  {
    path: 'members',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS_TILES,
    component: CompanyMembersView
  },
  {
    path: 'members/active',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS_ACTIVE,
    component: CompanyManagementMembersActivePanel
  }
]

export default CompanyManagementMembersRoutes
