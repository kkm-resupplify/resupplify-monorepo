<template>
  <div class="company-member-list">
    <company-member-invitation />

    <a-title title="Members" />

    <company-member-list-item
      v-for="member in companyMembers"
      :email="member.email"
      :first-name="member.userDetails?.firstName"
      :last-name="member.userDetails?.lastName"
      :phone-number="member.userDetails?.phoneNumber"
      :birth-date="member.userDetails?.birthDate"
      :sex="member.userDetails?.sex"
    />
  </div>
</template>

<script setup lang="ts">
import CompanyMemberListItem from './CompanyMemberListItem.vue'
import CompanyMemberInvitation from './CompanyMemberInvitation.vue'
import { ref, onMounted } from 'vue'
import CompanyMembersService from '@/services/company/CompanyMembersService'
import type { CompanyMember } from '@/interfaces/company/CompanyMembersInterface'

// Variables
const companyMembers = ref<CompanyMember[] | null>()

// Hooks
onMounted(async () => {
  const response = await CompanyMembersService.getCompanyMembers()

  companyMembers.value = await response?.users
})
</script>
<style scoped lang="scss">
.company-member-list {
  @include boxshadow-primary-2;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-80;

  width: 60%;
  margin-inline: auto;
  padding: $global-spacing-90;
}
</style>
