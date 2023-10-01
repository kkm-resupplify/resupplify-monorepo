<template>
  <div :class="generateClasses">
    <label v-if="label" class="a-text-field__label" :for="name" v-text="label" />

    <input
      :id="name"
      :name="name"
      :value="inputValue"
      class="a-text-field__input"
      :type="inputType"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :rules="rules"
      :disabled="disabled"
      v-on="validationListeners"
    />

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef, ref } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Props
const props = defineProps({
  autocomplete: String,
  value: String,
  label: String,
  disabled: Boolean,
  name: { type: String, required: true },
  placeholder: {
    type: String,
    default: ''
  },
  inputType: String,
  size: {
    type: String,
    default: 'medium'
  },
  borderGradient: {
    type: String,
    default: 'info'
  },
  rules: {
    type: String
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
const baseClass = 'a-text-field'
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

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size])
})

const borderColor = computed(() => {
  if (!props.validate) return `var(--${props.borderGradient}-gradient)`

  const { valid, touched, dirty } = meta
  console.log(valid, touched, dirty)
  if (!touched || !dirty) return `var(--${props.borderGradient}-gradient)`
  if (valid) return `var(--${props.validColor}-gradient)`
  else return `var(--${props.invalidColor}-gradient)`
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

.a-text-field {
  $self: &;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  &--medium {
    #{$self}__label {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }

    #{$self}__input {
      @include size($global-spacing-30 $global-spacing-70, $text-input-font-size-md);
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

  &__input {
    line-height: 1;
    color: var(--font-primary);

    background-image: linear-gradient(var(--primary), var(--primary)), v-bind(borderColor);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    background-size: 200% 150%;
    border: 0.25em solid transparent;
    border-radius: 24px;
    outline: none;

    transition: background-position 0.3s ease-out;

    &:hover,
    &:focus {
      background-position: 100% 0;
    }
  }
}
</style>
