<template>
  <div :class="generateClasses">
    <m-text-field
      name="search"
      input-type="text"
      :placeholder="placeholder"
      :validate="false"
      append-icon-on="close"
    />

    <a-button :text="$t('global.search')" class="o-search-bar__button" />
  </div>
</template>

<script setup lang="ts">
import MTextField from '@sharedMolecules/input/MTextField.vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { computed } from 'vue'

defineProps({
  placeholder: {
    type: String,
    required: true
  }
})

// Variables
const baseClass = 'o-search-bar'

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
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
