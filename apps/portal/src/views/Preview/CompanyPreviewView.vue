<template>
  <basic-view-layout>
    <template #body>
      <a-panel width="auto">
        <company-preview-header-section />

        <company-preview-content-section />
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CompanyPreviewHeaderSection from '@/components/core/preview/company/header/CompanyPreviewHeaderSection.vue'
import CompanyPreviewContentSection from '@/components/core/preview/company/content/CompanyPreviewContentSection.vue'
</script>
