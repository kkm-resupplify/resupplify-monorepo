<template>
  <m-stepper-step-content class="register-company-general-step">
    <template #body>
      <v-form class="register-company-general-step__body">
        <m-text-field
          name="name"
          rules="required|min:3"
          :label="$t('company.register.form.companyNameLabel')"
          :placeholder="$t('company.register.form.companyNamePlaceholder')"
        />

        <m-text-field
          name="countryId"
          rules="required"
          :label="$t('company.register.form.companyCountryLabel')"
          :placeholder="$t('company.register.form.companyCountryPlaceholder')"
        />

        <m-text-area
          name="shortDescription"
          rules="required|min:16|max:255"
          :label="$t('company.register.form.companyShortDescriptionLabel')"
          :placeholder="$t('company.register.form.companyShortDescriptionPlaceholder')"
        />

        <m-text-area
          name="description"
          rules="required|min:32|max:1000"
          :label="$t('company.register.form.companyDescriptionLabel')"
          :placeholder="$t('company.register.form.companyDescriptionPlaceholder')"
        />
      </v-form>
    </template>

    <template #footer>
      <div class="register-company-general-step__footer">
        <a-button size="large" :text="$t('global.back')" @click="handlePreviousStep" />

        <a-button size="large" :text="$t('global.next')" @click="handleNextStep" />
      </div>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'

const emits = defineEmits(['next-step', 'previous-step', 'general-step-data'])
// Variables
const registerCompanyStore = useRegisterCompanyStore()

// Methods
const handleNextStep = () => {
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}
</script>

<style lang="scss" scoped>
.register-company-general-step {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__footer {
    display: flex;
    flex: 1;
    gap: $global-spacing-80;
    justify-content: center;
  }
}
</style>
