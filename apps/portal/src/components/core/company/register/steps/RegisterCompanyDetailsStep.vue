<template>
  <m-stepper-step-content class="register-company-details-step">
    <template #body>
      <o-form
        :initial-values="registerCompanyStore.detailsStepData"
        :submit-callback="handleNextStep"
        class="register-company-details-step__form"
      >
        <template #body>
          <div class="register-company-details-step__fields">
            <m-text-field
              name="address"
              rules="required|min:3"
              :label="$t('company.register.form.details.companyAddressLabel')"
              :placeholder="$t('company.register.form.details.companyAddressPlaceholder')"
            />

            <m-select
              :options="companyCategories"
              name="companyCategoryId"
              rules="required"
              :label="$t('company.register.form.details.companyCategoryLabel')"
              :placeholder="$t('company.register.form.details.companyCategoryPlaceholder')"
            />

            <m-text-field
              name="tin"
              rules="required|max:255"
              :label="$t('company.register.form.details.companyTinLabel')"
              :placeholder="$t('company.register.form.details.companyTinPlaceholder')"
            />

            <a-image-input
              name="image"
              :label="$t('company.register.form.details.companyLogoLabel')"
              :placeholder="$t('company.register.form.details.companyLogoPlaceholder')"
              :preview-src="registerCompanyStore.detailsStepData.imagePreview"
            />
          </div>
        </template>

        <template #footer>
          <div class="register-company-details-step__footer">
            <a-button size="large" :text="$t('global.back')" @click="handlePreviousStep" />

            <a-button type="submit" size="large" :text="$t('global.next')" />
          </div>
        </template>
      </o-form>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RegisterCompanyDetailsStep } from '@sharedInterfaces/company/RegisterCompanyInterface'
import { useRegisterCompanyStore } from '@/stores/company/useRegisterCompanyStore'
import StaticCompanyDescriptorsService from '@/services/company/StaticCompanyDescriptorsService'
import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'
import { useI18n } from 'vue-i18n'
import { onBeforeMount } from 'vue'

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const registerCompanyStore = useRegisterCompanyStore()
const staticCompanyDescriptionStore = useStaticCompanyDescriptorsStore()
const { t } = useI18n()

// Computed
const companyCategories = computed(() => {
  return staticCompanyDescriptionStore.getCompanyCategories.map((item) => ({
    id: item.id,
    text: t(`company.categories.${item.text}`)
  }))
})

// Methods
const handleNextStep = async (values: RegisterCompanyDetailsStep) => {
  registerCompanyStore.setDetailsStepData(values)
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}

// Hooks
onBeforeMount(async () => {
  await StaticCompanyDescriptorsService.getCategories()
})
</script>

<style lang="scss" scoped>
.register-company-details-step {
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
