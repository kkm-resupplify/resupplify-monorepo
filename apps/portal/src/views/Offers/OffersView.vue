<template>
  <basic-view-layout>
    <template #body>
      <div class="offers-view__content">
        <a-panel-section>
          <a-title :title="$t('offers.list.title')" size="x-large" />
          <div>offer-header</div>
        </a-panel-section>

        <a-panel-section>
          <div>offer-filters</div>

          <a-line />

          <template v-if="isLoading">implement-loader-here</template>

          <offer-list v-else :offers="offers" />
        </a-panel-section>
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferList from '@/components/common/offer/OfferList.vue'
import { ref } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

// Variables
const offers = ref<Offer[]>([])
const isLoading = ref(false)
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
