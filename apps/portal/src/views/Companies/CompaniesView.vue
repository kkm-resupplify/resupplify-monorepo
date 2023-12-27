<template>
  <basic-view-layout>
    <template #body>
      <a-panel-section>
        <a-title :title="$t('companies.header.title')" size="x-large" />

        <a-title :title="$t('companies.header.description')" />
      </a-panel-section>

      <div>companies-filters</div>

      <companies-list />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CompaniesList from '@/components/core/companies/list/CompaniesList.vue'
</script>
