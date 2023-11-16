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
              :options="companyCategoryList"
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

            <m-file-input
              name="logo"
              :label="$t('company.register.form.details.companyLogoLabel')"
              :placeholder="$t('company.register.form.details.companyLogoPlaceholder')"
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

// Emits
const emits = defineEmits(['next-step', 'previous-step'])

// Variables
const registerCompanyStore = useRegisterCompanyStore()

// Methods
const handleNextStep = async (values: RegisterCompanyDetailsStep) => {
  registerCompanyStore.setDetailsStepData(values)
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}

const companyCategoryList = computed(() => {
  return [
    { id: 1, text: 'Beverages' },
    { id: 2, text: 'Snacks' },
    { id: 3, text: 'Personal Care' },
    { id: 4, text: 'Household Essentials' },
    { id: 5, text: 'Frozen Foods' },
    { id: 6, text: 'Dairy Products' },
    { id: 7, text: 'Bakery and Confectionery' },
    { id: 8, text: 'Canned Goods' },
    { id: 9, text: 'Health and Wellness' },
    { id: 10, text: 'Baby Care' },
    { id: 11, text: 'Pet Care' },
    { id: 12, text: 'Cleaning Supplies' },
    { id: 13, text: 'Toiletries' },
    { id: 14, text: 'Paper Products' },
    { id: 15, text: 'Cosmetics' },
    { id: 16, text: 'Spices and Condiments' },
    { id: 17, text: 'Breakfast Foods' },
    { id: 18, text: 'Instant Noodles and Pasta' },
    { id: 19, text: 'Cooking Oils' },
    { id: 20, text: 'Sauces and Marinades' },
    { id: 21, text: 'Nutritional Supplements' },
    { id: 22, text: 'Office and School Supplies' }
  ]
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
