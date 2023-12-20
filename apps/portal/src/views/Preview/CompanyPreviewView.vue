<template>
  <basic-view-layout>
    <template #body>
      <company-preview-dashboard-panel />
    </template>
  </basic-view-layout>
</template>
<script setup lang="ts">
import CompanyPreviewDashboardPanel from '@/components/core/preview/company/dashboard/CompanyPreviewDashboardPanel.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>
