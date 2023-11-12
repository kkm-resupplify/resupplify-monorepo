<template>
  <a-panel>
    <a-panel-section>
      <m-tile-list :tiles="tiles" />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes/index'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()

// Computed
const tiles = computed(() => [
  {
    title: t('navigation.tiles.product.verify'),
    icon: 'verified',
    to: { name: RouteNames.ADMIN_PRODUCT_VERIFY }
  },
  {
    title: t('navigation.tiles.product.list'),
    icon: 'list',
    to: { name: RouteNames.ADMIN_PRODUCT_LIST }
  },
  {
    title: t('navigation.tiles.product.category'),
    icon: 'list',
    to: { name: RouteNames.ADMIN_PRODUCT_CATEGORY }
  },
  {
    title: t('navigation.tiles.product.subcategory'),
    icon: 'list',
    to: { name: RouteNames.ADMIN_PRODUCT_SUBCATEGORY }
  }
])
</script>
