<template>
  <a-panel-section>
    <offer-filters @filter="(filters) => handleFetchOffers(filters)" />

    <div>Offer list</div>
  </a-panel-section>
</template>

<script setup lang="ts">
import type { Offer, OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
import { ref } from 'vue'
import router from '@/routes'
import CompanyPreviewService from '@/services/preview/company/CompanyPreviewService'
import { useRoute } from 'vue-router'

// Variables
const offers = ref<Offer[]>([])
const slug = router.currentRoute.value.params.slug as string
const route = useRoute()
const isLoading = ref(false)

// Methods
const handleFetchOffers = async (filters: OfferFiltersParams) => {
  isLoading.value = true

  const {
    query: { page }
  } = route

  const { data, success } = await CompanyPreviewService.getCompanyOffers(slug, {
    page: page as string,
    ...filters
  })

  if (success) {
    offers.value = data
  }

  isLoading.value = false
}
</script>
