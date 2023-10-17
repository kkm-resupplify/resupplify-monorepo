<template>
    <basic-view-layout>
      <template #body>
        <company-settings-body />
      </template>
    </basic-view-layout>
  </template>
  <script setup lang="ts">
  import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
  import CompanySettingsBody from './components/CompanySettingsBody.vue'
  </script>
  <style scoped lang="scss"></style>