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
  },
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
  },
  showErrors: {
    type: Boolean,
    default: true
  },
  validate: {
    type: Boolean,
    default: true
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

const borderColor = computed(() => {
  if (props.disabled) return ''

  if (!props.validate) return `var(--${props.borderGradient}-gradient)`

  const { valid, touched, dirty } = meta

  if (!valid && touched) return `var(--${props.invalidColor}-gradient)`
  if ((dirty || touched) && valid) return `var(--${props.validColor}-gradient)`

  return `var(--${props.borderGradient}-gradient)`
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
    #{$self}__label {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }

    #{$self}__select {
      @include size(
        $global-spacing-30 32px $global-spacing-30 $global-spacing-70,
        $text-input-font-size-md
      );
    }
  }

  @supports (mix-blend-mode: darken) {
    position: relative;
    mix-blend-mode: normal;

    &__label {
      position: relative;
      left: $global-spacing-70;
    }
  }

  &__select,
  &__option {
    color: var(--font-primary);
  }

  &__select {
    background-image: linear-gradient(var(--primary), var(--primary)), v-bind(borderColor);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    background-size: 200% 150%;
    border: 0.25em solid transparent;
    border-radius: 24px;
  }
}
</style>
