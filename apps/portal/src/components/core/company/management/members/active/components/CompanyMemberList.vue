<template>
  <div class="company-member-list">
    <div class="company-member-list__header">
      <a-title :title="$t('company.management.navigation.members.title')" />

      <company-member-invitation />
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
import { onMounted, reactive } from 'vue'
import CompanyMembersService from '@/services/company/CompanyMembersService'
import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'

// Variables
const companyMembers = reactive<CompanyMember[]>([])

// Hooks
onMounted(async () => {
  const company = await CompanyMembersService.getCompanyMembers()

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
