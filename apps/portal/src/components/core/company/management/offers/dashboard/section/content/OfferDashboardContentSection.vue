<template>
  <a-panel-section class="offer-dashboard-content-section">
    <div>Filters</div>

    <template v-if="isLoading">implement-loader-here</template>

    <offer-dashboard-offer-list v-else :offers="offers" />
  </a-panel-section>
</template>

<script setup lang="ts">
import OfferDashboardOfferList from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferList.vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'

defineProps({
  offers: {
    type: Array as PropType<Offer[]>,
    required: true
  },
  isLoading: Boolean
})
</script>

<style lang="scss" scoped>
.offer-dashboard-content-section {
  display: flex;
}
</style>
