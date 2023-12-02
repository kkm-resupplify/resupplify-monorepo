<template>
  <a-panel-section class="product-tags-header-section">
    <a-title :title="$t('company.management.products.tags.title')" size="x-large" />

    <add-product-tag-dialog />
  </a-panel-section>
</template>

<script setup lang="ts">
import AddProductTagDialog from '@/components/core/company/management/products/tags/dialog/AddProductTagDialog.vue'
</script>

<style scoped lang="scss">
.product-tags-header-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: $global-spacing-100;
  padding-block: $global-spacing-100;
}
</style>
