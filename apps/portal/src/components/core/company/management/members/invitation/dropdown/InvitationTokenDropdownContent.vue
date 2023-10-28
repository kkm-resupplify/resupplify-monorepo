<template>
  <div class="dropdown-content">
    <div class="dropdown-content__fields">
      <a-title :title="$t('company.invitation.title')" size="medium" />

      <m-text-field />

      <m-select />

      <a-button
        :text="$t('company.invitation.generate')"
        class="dropdown-content__generate"
        @click="createInvitationCode(invitationCodeData)"
      />
    </div>
    
    <a-title :title="invitationCode" />
  </div>
</template>

<script setup lang="ts">
import type { CreateInvitationCodeData } from '@/interfaces/company/InvitationCodeInterface'
import InvitationCodeService from '@/services/company/InvitationCodeService'
import { ref, reactive, onMounted } from 'vue';
import CompanyMembersService from '@/services/company/CompanyMembersService';
import { onBeforeMount } from 'vue';

// Variables
// const invitationCodeData = reactive<CreateInvitationCodeData>({
//   roleId: 1,
//   companyId: 1,
//   expiryDate: '2005-08-15T15:52:01+00:00'
// })

const invitationCode = ref<String>()

// Methods
const createInvitationCode = async (invitationCodeData: CreateInvitationCodeData) => {
  const data = await InvitationCodeService.createInvitationCode(invitationCodeData)

  invitationCode.value = data.invitationCode
}

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
