<template>
  <div :class="generateClasses">
    <m-text-field name="search" input-type="text" :placeholder="placeholder" :validate="false" />
    <a-button :text="$t('global.search')" />
  </div>
</template>

<script setup lang="ts">
import MTextField from '@sharedMolecules/input/MTextField.vue'
import { useClassComposable } from '../../composables/class/useClassComposable'
import { computed } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  }
})

// Variables
const baseClass = 'o-searchbar'

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style scoped lang="scss">
.o-searchbar {
  display: flex;
}
</style>
