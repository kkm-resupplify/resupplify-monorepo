<template>
  <div>Offer filters</div>

  <template v-if="isLoading">implement-loader-here</template>

  <template v-else>
    <offer-list v-if="showList" :offers="offers" />

    <a-list-no-results v-else :text="$t(`common.offer.list.${noResultsTranslationKey}`)" />
  </template>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { computed } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Variables
const isLoading = ref(false)
const offers = ref<Offer[]>([])
const route = useRoute()

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
</script>
