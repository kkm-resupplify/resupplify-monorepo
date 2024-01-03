<template>
  <div class="company-navigation">
    <router-link class="company-navigation__header" :to="{ name: RouteNames.COMPANY_DASHBOARD }">
      <a-image
        :alt="userStore.getCompany?.name"
        :src="userStore.getCompany?.details?.logo"
        width="60px"
        variant="rounded"
        class="company-navigation__avatar"
      />

      <a-title
        class="company-navigation__company-name"
        :title="userStore.getCompany?.name"
        size="large"
      />
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
import { useUserStore } from '@/stores/user/useUserStore'

// Variables
const { t } = useI18n()
const userStore = useUserStore()

// Computed
const tabs = computed(() => [
  {
    to: { name: RouteNames.COMPANY_DASHBOARD },
    title: t('company.management.navigation.dashboard.title'),
    icon: 'dashboard'
  },
  {
    to: { name: RouteNames.COMPANY_OFFERS_TILES },
    title: t('company.management.navigation.offers.title'),
    icon: 'sell'
  },
  {
    to: { name: RouteNames.COMPANY_ORDERS_TILES },
    title: t('company.management.navigation.orders.title'),
    icon: 'package_2'
  },
  {
    to: { name: RouteNames.COMPANY_PRODUCT_TILES },
    title: t('company.management.navigation.products.title'),
    icon: 'inventory_2'
  },
  {
    to: { name: RouteNames.COMPANY_WAREHOUSE_TILES },
    title: t('company.management.navigation.warehouses.title'),
    icon: 'warehouse'
  },
  {
    to: { name: RouteNames.COMPANY_MEMBERS_TILES },
    title: t('company.management.navigation.members.title'),
    icon: 'groups'
  },
  {
    to: { name: RouteNames.COMPANY_PAYMENTS_TILES },
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
  }

  &__company-name {
    align-self: flex-start;
    word-break: break-all;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }
}
</style>
