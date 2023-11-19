<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__titles">
        <a-title title="Company name" size="x-large" />

        <a-title title="Total products" size="x-large" />
      </div>
      <router-link :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }">
        <a-button text="Add product" size="x-large" class="product-header-section__button" />
      </router-link>
    </div>
  </a-panel-section>
</template>
<script setup lang="ts">
import { RouteNames } from '@/routes'
</script>
<style scoped lang="scss">
.product-header-section {
  display: flex;
  justify-content: space-between;
  padding: $global-spacing-40;
}
</style>
