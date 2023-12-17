<template>CompanyPreviewOfferListItem</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'

defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  }
})
</script>
