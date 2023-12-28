<template>
  <basic-view-layout>
    <template #body>
      <a-panel>
        <a-panel-section>
          <a-title :title="$t('companies.header.title')" size="x-large" />

          <a-title :title="$t('companies.header.description')" />
        </a-panel-section>

        <a-panel-section>
          <companies-filters @filter="handleFetchCompanies" />

          <a-line />

          <template v-if="isLoading">implement-loader-here</template>

          <template v-else>
            <companies-list v-if="showList" :companies="companies" />

            <a-list-no-results v-else :text="$t(`companies.list.${noResultsTranslationKey}`)" />
          </template>

          <o-pagination :pagination="paginationData" @page-changed="handleFetchCompanies" />
        </a-panel-section>
      </a-panel>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import CompaniesFilters from '@/components/core/companies/CompaniesFilters.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CompaniesList from '@/components/core/companies/list/CompaniesList.vue'
import { ref, computed, onBeforeMount } from 'vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useRoute } from 'vue-router'
import CompaniesService from '@/services/companies/CompaniesService'

// Variables
const isLoading = ref(false)
const companies = ref<CompanyData[]>([])
const route = useRoute()
const paginationData = ref<Pagination>()

// Computed
const showList = computed(() => {
  return companies.value.length > 0
})

const filtersUsed = computed(() => {
  const {
    query: { page, name, categoryId, subcategoryId, status, price, dateEnd }
  } = route

  return !!(page !== '1' || (name ?? categoryId ?? subcategoryId ?? status ?? price ?? dateEnd))
})

const noResultsTranslationKey = computed(() => {
  return companies.value.length === 0 && filtersUsed.value
    ? 'noCompaniesMatchingFilter'
    : 'noCompanies'
})

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
