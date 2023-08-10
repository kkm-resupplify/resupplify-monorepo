<template>
  <a-card>
    <template #body>
      <div class="company-card-content">
        <div class="company-card-content__header">{{ company.companyName }}</div>
        <div class="company-card-content__body">
          <div class="company-card-content__description">A</div>
          <div class="company-card-content__stats">B</div>
        </div>
      </div>
    </template>
  </a-card>
</template>

<script setup lang="ts">
// Components
import ACard from '@sharedAtoms/card/ACard.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => ({
      companyName: 'KKM Marketify',
      shortDescription:
        'Company specializes in this and that. We offer products of the highest quality in the chemical industry.',
      companyStats: {
        productsListed: 1300,
        uniqueClients: 237,
        ordersFullfilled: 27.9
      }
    })
  }
})
</script>

<style scoped lang="scss">
.company-card-content {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
  }

  &__body {
    display: flex;
  }
}
</style>
