<template>
  <a-card>
    <template #title>{{ company.companyName }}</template>
    <template #content>
      <div class="company-card-content">
        <div class="company-card-content__description">{{ company.shortDescription }}</div>
        <div class="company-card-content__stats">
          Products Listed: {{ company.companyStats.productsListed }}<br />
          Unique Clients: {{ company.companyStats.uniqueClients }}<br />
          Orders Fulfilled: {{ company.companyStats.ordersFullfilled }}
        </div>
      </div>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ACard from '@sharedAtoms/card/ACard.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => ({
      companyName: 'KKM Marketify',
      shortDescription: 'Company specializes in this and that...',
      companyStats: {
        productsListed: 1300,
        uniqueClients: 237,
        ordersFullfilled: 27.9
      }
    })
  }
})

const isHovering = ref(false)
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
}
</style>
