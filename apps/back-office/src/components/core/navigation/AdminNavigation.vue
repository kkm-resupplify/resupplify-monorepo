<template>
  <div class="admin-navigation">
    <router-link class="admin-navigation__header" :to="{ name: RouteNames.ADMIN_DASHBOARD }">
      <div class="admin-navigation__avatar">PH</div>

      <a-title class="admin-navigation__company-name" title="Resupplify Back Office" size="large" />
    </router-link>

    <div class="admin-navigation__menu">
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
    to: { name: RouteNames.ADMIN_COMPANY_TILES },
    title: t('navigation.menu.companies'),
    icon: 'apartment'
  },
  {
    to: { name: RouteNames.ADMIN_PRODUCT_TILES },
    title: t('navigation.menu.products'),
    icon: 'inventory_2'
  }
])
</script>

<style lang="scss" scoped>
.admin-navigation {
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

  &__company-name {
    overflow: clip;
    text-overflow: ellipsis;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    min-width: 240px;
  }
}
</style>
