<template>
  <div class="join-company-section">
    <div class="join-company-section__header">
      <a-title
        title="Join a company"
        subtitle="To join a company, you need a invitation token first. It should have been given you to you by your
        suprior or a person responsible for handling company member invitations for your company on
        our platform."
      />
    </div>
    <div class="join-company-section__content">
      <a-title title="Invitation token" subtitle="Please enter your invitation token below." />

      <o-form class="join-company-section__form" :submit-callback="handleFormSubmit">
        <template #body>
          <div class="join-company-section__form-body">
            <m-text-field
              name="invitationToken"
              rules="required|min:3"
              :label="$t('company.join.form.invitationTokenLabel')"
              :placeholder="$t('company.join.form.invitationTokenPlaceholder')"
            />
          </div>
        </template>

        <template #footer>
          <div class="register-company-contactInfo-step__footer">
            <a-button size="large" :text="$t('global.back')" @click="handlePreviousStep" />

            <a-button type="submit" size="large" :text="$t('global.submit')" />
          </div>
        </template>
      </o-form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Variables

// Computed

// Methods

const handleFormSubmit = () => {
  console.log('handleFormSubmit')
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
    max-width: 30%;
  }
}
</style>
