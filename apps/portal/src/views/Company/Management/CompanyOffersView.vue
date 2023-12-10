<template>
  <a-panel>
    <a-panel-section>
      <m-tile-list :tiles="tiles" />
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteNames } from '@/routes/index'

// Variables
const { t } = useI18n()

// Computed
const tiles = computed(() => [
  {
    title: t('company.management.navigation.offers.tiles.dashboard'),
    icon: 'sell',
    to: { name: RouteNames.COMPANY_OFFERS_DASHBOARD }
  },
  {
    title: t('company.management.navigation.offers.tiles.creator'),
    icon: 'add_box',
    to: { name: RouteNames.COMPANY_OFFERS_CREATOR }
  }
])
</script>
