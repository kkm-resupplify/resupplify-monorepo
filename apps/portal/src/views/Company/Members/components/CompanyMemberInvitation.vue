<template>
  <div class="company-member-invitation">
    <a-dropdown class="company-member-invitation__dropdown">
      <template #activator>
        <div class="company-member-invitation__invite">
          <a-button
            :text="$t('company.invitation.inviteNew')"
            size="x-large"
            class="company-member-invitation__invite--button"
          />
        </div>
      </template>

      <template #content>
        <div class="company-member-invitation__dropdown--content">
          <a-title :title="$t('company.invitation.title')" size="medium" />

          <m-text-field />

          <a-button
            :text="$t('company.invitation.generate')"
            class="company-member-invitation__dropdown--content__submit"
            buttonType="submit"
            @click="createInvitationCode(invitationCodeData)"
          />
        </div>
      </template>
    </a-dropdown>
  </div>
  <a-title :title="invitationCode" />
</template>

<script setup lang="ts">
import type { CreateInvitationCodeData } from '@/interfaces/company/InvitationCodeInterface'
import InvitationCodeService from '@/services/company/InvitationCodeService'
import { ref } from 'vue'

// Variables
const invitationCodeData = ref<CreateInvitationCodeData>({
  roleId: 1,
  companyId: 1,
  expiryDate: '2005-08-15T15:52:01+00:00'
})
const invitationCode = ref<String>()

// Methods
const createInvitationCode = async (invitationCodeData: CreateInvitationCodeData) => {
  const data = await InvitationCodeService.createInvitationCode(invitationCodeData)

  invitationCode.value = data.invitationCode
}
</script>

<style scoped lang="scss">
.company-member-invitation {
  margin-left: auto;

  &__dropdown {
    position: relative;

    &--content {
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
  }

  &__invite {
    display: flex;
    align-items: flex-end;
  }
}
</style>
