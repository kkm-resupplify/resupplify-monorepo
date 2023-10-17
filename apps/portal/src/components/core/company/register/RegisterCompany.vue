<template>
  <m-stepper
    class="register-company"
    :steps="steps"
    title="Company registration"
    description="Please provide information about your company."
  />
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'
import RegisterCompanyGeneralStep from './steps/RegisterCompanyGeneralStep.vue'
import RegisterCompanyDetailsStep from './steps/RegisterCompanyDetailsStep.vue'
import RegisterCompanyContactInfoStep from './steps/RegisterCompanyContactInfoStep.vue'
import RegisterCompanySubmitStep from './steps/RegisterCompanySubmitStep.vue'

// Interface
interface RegisterCompanyStep {
  step: string
  icon: string
}

// DTO
class RegisterCompanyStepDTO {
  title: string
  subtitle: string
  description: string
  icon: string

  constructor({ step, icon }: RegisterCompanyStep) {
    this.title = this.getTranslation(step, 'title')
    this.subtitle = this.getTranslation(step, 'subtitle')
    this.description = this.getTranslation(step, 'description')
    this.icon = icon
  }

  getTranslation(step: string, key: string) {
    return t(`company.register.steps.${step}.${key}`)
  }
}
// Variables
const { t } = useI18n()
const registerCompanyStore = useRegisterCompanyStore()

// Computed
const steps = computed(() => [
  {
    stepInfo: new RegisterCompanyStepDTO({ step: 'general', icon: 'apartment' }),
    component: RegisterCompanyGeneralStep
  },
  {
    stepInfo: new RegisterCompanyStepDTO({ step: 'details', icon: 'info_i' }),
    component: RegisterCompanyDetailsStep
  },
  {
    stepInfo: new RegisterCompanyStepDTO({ step: 'contactInfo', icon: 'alternate_email' }),
    component: RegisterCompanyContactInfoStep
  },
  {
    stepInfo: new RegisterCompanyStepDTO({ step: 'submit', icon: 'check' }),
    component: RegisterCompanySubmitStep
  }
])

onUnmounted(() => {
  registerCompanyStore.$reset()
})
</script>

<style lang="scss" scoped>
.register-company {
  display: flex;
  max-width: 800px;
  min-height: 600px;
}
</style>
