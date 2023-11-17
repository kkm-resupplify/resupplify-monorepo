<template>
  <a-list-item-wrapper class="product-list-item">
    <a-list-item-title-section
      :title="$t('company.management.navigation.products.tags.listItem.name')"
      :value="name"
      :basis="20"
    />
  </a-list-item-wrapper>
</template>
<script setup lang="ts">
defineProps({
  name: String
})
</script>

<style scoped lang="scss">
.product-list-item {
  justify-content: space-between;
  min-width: 600px;

  &__tags {
    display: flex;
    flex-direction: column;
  }

  &__tags-items {
    display: flex;
    gap: $global-spacing-30;
  }

  &__status-section {
    display: flex;
    gap: $global-spacing-50;
  }
}
</style>
