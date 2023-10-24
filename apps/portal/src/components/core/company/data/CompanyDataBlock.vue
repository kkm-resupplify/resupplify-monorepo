<template>
  <div class="company-data-block">
    <div class="company-data-block__section">
      <a-title title="Company general data" />

      <div class="company-data-block__section-items">
        <a-title
          v-for="(item, idx) in companyGeneralData"
          :key="idx"
          variant="horizontal"
          :title="item.title"
          :value="item.value"
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

defineProps({
  company: {
    type: [Object as PropType<CompanyData>]
  }
})
// Variables
const { t } = useI18n()

// Computed
const companyGeneralData = computed(() => {
  return [{ title: t(''), value: '' }]
})
</script>

<style lang="scss" scoped>
.company-data-block {
  display: flex;
  flex-direction: column;
}
</style>
