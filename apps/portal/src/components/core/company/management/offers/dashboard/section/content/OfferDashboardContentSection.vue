<template>
  <a-panel-section class="offer-dashboard-content-section">
    <div>Filters</div>

    <offer-dashboard-offer-list />
  </a-panel-section>
</template>

<script setup lang="ts">
import OfferDashboardOfferList from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferList.vue'
</script>

<style lang="scss" scoped>
.offer-dashboard-content-section {
  display: flex;
}
</style>
