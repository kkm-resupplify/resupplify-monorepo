<template>
  <div class="company-member-list">
    <company-member-invitation />

    <a-title :title="$t('company.management.navigation.members.title')" />

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
import CompanyMemberInvitation from '../../invitation/CompanyMemberInvitation.vue';
import { onMounted, reactive } from 'vue';
import CompanyMembersService from '@/services/company/CompanyMembersService'
import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'

// Variables
const companyMembers = reactive<CompanyMember[]>([]);

// Hooks
onMounted(async () => {
  const company = await CompanyMembersService.getCompanyMembers()

  companyMembers.splice(0, companyMembers.length, ...company);
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
