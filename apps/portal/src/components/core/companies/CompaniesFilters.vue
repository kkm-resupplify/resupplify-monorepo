<template>
  <o-form
    ref="form"
    class="companies-filters"
    :submit-callback="handleQuerySubmit"
    :initial-values="initialFilterParams"
  >
    <template #body>
      <div class="companies-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('companies.filters.nameLabel')"
          :placeholder="$t('companies.filters.namePlaceholder')"
          :validate="false"
          append-icon-on="close"
          width="30%"
          @append-icon-click="handleClearSearch"
        />

        <m-select
          name="categoryId"
          :label="$t('companies.filters.categoryLabel')"
          :placeholder="$t('companies.filters.categoryPlaceholder')"
          :options="staticCompanyDescriptionStore.getCompanyCategories"
          :validate="false"
          width="20%"
        />
      </div>
    </template>

    <template #footer>
      <div class="companies-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts">
import router from '@/routes'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import type { CompaniesFiltersParams } from '@sharedInterfaces/companies/CompaniesInterface'
import type OFormVue from '@sharedOrganisms/form/OForm.vue'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import StaticCompanyDescriptorsService from '@/services/company/StaticCompanyDescriptorsService'
import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'

// Emits
const emits = defineEmits(['filter'])

// Variables
const route = useRoute()
const form = ref<typeof OFormVue>()
const { setQueryParam } = useQueryFilter()
const initialFilterParams = ref<CompaniesFiltersParams>()
const staticCompanyDescriptionStore = useStaticCompanyDescriptorsStore()

// Methods
const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const handleQuerySubmit = async (filters: CompaniesFiltersParams) => {
  await setQueryParam(route, filters)

  emits('filter', filters)
}

const setInitialFormValues = () => {
  initialFilterParams.value = {
    name: route.query.name ? route.query.name.toString() : undefined,
    categoryId: route.query.categoryId ? +route.query.categoryId : undefined
  }
}

const handleResetFilters = async () => {
  form.value?.handleReset()
  initialFilterParams.value = {
    name: undefined,
    categoryId: undefined
  }

  await handleQuerySubmit({
    page: '1',
    name: undefined,
    categoryId: undefined
  })
}

// Hooks
onBeforeMount(async () => {
  await StaticCompanyDescriptorsService.getCategories()
  setInitialFormValues()
})
</script>

<style scoped lang="scss">
.companies-filters {
  &__inputs {
    display: flex;
    gap: $global-spacing-30;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-30;
  }
}
</style>
