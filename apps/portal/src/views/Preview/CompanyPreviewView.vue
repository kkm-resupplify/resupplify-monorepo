<template>
  <basic-view-layout>
    <template #body>
      <company-preview-panel />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import CompanyPreviewPanel from '@/components/core/preview/company/CompanyPreviewPanel.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>
