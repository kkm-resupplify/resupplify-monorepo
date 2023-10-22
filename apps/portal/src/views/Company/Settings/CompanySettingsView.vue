<template>
    <basic-view-layout>
      <template #body>
        <company-settings-content />
      </template>
    </basic-view-layout>
  </template>
  <script setup lang="ts">
  import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
  import CompanySettingsContent from './components/CompanySettingsContent.vue'
  </script>
  <style scoped lang="scss"></style>