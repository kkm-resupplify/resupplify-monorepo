<template>
  <a-expansion-panel>
    <template #activator>
      <a-list-item-wrapper class="company-list-company-list-item">
        <a-status-indicator :status="company.status" />

        <a-list-item-title-section :title="$t('company.data.name')" :value="company.name" />

        <a-list-item-title-section :title="$t('company.data.tin')" :value="company.details.tin" />

        <a-list-item-title-section
          :title="$t('company.data.phoneNumber')"
          :value="company.details.phoneNumber"
        />

        <a-list-item-title-section
          :title="$t('company.data.contactPerson')"
          :value="company.details.contactPerson"
        />
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="company-list-company-list-item__content">
        <a-title
          v-for="(companyDetail, idx) in companyDetailsContent"
          :key="idx"
          :title="companyDetail.title"
          :subtitle="companyDetail.value"
          append-colon
        />
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import { type PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  company: {
    type: Object as PropType<CompanyData>,
    required: true
  }
})

// Variables
const { t } = useI18n()

// Computed
const companyDetailsContent = computed(() => {
  return [
    { title: t('company.data.shortDescription'), value: props.company.shortDescription },
    { title: t('company.data.description'), value: props.company.description },
    { title: t('company.data.email'), value: props.company.details.email },
    { title: t('company.data.address'), value: props.company.details.address },
    { title: t('company.data.externalWebsite'), value: props.company.details.externalWebsite }
  ]
})
</script>

<style lang="scss" scoped>
.company-list-company-list-item {
  &__actions {
    display: flex;
    flex: 1;
    gap: $global-spacing-70;
    justify-content: flex-end;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
  }
}
</style>
