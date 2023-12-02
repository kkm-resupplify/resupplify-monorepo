<template>
  <a-panel-section class="product-tags-header-section">
    <a-title :title="$t('company.management.products.tags.title')" size="x-large" />

    <div class="product-tags-header-section__body">
      <span v-text="$t('company.management.products.tags.description')" />

      <add-product-tag-dialog />
    </div>
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

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
