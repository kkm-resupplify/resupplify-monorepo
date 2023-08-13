<template>
  <a-card>
    <template #title>{{ company.companyName }}</template>
    <template #content>
      <div class="company-card-content">
        <div class="company-card-content__description">{{ company.shortDescription }}</div>

        <div class="company-card-content__stats">
          <div class="company-card-content__stat-item">
            <span class="material-icons-outlined company-card-content__icon">category</span>

            <span>{{ numberFormatter(company.companyStats.productsListed) }}</span>
          </div>

          <div class="company-card-content__stat-item company-card-content__icon">
            <span class="material-icons-outlined">groups</span>

            <span>{{ numberFormatter(company.companyStats.uniqueClients) }}</span>
          </div>

          <div class="company-card-content__stat-item company-card-content__icon">
            <span class="material-icons-outlined">local_shipping</span>

            <span>{{ numberFormatter(company.companyStats.ordersFullfilled) }}</span>
          </div>
        </div>
      </div>
    </template>
  </a-card>
</template>

<script setup lang="ts">
// Composables
import { useShortNumberFormatComposable } from '@sharedComposables/numeric/useShortNumberFormatComposable'

// Components
import ACard from '@sharedAtoms/card/ACard.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => ({
      companyName: 'KKM Marketify',
      shortDescription: 'Company specializes in this and that...',
      companyStats: {
        productsListed: 1339,
        uniqueClients: 237,
        ordersFullfilled: 27932
      }
    })
  }
})

const numberFormatter = useShortNumberFormatComposable()
</script>

<style scoped lang="scss">
.company-card-content {
  display: flex;
  flex-direction: column;
  background-color: $global-colors-white;
  border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

  &__header {
    display: flex;
    flex: 1;
  }

  &__body {
    display: flex;
    flex-direction: column;
  }

  &__stats {
    display: flex;
    flex-direction: column;
  }

  &__stat-item {
    display: flex;
    gap: $global-spacing-20;
    align-items: center;
    padding: $global-spacing-10;
  }

  &__icon {
    color: $global-colors-blue-500;
  }
}
</style>
