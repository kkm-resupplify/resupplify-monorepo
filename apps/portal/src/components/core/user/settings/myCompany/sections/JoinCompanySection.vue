<template>
  <div class="join-company-section">
    <div class="join-company-section__header">
      <a-title
        :title="$t('settings.myCompany.joinCompany.title')"
        :subtitle="$t('settings.myCompany.joinCompany.description')"
      />
    </div>
    <div class="join-company-section__content">
      <a-title
        :title="$t('settings.myCompany.joinCompany.invitationToken')"
        :subtitle="$t('settings.myCompany.joinCompany.enterInvitationToken')"
      />

      <o-form class="join-company-section__form" :submit-callback="handleFormSubmit">
        <template #body>
          <div class="join-company-section__form-body">
            <m-text-field
              name="invitationToken"
              rules="required|min:3"
              :label="$t('settings.myCompany.joinCompany.invitationToken')"
              :placeholder="$t('settings.myCompany.joinCompany.invitationTokenPlaceholder')"
            />
          </div>
        </template>

        <template #footer>
          <div class="join-company-section__form-footer">
            <a-button type="submit" size="x-large" :text="$t('global.submit')" />
          </div>
        </template>
      </o-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCompanyService from '@/services/user/UserCompanyService'

// Emits
const emits = defineEmits(['success'])

// Methods
const handleFormSubmit = async (formData: { invitationToken: string }) => {
  const { success } = await UserCompanyService.joinCompany(formData)
  if (success) emits('success')
}
</script>

<style lang="scss" scoped>
.join-company-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__form {
    overflow-x: hidden;
    display: flex;
    gap: $global-spacing-50;
    max-width: 30%;
  }

  &__form-footer {
    display: flex;
    flex: 1;
    justify-content: center;
  }
}
</style>
