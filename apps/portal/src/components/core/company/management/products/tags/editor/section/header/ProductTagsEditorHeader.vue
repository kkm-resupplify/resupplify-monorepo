<template>
  <a-panel-section class="product-tags-editor-header">
    <a-title
      :title="$t('company.management.navigation.products.tags.editor.title')"
      size="x-large"
    />

    <add-product-tag-dialog />
  </a-panel-section>
</template>
<script setup lang="ts">
import AddProductTagDialog from '../../../dialog/AddProductTagDialog.vue'
</script>
<style scoped lang="scss">
.product-tags-editor-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: $global-spacing-100;
  padding-block: $global-spacing-100;
}
</style>
