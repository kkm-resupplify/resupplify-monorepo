<template>
  <basic-view-layout>
    <template #body>
      <div>offer-header</div>

      <offer-filters />

      <div>offer-list</div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferFilters from '@/components/common/offer/OfferFilters.vue'
</script>
