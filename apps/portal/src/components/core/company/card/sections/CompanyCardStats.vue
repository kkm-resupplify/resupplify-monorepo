<template>
  <div class="company-card-stats">
    <company-card-stat-item icon="category" :value="companyStats.productsListed" />

    <company-card-stat-item icon="groups" :value="companyStats.uniqueClients" />

    <company-card-stat-item icon="local_shipping" :value="companyStats.ordersFullfilled" />
  </div>
</template>

<script setup lang="ts">
// Components
import CompanyCardStatItem from '@/components/core/company/card/sections/items/CompanyCardStatItem.vue'

// Props
defineProps({
  companyStats: { type: Object, required: true }
})
</script>

<style scoped>
.company-card-stats {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}
</style>
