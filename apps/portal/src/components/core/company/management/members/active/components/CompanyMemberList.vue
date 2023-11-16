<template>
  <a-panel-section class="company-member-list">
    <div class="company-member-list__header">
      <a-title size="large" :title="$t('company.management.navigation.members.title')" />

      <company-member-invitation />
    </div>

    <div class="company-member-list__items">
      <company-member-list-item
        v-for="(member, idx) in companyMembers"
        :key="idx"
        :member-id="member.id"
        :email="member.email"
        :first-name="member.userDetails?.firstName"
        :last-name="member.userDetails?.lastName"
        :phone-number="member.userDetails?.phoneNumber"
        :birth-date="member.userDetails?.birthDate"
        :sex="member.userDetails?.sex"
        @delete-member="handleFetchCompanyMembers"
      />
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyMemberListItem from './CompanyMemberListItem.vue'
import CompanyMemberInvitation from '../../invitation/CompanyMemberInvitation.vue'
import { onBeforeMount, reactive } from 'vue'
import CompanyMembersService from '@/services/company/CompanyMembersService'
import type { CompanyMember } from '@sharedInterfaces/company/CompanyMemberInterface'

// Variables
const companyMembers: CompanyMember[] = reactive([])

// Methods
const handleFetchCompanyMembers = async () => {
  const { success, data } = await CompanyMembersService.getCompanyMembers()
  companyMembers.length = 0
  if (success && data) companyMembers.push(...data)
}

// Hooks
onBeforeMount(async () => {
  await handleFetchCompanyMembers()
})
</script>
<style scoped lang="scss">
.company-member-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;
  max-height: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__items {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;

    max-height: 100%;
    padding-right: $global-spacing-20;
  }
}
</style>
