<template>
  <div class="company-verify-statistics">
    <a-title
      v-for="(stat, idx) in statList"
      :key="idx"
      :title="getTranslationText(stat.text)"
      :subtitle="stat.value"
      variant="horizontal"
      :basis="22"
      append-colon
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCompany } from '@/composables/company/useCompany'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import CompanyStatusEnum from '@sharedEnums/company/CompanyStatusEnum'

const props = defineProps({
  companies: {
    type: Array as PropType<CompanyData[]>,
    required: true
  }
})

// Variables
const { t } = useI18n()
const { countCompaniesByStatus } = useCompany()

// Computed
const statList = computed(() => {
  return [
    {
      text: 'unverified',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.UNVERIFIED)
    },
    {
      text: 'rejected',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.REJECTED)
    }
  ]
})

// Methods
const getTranslationText = (key: string) => {
  return t(`company.verify.stat.${key}`)
}
</script>

<style scoped lang="scss">
.company-verify-statistics {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
