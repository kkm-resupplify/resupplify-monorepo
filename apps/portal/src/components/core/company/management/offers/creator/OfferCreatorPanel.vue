<template>
  <a-panel class="offer-creator-panel">
    <offer-creator-form-section />

    <offer-creator-side-panel-section />
  </a-panel>
</template>

<script setup lang="ts">
import OfferCreatorFormSection from './OfferCreatorFormSection.vue'
import OfferCreatorSidePanelSection from './OfferCreatorSidePanelSection.vue'
</script>

<style lang="scss" scoped>
.offer-creator-panel {
  display: flex;
  flex: 1;
  flex-direction: row !important;
}
</style>
