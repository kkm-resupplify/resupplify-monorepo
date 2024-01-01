<template>
  <a-list class="offer-dashboard-offer-list">
    <offer-dashboard-offer-list-item
      v-for="offer in offers"
      :key="offer.id"
      :offer="offer"
      @offer-changed="handleOfferChange"
    />
  </a-list>
</template>

<script setup lang="ts">
import OfferDashboardOfferListItem from '@/components/core/company/management/offers/dashboard/section/content/list/OfferDashboardOfferListItem.vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'

defineProps({
  offers: {
    type: Array as PropType<Offer[]>,
    required: true
  }
})

// Emits
const emits = defineEmits(['offer-changed'])

// Methods
const handleOfferChange = () => {
  emits('offer-changed')
}
</script>
