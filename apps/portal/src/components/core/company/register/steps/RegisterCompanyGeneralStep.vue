<template>
  <m-stepper-step-content class="register-company-general-step">
    <template #body>
      <o-form
        :initial-values="registerCompanyStore.generalStepData"
        :submit-callback="handleNextStep"
        class="register-company-general-step__form"
      >
        <template #body>
          <div class="register-company-general-step__fields">
            <m-text-field
              name="name"
              rules="required|min:3"
              :label="$t('company.register.form.general.companyNameLabel')"
              :placeholder="$t('company.register.form.general.companyNamePlaceholder')"
            />

            <country-select
              name="countryId"
              required
              :label="$t('company.register.form.general.companyCountryLabel')"
              :placeholder="$t('company.register.form.general.companyCountryPlaceholder')"
            />

            <m-text-area
              name="shortDescription"
              rules="required|min:16|max:255"
              :label="$t('company.register.form.general.companyShortDescriptionLabel')"
              :placeholder="$t('company.register.form.general.companyShortDescriptionPlaceholder')"
            />

            <m-text-area
              name="description"
              rules="required|min:32|max:1000"
              :label="$t('company.register.form.general.companyDescriptionLabel')"
              :placeholder="$t('company.register.form.general.companyDescriptionPlaceholder')"
              min-height="200px"
            />
          </div>
        </template>

        <template #footer>
          <div class="register-company-general-step__footer">
            <a-button
              variant="primary"
              color="gradient-danger"
              size="x-large"
              text="Cancel"
              @click="handlePreviousStep"
            />

            <a-button type="submit" size="x-large" :text="$t('global.next')" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import CountrySelect from '@/components/common/select/CountrySelect.vue'
import type { RegisterCompanyGeneralStep } from '@interfaces/company/RegisterCompanyInterface'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const registerCompanyStore = useRegisterCompanyStore()

// Methods
const handleNextStep = async (values: RegisterCompanyGeneralStep) => {
  registerCompanyStore.setGeneralStepData(values)
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}
</script>

<style lang="scss" scoped>
.register-company-general-step {
  &__form {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__fields {
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
