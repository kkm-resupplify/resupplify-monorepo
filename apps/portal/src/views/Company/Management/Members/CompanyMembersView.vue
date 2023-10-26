<template>
  <company-view-layout class="company-members-view">
    <template #tiles>
      <m-tile-list :tiles="tiles" />
    </template>
  </company-view-layout>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes/index'
import { computed } from 'vue'
import CompanyViewLayout from '@/layouts/view/CompanyViewLayout.vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()

// Computed
const tiles = computed(() => [
  {
    title: t('company.management.navigation.members.tiles.activeMembers'),
    icon: 'groups',
    to: { name: RouteNames.COMPANY_MEMBERS_ACTIVE }
  },
  {
    title: t('company.management.navigation.members.tiles.permissions'),
    icon: 'tune',
    to: { name: RouteNames.COMPANY_MEMBERS_PERMISSIONS }
  }
])
</script>

<style lang="scss" scoped>
.m-tile-list {
  display: grid;
  grid-auto-flow: column;
  grid-gap: $global-spacing-100;
}
</style>
