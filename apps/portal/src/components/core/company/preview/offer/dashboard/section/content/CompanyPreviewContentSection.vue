<template>
  Filters

  <br />

  <company-preview-offer-list :offers="offers" />
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import CompanyPreviewOfferList from './list/CompanyPreviewOfferList.vue'
import { ref } from 'vue'

const offers = ref<Offer[]>([])
</script>
