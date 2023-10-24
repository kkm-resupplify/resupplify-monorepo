<template>
  <basic-view-layout class="dashboard-view">
    <template #body>
      <company-settings-body />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import CompanySettingsBody from '@/views/Company/Settings/components/CompanySettingsBody.vue';
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue';
</script>