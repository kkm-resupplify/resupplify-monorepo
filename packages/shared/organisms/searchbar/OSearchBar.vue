<template>
  <form :class="generateClasses" @submit.prevent="onSearchCallback">
    <m-text-field
      name="search"
      input-type="text"
      :placeholder="placeholder"
      :validate="false"
      append-icon-on="close"
      :value="search"
      @append-icon-click="onClearCallback"
      @input-change="handleInputChange"
    />

    <a-button type="submit" :text="$t('global.search')" class="o-search-bar__button" />
  </form>
</template>

<script setup lang="ts">
import MTextField from '@sharedMolecules/input/MTextField.vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineProps({
  placeholder: {
    type: String,
    required: true
  }
})

// Emits
const emit = defineEmits(['search'])

// Variables
const baseClass = 'o-search-bar'
const route = useRoute()
const router = useRouter()
const search = ref<string | undefined>('')

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Methods
const onSearchCallback = async () => {
  await setQueryParam('search', search.value)

  emit('search', search.value)
}

const setSearch = () => {
  if (route.query.search) {
    search.value = (route.query.search as string) ?? ''
  }
}

const setQueryParam = async (param: string, value: string | undefined) => {
  if (param.length > 0) {
    await router.replace({ query: { [param]: value } })
  }
}

const onClearCallback = async () => {
  search.value = ''
  await onSearchCallback()
}

const handleInputChange = (value: string) => {
  search.value = value
}

// Hooks
onMounted(() => {
  setSearch()
})
</script>

<style scoped lang="scss">
.o-search-bar {
  display: flex;

  &__button {
    border-radius: 0;
  }
}
</style>
