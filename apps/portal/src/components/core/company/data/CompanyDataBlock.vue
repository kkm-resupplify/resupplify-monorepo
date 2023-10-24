<template>
  <div class="company-data-block">
    <div class="company-data-block__section">
      <a-title :title="$t('company.data.generalInformation')" size="x-large" />

      <div class="company-data-block__section-items">
        <a-title
          v-for="(item, idx) in companyGeneralData"
          :key="idx"
          variant="horizontal"
          :title="item.title"
          :subtitle="item.value"
          append-colon
        />
      </div>
    </div>

    <a-line :height="1" />

    <div class="company-data-block__section">
      <a-title :title="$t('company.data.companyDetails')" size="x-large" />

      <div class="company-data-block__section-items">
        <a-title
          v-for="(item, idx) in companyDetailsData"
          :key="idx"
          variant="horizontal"
          :title="item.title"
          :subtitle="item.value"
          append-colon
        />
      </div>
    </div>

    <a-line :height="1" />

    <div class="company-data-block__section">
      <a-title :title="$t('company.data.contactInformation')" size="x-large" />

      <div class="company-data-block__section-items">
        <a-title
          v-for="(item, idx) in companyContactData"
          :key="idx"
          variant="horizontal"
          :title="item.title"
          :subtitle="item.value"
          append-colon
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CompanyData } from '@/interfaces/company/CompanyInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  company: {
    type: [Object as PropType<CompanyData>],
    required: true
  }
})
// Variables
const { t } = useI18n()

// Computed
const companyGeneralData = computed(() => {
  return [
    { title: t('company.data.name'), value: props.company.name },
    { title: t('company.data.description'), value: props.company.description },
    { title: t('company.data.shortDescription'), value: props.company.shortDescription }
  ]
})

const companyDetailsData = computed(() => {
  return [
    { title: t('company.data.country'), value: props.company.details.countryId },
    { title: t('company.data.address'), value: props.company.details.address },
    { title: t('company.data.category'), value: props.company.details.companyCategoryId },
    { title: t('company.data.tin'), value: props.company.details.tin }
  ]
})

const companyContactData = computed(() => {
  return [
    { title: t('company.data.contactPerson'), value: props.company.details.contactPerson },
    { title: t('company.data.email'), value: props.company.details.email },
    { title: t('company.data.externalWebsite'), value: props.company.details.externalWebsite },
    { title: t('company.data.phoneNumber'), value: props.company.details.phoneNumber }
  ]
})
</script>

<style lang="scss" scoped>
.company-data-block {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-60;
}
</style>
