<template>
  <o-form ref="form" class="companies-filters" :submit-callback="handleQuerySubmit">
    <template #body>
      <div class="companies-filters__inputs">
        <m-text-field
          name="name"
          :label="$t('companies.filters.nameLabel')"
          :placeholder="$t('companies.filters.namePlaceholder')"
          :validate="false"
          append-icon-on="close"
          @append-icon-click="handleClearSearch"
        />

        <m-select
          name="categoryId"
          :label="$t('companies.filters.categoryLabel')"
          :placeholder="$t('companies.filters.categoryPlaceholder')"
          :options="companyCategoryList"
          :validate="false"
        />
      </div>
    </template>

    <template #footer>
      <div class="companies-filters__buttons">
        <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

        <a-button :text="$t('global.reset')" size="x-large" />
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Emits
const emits = defineEmits(['filter'])

// Variables
const route = useRoute()
const form = ref<typeof OFormVue>()
const { setQueryParam } = useQueryFilter()

// Computed
const companyCategoryList = computed(() => {
  return [
    { id: 1, text: 'Beverages' },
    { id: 2, text: 'Snacks' },
    { id: 3, text: 'Personal Care' },
    { id: 4, text: 'Household Essentials' },
    { id: 5, text: 'Frozen Foods' },
    { id: 6, text: 'Dairy Products' },
    { id: 7, text: 'Bakery and Confectionery' },
    { id: 8, text: 'Canned Goods' },
    { id: 9, text: 'Health and Wellness' },
    { id: 10, text: 'Baby Care' },
    { id: 11, text: 'Pet Care' },
    { id: 12, text: 'Cleaning Supplies' },
    { id: 13, text: 'Toiletries' },
    { id: 14, text: 'Paper Products' },
    { id: 15, text: 'Cosmetics' },
    { id: 16, text: 'Spices and Condiments' },
    { id: 17, text: 'Breakfast Foods' },
    { id: 18, text: 'Instant Noodles and Pasta' },
    { id: 19, text: 'Cooking Oils' },
    { id: 20, text: 'Sauces and Marinades' },
    { id: 21, text: 'Nutritional Supplements' },
    { id: 22, text: 'Office and School Supplies' }
  ]
})

// Methods
const handleClearSearch = async () => {
  await router.replace({ query: { ...route.query, name: '' } })
  form.value?.resetField('name', null)
}

const handleQuerySubmit = async (filters: CompaniesFiltersParams) => {
  await setQueryParam(route, filters)

  emits('filter', filters)
}
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
