<template>
  <div class="company-management-warehouse-preview-stats">
    <a-title
      v-for="(stat, idx) in statList"
      :key="idx"
      :title="getTranslationText(stat.text)"
      :subtitle="stat.value"
      variant="horizontal"
      :basis="20"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()

// Computed
const statList = computed(() => {
  return [
    { text: 'totalProductsCount', value: 0 },
    { text: 'belowSafeQuantityProductsCount', value: 0 },
    { text: 'soldOutProductsCount', value: 0 },
    { text: 'reservedProductsCount', value: 0 }
  ]
})

// Methods
const getTranslationText = (key: string) => {
  return t(`company.management.warehouse.preview.header.${key}`)
}
</script>

<style scoped lang="scss">
.company-management-warehouse-preview-stats {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
