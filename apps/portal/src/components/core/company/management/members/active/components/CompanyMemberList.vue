<template>
  <div class="company-member-list">
    <div class="company-member-list__header">
      <a-title size="large" :title="$t('company.management.navigation.members.title')" />

      <company-member-invitation :roles="roles" />
    </div>

    <div class="company-member-list__items">
      <company-member-list-item
        v-for="(member, idx) in companyMembers"
        :key="idx"
        :email="member.email"
        :first-name="member.userDetails?.firstName"
        :last-name="member.userDetails?.lastName"
        :phone-number="member.userDetails?.phoneNumber"
        :birth-date="member.userDetails?.birthDate"
        :sex="member.userDetails?.sex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyMemberListItem from './CompanyMemberListItem.vue'
import CompanyMemberInvitation from '../../invitation/CompanyMemberInvitation.vue'
import { onBeforeMount, reactive } from 'vue'
import CompanyMembersService from '@/services/company/CompanyMembersService'
import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'
import type { CompanyRole } from '@/interfaces/company/CompanyRoleInterface';

// Variables
const companyMembers = reactive<CompanyMember[]>([])
const roles = reactive<CompanyRole[]>([])

// Hooks
onBeforeMount(async () => {
  const company = await CompanyMembersService.getCompanyMembers()
  const roles = await CompanyMembersService.getRoles()

  companyMembers.splice(0, companyMembers.length, ...company)
})
</script>
<style scoped lang="scss">
.company-member-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }
}
</style>
