<template>
  <basic-view-layout>
    <template #body>
      <div class="companies-view__content">
        <a-panel-section>
          <a-title :title="$t('companies.header.title')" size="x-large" />

          <a-title :title="$t('companies.header.description')" />
        </a-panel-section>

        <a-panel-section>
          <companies-filters @filter="handleFetchCompanies" />

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
import CompaniesService from '@/services/companies/CompaniesService'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { onBeforeMount } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Variables
const isLoading = ref(false)
const route = useRoute()
const paginationData = ref<Pagination>()
const companies = ref<CompanyData[]>([])

// Methods
const handleFetchCompanies = async () => {
  isLoading.value = true

  const {
    query: { page, name, categoryId }
  } = route

  const { success, data, pagination } = await CompaniesService.getCompanies({
    page: page as string,
    name: name as string,
    categoryId: categoryId as string
  })

  if (success) {
    companies.value = data
    paginationData.value = pagination
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(() => {
  handleFetchCompanies()
})
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
