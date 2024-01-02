<template>
  <a-panel-section>
    <offer-filters @filter="handleFetchOffers" />

    <a-line />

    <a-loader v-if="isLoading" />

    <template v-else>
      <offer-list v-if="showList" :offers="offers" :show-company-name="false" />

      <a-list-no-results v-else :text="$t(`common.offer.list.${noResultsTranslationKey}`)" />
    </template>

    <o-pagination :pagination="paginationData" @page-changed="handleFetchOffers" />
  </a-panel-section>
</template>

<script setup lang="ts">
import router from '@/routes'
import CompanyPreviewService from '@/services/preview/company/CompanyPreviewService'
import OfferList from '@/components/common/offer/OfferList.vue'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { computed, ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

// Variables
const isLoading = ref(false)
const offers = ref<Offer[]>([])
const route = useRoute()
const slug = router.currentRoute.value.params.slug as string
const paginationData = ref<Pagination>()

// Computed
const showList = computed(() => {
  return offers.value.length > 0
})

const filtersUsed = computed(() => {
  const {
    query: { page, name, categoryId, subcategoryId, status, price, dateEnd }
  } = route

  return !!(page !== '1' || (name ?? categoryId ?? subcategoryId ?? status ?? price ?? dateEnd))
})

const noResultsTranslationKey = computed(() => {
  return offers.value.length === 0 && filtersUsed.value ? 'noOffersMatchingFilter' : 'noOffers'
})

// Methods
const handleFetchOffers = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, sortPrice, sortEndsAt }
  } = route

  const { data, success, pagination } = await CompanyPreviewService.getCompanyOffers(slug, {
    page: page as string,
    name: name as string,
    categoryId: categoryId as string,
    subcategoryId: subcategoryId as string,
    status: status as string,
    sortPrice: sortPrice as string,
    sortEndsAt: sortEndsAt as string
  })

  if (success) {
    offers.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(() => {
  handleFetchOffers()
})
</script>
