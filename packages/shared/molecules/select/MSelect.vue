<template>
  <div :class="generateClasses">
    <label for="sex" class="m-select__label">{{ props.label }}</label>
    <select
      id="sex"
      :name="name"
      class="m-select__select"
      :disabled="disabled"
      v-on="validationListeners"
    >
      <option :value="$t('userDetails.gender.male')" class="m-select__option"></option>
      <option :value="$t('userDetails.gender.female')" class="m-select__option"></option>
      <option :value="$t('userDetails.gender.preferNot')" class="m-select__option"></option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Variables
const baseClass = 'm-select'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  rules: String,
  value: String,
  label: String,
  disabled: Boolean
})

const name = toRef(props, 'name')
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

<style lang="scss" scoped>
.m-select {
  display: flex;
  flex-direction: column;
  max-width: 144px;

  gap: $global-spacing-10;

  &__select,
  &__option {
    color: black !important;
  }
}
</style>
