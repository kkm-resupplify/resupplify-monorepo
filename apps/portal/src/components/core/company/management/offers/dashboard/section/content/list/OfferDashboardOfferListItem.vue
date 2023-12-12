<template>
  <a-expansion-panel class="offer-dashboard-offer-list-item">
    <template #activator>
      <a-list-item-wrapper class="offer-dashboard-offer-list-item__activator">
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="offer-dashboard-offer-list-item__content"></div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'

defineProps({
  offer: {
    type: Object as PropType<Offer>
  }
})
</script>
