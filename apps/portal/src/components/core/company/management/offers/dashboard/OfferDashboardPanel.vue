<template>
  <a-panel>
    <offer-dashboard-header-section />

    <offer-dashboard-content-section :offers="offers" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import OfferDashboardHeaderSection from '@/components/core/company/management/offers/dashboard/section/header/OfferDashboardHeaderSection.vue'
import OfferDashboardContentSection from '@/components/core/company/management/offers/dashboard/section/content/OfferDashboardContentSection.vue'
import { ref } from 'vue'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

// Variables
const offers = ref<Offer[]>([])
const isLoading = ref(false)
</script>
