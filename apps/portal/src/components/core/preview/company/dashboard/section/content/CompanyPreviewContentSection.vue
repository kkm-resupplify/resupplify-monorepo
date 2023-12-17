<template>
  Filters

  <br />

  List
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { ref } from 'vue'

const offers = ref<Offer[]>([])
</script>
