<template>
  <a-panel-section class="offer-dashboard-header-section">
    <a-title :title="$t('company.management.offer.companyOffers')" size="x-large" />

    <m-alert variant="danger">
      <span v-text="$t('company.management.offer.companyOffersNotVisible')" />
    </m-alert>
  </a-panel-section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.offer-dashboard-header-section {
  display: flex;
}
</style>
