<template>
  <div class="offer-dashboard-offer-list">
    <offer-dashboard-offer-list-item />
  </div>
</template>

<script setup lang="ts">
import OfferDashboardOfferListItem from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferListItem.vue'
</script>

<style lang="scss" scoped>
.offer-dashboard-offer-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;
}
</style>
