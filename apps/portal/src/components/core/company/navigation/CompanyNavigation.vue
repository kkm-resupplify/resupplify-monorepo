<template>
  <div class="company-navigation">
    <router-link class="company-navigation__header" :to="{ name: RouteNames.COMPANY_DASHBOARD }">
      <div class="company-navigation__avatar">PH</div>

      <a-title title="Company Name Inc." size="large" />
    </router-link>

    <div class="company-navigation__menu">
      <m-navigation-tabs-item v-for="(tab, index) in tabs" :key="index" :tab="tab" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouteNames } from '@/routes/index'

// Computed
const tabs = computed(() => [
  { to: { name: RouteNames.COMPANY_DASHBOARD }, title: 'Dashboard', icon: 'dashboard' },
  { to: { name: RouteNames.COMPANY_OFFERS }, title: 'Offers', icon: 'sell' },
  { to: { name: RouteNames.COMPANY_DEALS }, title: 'Deals', icon: 'price_change' },
  { to: { name: RouteNames.COMPANY_PRODUCTS }, title: 'Products', icon: 'inventory_2' },
  { to: { name: RouteNames.COMPANY_WAREHOUSES }, title: 'Warehouses', icon: 'warehouse' },
  { to: { name: RouteNames.COMPANY_MEMBERS }, title: 'Members', icon: 'groups' },
  { to: { name: RouteNames.COMPANY_SETTINGS }, title: 'Settings', icon: 'settings' },
  { to: { name: RouteNames.COMPANY_PAYMENTS }, title: 'Payments', icon: 'account_balance' }
])
</script>

<style lang="scss" scoped>
.company-navigation {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  &__header {
    display: flex;
    gap: $global-spacing-40;
    align-items: center;

    width: 240px;

    text-decoration: none;
  }

  &__avatar {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 60px;
    min-height: 60px;

    background-color: var(--info);
    border-radius: $global-border-radius-10;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }
}
</style>
