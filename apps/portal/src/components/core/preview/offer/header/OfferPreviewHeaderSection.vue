<template>offer-preview-header-section</template>

<script setup lang="ts">
import OfferPreviewService from '@/services/preview/offer/OfferPreviewService'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { computed, onBeforeMount } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Variables
const offer = ref<Offer>()
const route = useRoute()

// Computed
const id = computed(() => {
  return route.params.id as string
})

// Methods
const handleFetchOffer = async () => {
  const { data, success } = await OfferPreviewService.getOffer(id.value)

  if (success) {
    console.log(data)
  }
}

// Hooks
onBeforeMount(() => {
  handleFetchOffer()
})
</script>
