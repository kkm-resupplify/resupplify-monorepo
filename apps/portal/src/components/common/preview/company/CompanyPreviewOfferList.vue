<template>
  <company-preview-offer-list-item v-for="offer in offers" :key="offer.id" :offer="offer" />
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'
import CompanyPreviewOfferListItem from './CompanyPreviewOfferListItem.vue'

defineProps({
  offers: Array as PropType<Offer[]>
})
</script>
