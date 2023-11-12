<template>
  <div class="invitation-token-dropdown-content">
    <a-title :title="$t('company.invitation.title')" size="medium" />

    <o-form
      class="invitation-token-dropdown-content__form"
      :initial-values="initialFormValues"
      :submit-callback="handleGenerateCode"
    >
      <template #body>
        <div class="invitation-token-dropdown-content__fields">
          <m-text-field
            name="tokenCount"
            label="Token amount"
            placeholder="Enter amount of tokens you wish to generate"
            :validate="false"
            input-type="number"
          />

          <m-select
            name="roleId"
            :options="companyRoles"
            placeholder="Select company role"
            :validate="false"
          />
        </div>
      </template>

      <template #footer>
        <div class="invitation-token-dropdown-content__footer">
          <a-button
            :text="$t('company.invitation.generate')"
            label="Select role for the token"
            size="x-large"
            type="submit"
          />
        </div>
      </template>
    </o-form>

    <div class="invitation-token-dropdown-content__token-list">
      <span class="invitation-token-dropdown-content__token-item" v-text="invitationCode" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InvitationCodeService from '@/services/company/InvitationCodeService'
import { ref, computed } from 'vue'
import { useCompanyRoleStore } from '@/stores/company/useCompanyRoleStore'
import type { CreateInvitationCodeData } from '@interfaces/company/InvitationCodeInterface'

// Variables
const companyRoleStore = useCompanyRoleStore()
const invitationCode = ref<string>()

// Computed
const companyRoles = computed(() =>
  companyRoleStore.getCompanyRoles
    .map((role) => {
      return { id: role.id, text: role.name }
    })
    .sort((a, b) => a.id + b.id)
)

const initialFormValues = computed(() => {
  return { tokenCount: 1, roleId: companyRoles.value[0].id }
})

// Methods
const handleGenerateCode = async (formData: CreateInvitationCodeData) => {
  const { data, success } = await InvitationCodeService.createInvitationCode(formData)

  if (success) invitationCode.value = data.invitationCode
}
</script>

<style scoped lang="scss">
.invitation-token-dropdown-content {
  @include boxshadow-primary-2;

  cursor: default;

  position: absolute;
  top: $global-spacing-30;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-60;

  width: 400px;
  padding: $global-spacing-50;

  background-color: var(--secondary-1);
  border-radius: $global-border-radius-10;

  &__form {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }

  &__footer {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__token-list {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
    text-align: center;
  }

  &__token-item {
    cursor: text;
    background-color: var(--secondary-2);
    border-radius: $global-border-radius-10;
  }
}
</style>
