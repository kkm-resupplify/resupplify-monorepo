<template>
  <div class="company-all-statistics">
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
      text: 'verified',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.VERIFIED)
    },
    {
      text: 'unverified',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.UNVERIFIED)
    },
    {
      text: 'rejected',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.REJECTED)
    },
    {
      text: 'suspended',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.SUSPENDED)
    },
    {
      text: 'inactive',
      value: countCompaniesByStatus(props.companies, CompanyStatusEnum.INACTIVE)
    }
  ]
})

// Methods
const getTranslationText = (key: string) => {
  return t(`company.all.stat.${key}`)
}
</script>

<style scoped lang="scss">
.company-all-statistics {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
