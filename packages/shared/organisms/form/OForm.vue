<template>
  <v-form :class="generateClasses" :initial-values="initialValues" @submit="handleSubmit">
    <div class="o-form__body">
      <slot v-if="$slots.body" name="body" />
    </div>

    <div class="o-form__footer">
      <slot v-if="$slots.footer" name="footer" />
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  initialValues: {
    type: Object as () => Record<string, [number, string]>,
    default: () => ({})
  },

  submitCallback: {
    type: Function,
    required: true
  }
})

// Variables
const baseClass = 'o-form'

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Methods

const handleSubmit = () => {
  props.submitCallback()
}
</script>

<style lang="scss" scoped>
.o-form {
  display: flex;
  flex: 1;
  flex-direction: column;

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &__footer {
    flex: 1;
  }
}
</style>
