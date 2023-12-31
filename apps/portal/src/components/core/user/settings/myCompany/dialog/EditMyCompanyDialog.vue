<template>
  <m-dialog ref="dialogRef" :title="company.name">
    <template #activator>
      <a-button
        :text="$t('settings.myCompany.editDetails')"
        size="x-large"
        class="my-company-section__button"
      />
    </template>

    <register-company />
  </m-dialog>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType } from 'vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'

const props = defineProps({
  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})
</script>
