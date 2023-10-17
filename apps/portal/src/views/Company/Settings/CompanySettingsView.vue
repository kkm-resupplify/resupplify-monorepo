<template>
    <basic-view-layout>
      <template #body>
        <company-settings-body />
      </template>
    </basic-view-layout>
  </template>
  <script setup lang="ts">
  import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
  import UserSettingsBody from './components/UserSettingsBody.vue'
  </script>
  <style scoped lang="scss"></style>