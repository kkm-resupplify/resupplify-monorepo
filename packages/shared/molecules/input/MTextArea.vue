<template>
  <div :class="generateClasses">
    <label v-if="label" class="m-text-area__label" :for="name" v-text="label" />

    <textarea
      class="m-text-area__input"
      :name="name"
      :placeholder="placeholder"
      :value="inputValue"
      :spellcheck="spellcheck"
      :disabled="disabled"
      :rules="rules"
      v-on="validationListeners"
    />

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue'
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
  validate: { type: Boolean, default: true },
  disabled: Boolean,
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
  spellcheck: Boolean,
  size: { type: String, default: 'medium' },
  minHeight: { type: String, default: '100px' },
  width: { type: String, default: '100%' }
})

// Variables
const baseClass = 'm-text-area'

const name = toRef(props, 'name')
const minHeight = toRef(props, 'minHeight')
const width = toRef(props, 'width')

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size])
})

const borderColor = computed(() => {
  if (props.disabled) return ''

  if (!props.validate) return `var(--${props.borderGradient}-gradient)`

  const { valid, touched, dirty } = meta

  if (!valid && touched) return `var(--${props.invalidColor}-gradient)`
  if ((dirty || touched) && valid) return `var(--${props.validColor}-gradient)`

  return `var(--${props.borderGradient}-gradient)`
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

<style lang="scss" scoped>
@import '../../styles/mixins/input-gradient';

@mixin size($font-size, $padding: 0) {
  padding: $padding;
  font-size: $font-size;
}

.m-text-area {
  $self: &;

  display: flex;
  flex-direction: column;
  width: v-bind(width);
  height: fit-content;

  &--medium {
    #{$self}__label {
      @include size($global-font-size-20, 0 $global-spacing-20);

      position: relative;
      left: $global-spacing-70;
    }

    #{$self}__input {
      @include size($text-input-font-size-md, $global-spacing-30 $global-spacing-70);
    }
  }

  &__label {
    color: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__input {
    @include input-gradient(v-bind(borderColor));

    resize: vertical;

    max-width: 100%;
    min-height: v-bind(minHeight);

    line-height: 1;
    color: var(--font-primary);

    &::-webkit-resizer {
      background-color: var(--primary);
    }
  }
}
</style>
