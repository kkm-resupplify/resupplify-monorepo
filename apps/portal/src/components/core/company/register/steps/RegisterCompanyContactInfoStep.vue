<template>
  <m-stepper-step-content class="register-company-contactInfo-step">
    <template #body>
      <o-form
        :initial-values="registerCompanyStore.contactInfoStepData"
        :submit-callback="handleNextStep"
        class="register-company-contactInfo-step__form"
      >
        <template #body>
          <div class="register-company-contactInfo-step__fields">
            <m-text-field
              name="contactPerson"
              rules="required|min:3"
              :label="$t('company.register.form.contactInfo.contactPersonLabel')"
              :placeholder="$t('company.register.form.contactInfo.contactPersonPlaceholder')"
            />

            <m-text-field
              name="email"
              rules="required|email"
              autocomplete="email"
              :label="$t('company.register.form.contactInfo.emailLabel')"
              :placeholder="$t('company.register.form.contactInfo.emailPlaceholder')"
            />

            <m-text-field
              name="externalWebsite"
              autocomplete="url"
              rules="required|url"
              :label="$t('company.register.form.contactInfo.externalWebsiteLabel')"
              :placeholder="$t('company.register.form.contactInfo.externalWebsitePlaceholder')"
            />

            <m-text-field
              name="phoneNumber"
              autocomplete="tel"
              rules="required|min:9"
              :label="$t('company.register.form.contactInfo.phoneNumberLabel')"
              :placeholder="$t('company.register.form.contactInfo.phoneNumberPlaceholder')"
            />
          </div>
        </template>

        <template #footer>
          <div class="register-company-contactInfo-step__footer">
            <a-button size="large" :text="$t('global.back')" @click="handlePreviousStep" />

            <a-button type="submit" size="large" :text="$t('global.next')" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'

import type { RegisterCompanyContactInfoStep } from '@interfaces/company/RegisterCompanyInterface'

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const registerCompanyStore = useRegisterCompanyStore()

// Methods
const handleNextStep = async (values: RegisterCompanyContactInfoStep) => {
  registerCompanyStore.setContactInfoStepData(values)
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}
</script>

<style lang="scss" scoped>
.register-company-contactInfo-step {
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
@/interfaces/company/RegisterCompanyInterfaceInterface