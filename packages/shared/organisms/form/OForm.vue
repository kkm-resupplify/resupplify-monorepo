<template>
  <v-form
    ref="form"
    :class="generateClasses"
    :initial-values="initialValues"
    :initial-touched="getInitialTouched"
    @submit="handleSubmit"
  >
    <div class="o-form__body">
      <slot v-if="$slots.body" name="body" />
    </div>

    <div class="o-form__footer">
      <slot v-if="$slots.footer" name="footer" />
    </div>
  </v-form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Form } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  initialValues: {
    type: Object as () => Record<string, [number, string]>,
    default: null
  },
  keepValues: Boolean,

  submitCallback: {
    type: Function,
    required: true
  }
})

// Variables
const baseClass = 'o-form'
const form = ref<typeof Form | null>(null)

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

// Returns an array in the form of a { field1: true, field2: false } etc.
// So basically, if a field (key) has a value, we want to set it as touched.
const getInitialTouched = computed(() => {
  if (!props.initialValues) return

  return Object.entries(props.initialValues).reduce((newObj: any, [key, value]) => {
    newObj[key] = value !== null && value !== undefined && value.length > 0
    return newObj
  }, {})
})

// Methods
const handleSubmit = (values: any) => {
  props.submitCallback(values)
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
    display: flex;
  }
}
</style>
