<template>
  <basic-view-layout>
    <template #body>
      <div class="companies-view__content">
        <a-panel-section>
          <a-title :title="$t('companies.header.title')" size="x-large" />

          <a-title :title="$t('companies.header.description')" />
        </a-panel-section>

        <a-panel-section>
          <companies-filters />

          <a-line />

          <div>companies-list</div>
        </a-panel-section>
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import CompaniesFilters from '@/components/core/companies/CompaniesFilters.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>

<style lang="scss" scoped>
.companies-view {
  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }
}
</style>
