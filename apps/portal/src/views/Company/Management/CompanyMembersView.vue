<template>
  <company-management-panel class="company-members-view">
    <m-tile-list :tiles="tiles" />
  </company-management-panel>
</template>

<script setup lang="ts">
import CompanyManagementPanel from '@/components/core/company/panel/CompanyManagementPanel.vue'
import { RouteNames } from '@/routes/index'
import { computed } from 'vue'
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
