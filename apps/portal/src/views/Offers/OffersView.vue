<template>
  <basic-view-layout>
    <template #body>
      <div class="offers-view__content">
        <a-panel-section>
          <a-title :title="$t('offers.list.title')" size="x-large" />
          <div>offer-header</div>
        </a-panel-section>

        <a-panel-section>
          <offer-filters @filter="handleFetchOffers" />

          <a-line />

          <template v-if="isLoading">implement-loader-here</template>

          <template v-else>
            <offer-list :offers="offers" />
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
import { ref, onBeforeMount } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import CompanyOffersService from '@/services/company/CompanyOffersService'
import { useRoute } from 'vue-router'

// Variables
const isLoading = ref(false)
const route = useRoute()
const paginationData = ref<Pagination>()
const offers = ref<Offer[]>([])

// Methods
const handleFetchOffers = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId, subcategoryId, status, price, dateEnd }
  } = route
  const { success, data, pagination } = await CompanyOffersService.getOffers({
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
