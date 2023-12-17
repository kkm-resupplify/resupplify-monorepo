<template>
  <a-list-item-wrapper class="offer-list-item">
    {{ offer }}
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.offer-list-item {
  display: flex;
}
</style>
