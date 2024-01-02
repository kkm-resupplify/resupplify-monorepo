<template>
  <basic-view-layout>
    <template #body>
      <a-panel width="auto">
        <template v-if="isLoading || !offer">
          <a-skeleton height="240px" />

          <a-skeleton height="400px" />
        </template>

        <template v-else>
          <offer-preview-header-section :offer="offer" />

          <offer-preview-content-section :product="offer.product" :company="offer.company" />
        </template>
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferPreviewHeaderSection from '@/components/core/preview/offer/header/OfferPreviewHeaderSection.vue'
import OfferPreviewContentSection from '@/components/core/preview/offer/content/OfferPreviewContentSection.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import OfferPreviewService from '@/services/preview/offer/OfferPreviewService'

// Variables
const offer = ref<Offer>()
const route = useRoute()
const isLoading = ref(false)

// Computed
const id = computed(() => {
  return route.params.id as string
})

// Methods
const handleFetchOffer = async () => {
  isLoading.value = true

  const { data, success } = await OfferPreviewService.getOffer(id.value)

  if (success) {
    offer.value = data
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(() => {
  handleFetchOffer()
})
</script>
