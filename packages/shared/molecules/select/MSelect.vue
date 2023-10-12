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
      <option v-for="value in props.options" :value="value" class="m-select__option">
        {{ value }}
      </option>
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
  return generateClassNames(baseClass, [props.size])
})

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  rules: String,
  value: String,
  label: String,
  disabled: Boolean,
  options: Array<String>,
  size: {
    type: String,
    default: 'medium'
  }
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
@mixin size($padding, $font-size) {
  padding: $padding;
  font-size: $font-size;
}
.m-select {
  $self: &;

  display: flex;
  flex-direction: column;

  gap: $global-spacing-10;

  &--medium {
    #{$self}__select {
      @include size(
        $global-spacing-30 32px $global-spacing-30 $global-spacing-70,
        $text-input-font-size-md
      );
    }
  }

  &__select,
  &__option {
    color: black !important;
  }
}
</style>
