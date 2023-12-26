<template>
  <a-panel-section>
    <offer-filters @filter="handleFetchOffers" />

    <div>Offer list</div>
  </a-panel-section>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
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
const handleFetchOffers = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, price, dateEnd }
  } = route

  const { data, success } = await CompanyPreviewService.getCompanyOffers(slug, {
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string,
    price: price as string,
    dateEnd: dateEnd as string
  })

  if (success) {
    offers.value = data
  }

  isLoading.value = false
}
</script>
