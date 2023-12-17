<template>
  <div class="company-preview-offer-list">
    <company-preview-offer-list-item v-for="offer in offers" :key="offer.id" :offer="offer" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import CompanyPreviewOfferListItem from './CompanyPreviewOfferListItem.vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

defineProps({
  offers: Array as PropType<Offer[]>
})
</script>
