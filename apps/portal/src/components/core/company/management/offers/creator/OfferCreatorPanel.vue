<template>
  <a-panel class="offer-creator-panel">
    <a-panel-section>
      <offer-creator-form />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import OfferCreatorForm from './OfferCreatorForm.vue'
</script>

<style lang="scss" scoped>
.offer-creator-panel {
  display: flex;
}
</style>
