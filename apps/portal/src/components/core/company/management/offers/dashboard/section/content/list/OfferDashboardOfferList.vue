<template>
  <a-list class="offer-dashboard-offer-list">
    <offer-dashboard-offer-list-item v-for="offer in offers" :key="offer.id" :offer="offer" />
  </a-list>
</template>

<script setup lang="ts">
import OfferDashboardOfferListItem from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferListItem.vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'

defineProps({
  offers: {
    type: Array as PropType<Offer[]>
  }
})
</script>

<style lang="scss" scoped>
.offer-dashboard-offer-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;
}
</style>
