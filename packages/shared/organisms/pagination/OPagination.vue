<template>
  <o-form v-if="showPagination" :submit-callback="handleSubmit" :class="generateClasses">
    <template #body>
      <a-line />

      <div class="o-pagination__body">
        <div class="o-pagination__previous" @click="handlePreviousPage">
          <m-icon icon="navigate_before" size="x-large" hoverable />
        </div>

        <div class="o-pagination__content">
          <m-text-field
            name="pagination"
            variant="rounded"
            width="50px"
            :validate="false"
            input-type="number"
            :min-value="1"
            :value="`${currentPage}`"
          />
        </div>

        <a-button v-show="false" type="submit" text="hidden" />

        <div class="o-pagination__next" @click="handleNextPage">
          <m-icon icon="navigate_next" size="x-large" hoverable />
        </div>
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts">
import { computed, type PropType, onBeforeMount, watch } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  pagination: {
    type: Object as PropType<Pagination>,
    default: () => ({ currentPage: 0, totalPages: 0, perPage: 0, countRecords: 0, totalRecords: 0 })
  }
})

// Interface
interface PaginationFormData {
  pagination: number | string
}

// Emits
const emits = defineEmits(['page-changed'])

// Variables
const baseClass = 'o-pagination'
const router = useRouter()
const route = useRoute()
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const showPagination = computed(() => {
  return props.pagination.totalPages > 1
})

const currentPage = computed(() => {
  return props.pagination.currentPage ?? 1
})

const totalPages = computed(() => {
  return props.pagination.totalPages ?? 0
})

// Methods
const initializePagination = async () => {
  if (!route.query.page) {
    router.replace({ query: { ...route.query, page: '1' } })
  }
}

const handleSubmit = (value: PaginationFormData) => {
  router.push({ query: { ...route.query, page: value.pagination } })
}

const handlePreviousPage = async () => {
  if (currentPage.value > 1) {
    await router.push({ query: { ...route.query, page: currentPage.value - 1 } })
  }
}

const handleNextPage = async () => {
  if (currentPage.value < totalPages.value)
    await router.push({ query: { ...route.query, page: currentPage.value + 1 } })
}

// Watch
watch(
  () => route.query.page,
  () => {
    if (route.query.page) {
      emits('page-changed')
    }
  }
)

// Hooks
onBeforeMount(async () => {
  await initializePagination()
})
</script>

<style lang="scss" scoped>
.o-pagination {
  display: flex;
  gap: 0;
  align-items: center;

  &__previous {
    display: flex;
    justify-content: center;
  }

  :deep(.o-form__body) {
    width: 100%;
  }

  &__body {
    display: flex;
    flex-direction: row;
    gap: $global-spacing-20;
    align-items: center;
    align-self: center;

    margin-top: $global-spacing-30;
  }

  &__content {
    display: flex;
    justify-content: center;
  }

  &__next {
    display: flex;
    justify-content: center;
  }

  :deep(.m-text-field__input) {
    text-align: center;
  }
}
</style>
