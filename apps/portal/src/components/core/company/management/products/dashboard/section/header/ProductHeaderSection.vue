<template>
  <a-panel-section>
    <div class="product-header-section">
      <div class="product-header-section__titles">
        <a-title :title="userStore.getCompany?.name" size="x-large" />

        <a-title
          :title="$t('company.management.navigation.products.dashboard.totalProducts')"
          size="x-large"
        />
      </div>
      <router-link :to="{ name: RouteNames.COMPANY_PRODUCT_EDITOR }">
        <a-button
          :text="$t('company.management.navigation.products.dashboard.addProduct')"
          size="x-large"
          class="product-header-section__button"
        />
      </router-link>
    </div>
  </a-panel-section>
</template>
<script setup lang="ts">
import { RouteNames } from '@/routes'
import { useUserStore } from '@/stores/user/useUserStore'

// Variables
const userStore = useUserStore()
</script>
<style scoped lang="scss">
.product-header-section {
  display: flex;
  justify-content: space-between;
  padding: $global-spacing-40;
}
</style>
