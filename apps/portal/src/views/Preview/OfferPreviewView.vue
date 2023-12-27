<template>
  <basic-view-layout>
    <template #body>
      <a-panel width="auto">
        <offer-preview-header-section />

        <offer-preview-content-section />
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import OfferPreviewHeaderSection from '@/components/core/preview/offer/header/OfferPreviewHeaderSection.vue'
import OfferPreviewContentSection from '@/components/core/preview/offer/content/OfferPreviewContentSection.vue'
</script>
