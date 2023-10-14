<template>
  <div :class="generateClasses">
    <label v-if="label" :for="name" class="a-select__label" v-text="label" />

    <div class="a-select__select-wrapper">
      <select
        :id="name"
        :name="name"
        class="a-select__select"
        :disabled="disabled"
        :rules="rules"
        v-on="validationListeners"
      >
        <option value="" disabled selected hidden v-text="placeholder" />

        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          class="a-select__option"
          v-text="option"
        />
      </select>

      <span class="a-select__arrow" />
    </div>

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  rules: String,
  value: String,
  label: String,
  disabled: Boolean,
  options: {
    type: Array<string>,
    required: true
  },
  placeholder: String,
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

// Variables
const baseClass = 'a-select'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size])
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

  const { dirty, touched } = meta

  if (!dirty && touched) return `var(--${props.invalidColor}-gradient)`
  if (dirty) return `var(--${props.validColor}-gradient)`

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

.a-select {
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

  &__label {
    cursor: pointer;
    color: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__select,
  &__option {
    color: var(--font-primary);
  }

  &__select-wrapper {
    position: relative;
  }

  &__select {
    width: 100%;

    appearance: none;
    background-color: var(--primary);
    background-image: linear-gradient(var(--primary), var(--primary)), v-bind(borderColor);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    background-size: 200% 150%;
    border: 0.25em solid transparent;
    border-radius: 24px;

    transition: background 0.25s ease-out;

    &:hover,
    &:focus {
      background-position: 90% 0;
    }

    &:focus {
      outline: none;
    }
  }

  &__arrow {
    pointer-events: none;

    position: absolute;
    top: 50%;
    right: $global-spacing-40;

    display: block;

    width: $global-spacing-100;
    height: 100%;
  }

  &__arrow::before,
  &__arrow::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  &__arrow::before {
    transform: translateY(-50%);
    border-top: $global-spacing-30 solid var(--font-primary);
    border-right: $global-spacing-30 solid transparent;
    border-left: $global-spacing-30 solid transparent;
  }
}
</style>
