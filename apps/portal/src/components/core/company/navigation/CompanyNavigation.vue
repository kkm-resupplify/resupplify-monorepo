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
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()

// Computed
const tabs = computed(() => [
  {
    to: { name: RouteNames.COMPANY_DASHBOARD },
    title: t('company.management.navigation.dashboard.title'),
    icon: 'dashboard'
  },
  {
    to: { name: RouteNames.COMPANY_OFFERS },
    title: t('company.management.navigation.offers.title'),
    icon: 'sell'
  },
  {
    to: { name: RouteNames.COMPANY_DEALS },
    title: t('company.management.navigation.deals.title'),
    icon: 'price_change'
  },
  {
    to: { name: RouteNames.COMPANY_PRODUCTS },
    title: t('company.management.navigation.products.title'),
    icon: 'inventory_2'
  },
  {
    to: { name: RouteNames.COMPANY_WAREHOUSES },
    title: t('company.management.navigation.warehouses.title'),
    icon: 'warehouse'
  },
  {
    to: { name: RouteNames.COMPANY_MEMBERS },
    title: t('company.management.navigation.members.title'),
    icon: 'groups'
  },
  {
    to: { name: RouteNames.COMPANY_SETTINGS },
    title: t('company.management.navigation.settings.title'),
    icon: 'settings'
  },
  {
    to: { name: RouteNames.COMPANY_PAYMENTS },
    title: t('company.management.navigation.payments.title'),
    icon: 'account_balance'
  }
])
</script>

<style lang="scss" scoped>
.company-navigation {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-30;

  padding: $global-spacing-40 $global-spacing-50;

  background-color: var(--secondary-1);
  border-radius: $global-border-radius-10 0 0 $global-border-radius-10;

  &__header {
    display: flex;
    gap: $global-spacing-40;
    align-items: center;

    min-width: 240px;
    max-width: 240px;

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