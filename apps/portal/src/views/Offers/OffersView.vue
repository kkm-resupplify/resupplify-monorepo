<template>
  <basic-view-layout>
    <template #body>
      <div class="offers-view__content">
        <a-panel-section>
          <a-title :title="$t('offers.header.title')" size="x-large" />

          <a-title :title="$t('offers.header.description')" />
        </a-panel-section>

        <a-panel-section>
          <offer-filters @filter="handleFetchOffers" />

          <a-line />

          <a-skeleton v-if="isLoading" />

          <template v-else>
            <offer-list v-if="showList" :offers="offers" />

            <a-list-no-results v-else :text="$t(`common.offer.list.${noResultsTranslationKey}`)" />
          </template>

          <o-pagination :pagination="paginationData" @page-changed="handleFetchOffers" />
        </a-panel-section>
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
import OfferList from '@/components/common/offer/OfferList.vue'
import { ref, onBeforeMount, computed } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import CompanyOffersService from '@/services/company/CompanyOffersService'
import { useRoute } from 'vue-router'

// Variables
const isLoading = ref(false)
const route = useRoute()
const paginationData = ref<Pagination>()
const offers = ref<Offer[]>([])

// Computed
const showList = computed(() => {
  return offers.value.length > 0
})

const noResultsTranslationKey = computed(() => {
  return offers.value.length === 0 && filtersUsed.value ? 'noOffersMatchingFilter' : 'noOffers'
})

const filtersUsed = computed(() => {
  const {
    query: { page, name, categoryId, subcategoryId, status, price, dateEnd }
  } = route

  return !!(page !== '1' || (name ?? categoryId ?? subcategoryId ?? status ?? price ?? dateEnd))
})

// Methods
const handleFetchOffers = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, sortPrice, sortEndsAt }
  } = route

  const { success, data, pagination } = await CompanyOffersService.getOffers({
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

<style lang="scss" scoped>
.offers-view {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }
}
</style>
