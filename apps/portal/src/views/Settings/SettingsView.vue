<template>
  <basic-view-layout>
    <template #body>
      <m-navigation-tabs :tabs="settingsViewTabs" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import UserSettingsProfileTab from '@/components/core/user/settings/profile/UserSettingsProfileTab.vue'

// Variables
const { t } = useI18n()

// Computed
const settingsViewTabs = computed(() => {
  return [
    {
      title: t('user.settings.profile'),
      to: '#profile',
      icon: 'account_circle',
      component: UserSettingsProfileTab
    },
    {
      title: t('user.settings.preferences'),
      to: '#preferences',
      icon: 'settings_accessibility',
      component: UserSettingsProfileTab
    },
    {
      title: t('user.settings.myCompany'),
      icon: 'apartment',
      to: '#my-company',
      component: UserSettingsProfileTab
    }
  ]
})
</script>
