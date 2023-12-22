<template>
  <basic-view-layout class="test-view">
    <template #body>
      <offer-filters />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
