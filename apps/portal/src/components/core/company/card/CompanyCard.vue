<template>
  <a-card>
    <template #title>{{ company.companyName }}</template>
    <template #content>
      <div class="company-card-content">
        <div class="company-card-content__description">{{ company.shortDescription }}</div>

        <div class="company-card-content__stats">
          <div class="company-card-content__stat-item">
            <a-icon icon="category" size="x-large" variant="outlined" />

            <span>{{ numberFormatter(company.companyStats.productsListed) }}</span>
          </div>

          <div class="company-card-content__stat-item">
            <a-icon icon="groups" size="x-large" variant="outlined" />

            <span>{{ numberFormatter(company.companyStats.uniqueClients) }}</span>
          </div>

          <div class="company-card-content__stat-item">
            <a-icon icon="local_shipping" size="x-large" variant="outlined" />

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
import AIcon from '@sharedAtoms/icon/AIcon.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => ({
      companyName: 'KKM Marketify',
      shortDescription:
        'Company specializes in this and that. We offer products of the highest quality in this industry.',
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
  flex: 1 0 0;
  gap: $global-spacing-30;
  align-items: flex-start;
  align-self: stretch;

  max-height: 84px;
  padding: $global-spacing-20;

  background-color: $global-colors-white;
  border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

  &__description {
    overflow: hidden;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    align-self: stretch;

    line-height: 28px;

    text-align: justify;
    text-overflow: ellipsis;
  }

  &__stats {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }

  &__stat-item {
    display: flex;
    gap: $global-spacing-20;
    align-items: center;
    padding: $global-spacing-10;
  }
}
</style>
