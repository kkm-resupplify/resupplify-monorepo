<template>
  <a-panel-section>
    <offer-filters />

    <div>Offer list</div>
  </a-panel-section>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
import { ref } from 'vue'

const offers = ref<Offer[]>([])
</script>
