<template>
  <m-stepper-step-content class="register-company-submit-step">
    <template #body>
      <div class="register-company-submit-step__footer">
        <a-button size="large" :text="$t('global.back')" @click="handlePreviousStep" />

        <a-button type="submit" size="large" :text="$t('global.next')" />
      </div>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import type { RegisterCompanyContactInfoStep } from '@interfaces/company/registerCompany'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const registerCompanyStore = useRegisterCompanyStore()

// Methods
const handleNextStep = async (values: RegisterCompanyContactInfoStep) => {
  registerCompanyStore.setContactInfoStepData(values)
  emits('next-step')
}

const handlePreviousStep = (values: RegisterCompanyContactInfoStep) => {
  registerCompanyStore.setContactInfoStepData(values)
  emits('previous-step')
}
</script>

<style lang="scss" scoped>
.register-company-submit-step {
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
