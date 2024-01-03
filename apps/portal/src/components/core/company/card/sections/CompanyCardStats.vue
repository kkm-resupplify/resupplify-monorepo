<template>
  <div class="company-card-stats">
    <company-card-stat-item icon="category" :value="companyStats.productsSold" />

    <company-card-stat-item icon="groups" :value="companyStats.offersTotal" />

    <company-card-stat-item icon="local_shipping" :value="companyStats.uniqueClientsCount" />
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import CompanyCardStatItem from '@/components/core/company/card/sections/items/CompanyCardStatItem.vue'

interface CompanyStats {
  offersTotal: number
  productsSold: number
  uniqueClientsCount: number
}

// Props
defineProps({
  companyStats: {
    type: Object as PropType<CompanyStats>,
    required: true
  }
})
</script>

<style scoped>
.company-card-stats {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}
</style>
