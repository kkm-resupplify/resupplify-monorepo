<template>
  <a-list>
    <offer-list-item
      v-for="offer in offers"
      :key="offer.id"
      :offer="offer"
      :show-company-name="showCompanyName"
    />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import OfferListItem from '@/components/common/offer/OfferListItem.vue'

defineProps({
  offers: {
    type: Array as PropType<Offer[]>,
    required: true
  },
  showCompanyName: {
    type: Boolean,
    default: true
  }
})
</script>
