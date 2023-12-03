<template>
  <a-panel-section class="product-tags-header-section">
    <a-title :title="$t('company.management.products.tags.title')" size="x-large" />

    <span v-text="$t('company.management.products.tags.description')" />
  </a-panel-section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product-tags-header-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
