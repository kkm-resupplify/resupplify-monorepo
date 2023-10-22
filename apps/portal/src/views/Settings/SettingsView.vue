<template>
  <basic-view-layout>
    <template #body>
      <m-tabs :tabs="settingsViewTabs" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import UserSettingsBody from './components/UserSettingsBody.vue'

// Computed
const settingsViewTabs = computed(() => {
  return [{ title: 'Profile', to: '#profile', icon: 'user' }]
})
</script>
