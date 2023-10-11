<template>
  <div :class="generateClasses">
    <textarea :name="name" :placeholder="placeholder" :value="value" />

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef, ref } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  value: String,
  label: String,
  name: { type: String, required: true },
  placeholder: {
    type: String,
    default: ''
  },
  rules: String,
  validate: Boolean,
  borderGradient: {
    type: String,
    default: 'info'
  },
  validColor: {
    type: String,
    default: 'success'
  },
  invalidColor: {
    type: String,
    default: 'danger'
  }
})

// Variables
const baseClass = 'm-text-area'

const name = toRef(props, 'name')

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const {
  value: inputValue,
  errors,
  handleBlur,
  errorMessage,
  handleChange,
  meta
} = useField(name, props.rules, {
  initialValue: props.value,
  validateOnValueUpdate: false
})

const validationListeners = computed(() => {
  if (!errorMessage.value) {
    return {
      blur: handleBlur,
      change: handleChange,
      input: (e: any) => handleChange(e, false)
    }
  }

  return {
    blur: handleBlur,
    change: handleChange,
    input: handleChange
  }
})
</script>

<style lang="scss" scoped></style>
