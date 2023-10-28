<template>
  <div class="dropdown-content">
    <div class="dropdown-content__fields">
      <a-title :title="$t('company.invitation.title')" size="medium" />

      <m-text-field />

      <m-select />

      <a-button
        :text="$t('company.invitation.generate')"
        class="dropdown-content__generate"
      />
    </div>
    
    <a-title :title="invitationCode" />
  </div>
</template>

<script setup lang="ts">
import type { CreateInvitationCodeData } from '@/interfaces/company/InvitationCodeInterface'
import InvitationCodeService from '@/services/company/InvitationCodeService'
import { ref, onBeforeMount, reactive, computed } from 'vue';
import type { CompanyRole } from '@/interfaces/company/CompanyRoleInterface';
import { useCompanyRoleStore } from '@/stores/company/useCompanyRoleStore';

const invitationCode = ref<String>()

// Methods
const createInvitationCode = async (invitationCodeData: CreateInvitationCodeData) => {
  const data = await InvitationCodeService.createInvitationCode(invitationCodeData)

  invitationCode.value = data.invitationCode
}

// Variables
const companyRoleStore = useCompanyRoleStore
// const companyRoles: CompanyRole[] = 
// const rolesToOptions = computed(() => companyRoles.map(({ id, name }) => ({ id, name })));

console.log(companyRoleStore.getCompanyRoles);

</script>

<style scoped lang="scss">
.dropdown-content {
  position: absolute;
  z-index: 9999;
  top: $global-spacing-50;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-60;

  width: 400px;
  padding: $global-spacing-50;

  background-color: var(--secondary-1);

  &__submit {
    width: min-content;
    margin-top: $global-spacing-30;
    margin-left: auto;
  }
}
</style>
