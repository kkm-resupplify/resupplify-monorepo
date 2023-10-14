<template>
  <div :class="generateClasses">
    <label v-if="label" class="m-text-field__label" :for="name" v-text="label" />

    <div class="m-text-field__input-group">
      <a-icon
        v-if="showPreppendIcon"
        class="m-text-field__input-prepend"
        :icon="prependIcon"
        size="large"
        @click="handlePrependIconClick"
      />

      <input
        :id="name"
        :name="name"
        :value="inputValue"
        :class="inputClasses"
        :type="inputType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :rules="rules"
        :disabled="disabled"
        v-on="validationListeners"
        @input="handleInputChange"
        @keydown="handleKeydown"
      />

      <a-icon
        v-if="showAppendIcon"
        class="m-text-field__input-append"
        :icon="appendIcon"
        size="large"
        @click="handleAppendIconClick"
      />
    </div>

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, toRef, ref, watch } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const emits = defineEmits(['input-change'])

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
  inputType: {
    type: String,
    default: 'text'
  },
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
  },
  prependIconCallbackOn: {
    type: Function,
    default: () => {
      return
    }
  },
  appendIconCallbackOn: {
    type: Function,
    default: () => {
      return
    }
  },
  appendIconCallbackOff: {
    type: Function,
    default: () => {
      return
    }
  },
  appendIconOn: String,
  appendIconOff: String,
  prependIconOn: String,
  prependIconOff: String,
  width: { type: String, default: '100%' },
  preventInput: Boolean
})

// Variables
const baseClass = 'm-text-field'
const appendIconState = ref(false)
const prependIconState = ref(false)

const name = toRef(props, 'name')
const width = toRef(props, 'width')
const inputType = toRef(props.inputType)

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

const showPreppendIcon = computed(() => {
  return !!props.prependIconOn || !!props.prependIconOff
})

const prependIcon = computed(() => {
  if (!props.prependIconOff) return props.prependIconOn

  return prependIconState.value ? props.prependIconOn : props.prependIconOff
})

const showAppendIcon = computed(() => {
  return !!props.appendIconOn || !!props.appendIconOff
})

const appendIcon = computed(() => {
  if (!props.appendIconOff) return props.appendIconOn

  return appendIconState.value ? props.appendIconOn : props.appendIconOff
})

const inputClasses = computed(() => {
  return !props.preventInput
    ? `m-text-field__input`
    : `m-text-field__input m-text-field__input--prevent-input`
})

// Watchers
watch(
  () => props.value,
  (newValue) => {
    inputValue.value = newValue ?? ''
  }
)

// Methods
const handleAppendIconClick = () => {
  appendIconState.value = !appendIconState.value
  if (props.inputType == 'password') {
    if (inputType.value == 'password') inputType.value = 'text'
    else inputType.value = 'password'
  }
}

const handlePrependIconClick = (event: Event) => {
  event.stopPropagation()
  props.prependIconCallbackOn()
  prependIconState.value = !prependIconState.value
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.preventInput) {
    event.preventDefault()
  }
}

const handleInputChange = () => {
  emits('input-change', inputValue.value)
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins/input-gradient';

@mixin size($padding, $font-size) {
  padding: $padding;
  font-size: $font-size;
}

.m-text-field {
  $self: &;

  display: flex;
  flex-direction: column;
  width: v-bind(width);
  height: fit-content;

  &--medium {
    #{$self}__label {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }

    #{$self}__input {
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
    color: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__input-group {
    display: flex;
    flex: 1;
    align-items: center;
  }

  &__input-append {
    cursor: pointer;
    user-select: none;

    position: absolute;
    left: 100%;
    transform: translateX(-200%);

    display: flex;
  }

  &__input-prepend {
    cursor: pointer;
    user-select: none;

    position: absolute;
    z-index: 499;
    left: $global-spacing-10;

    display: flex;
  }

  &__input {
    @include input-gradient(v-bind(borderColor));

    width: 100%;
    line-height: 1;
    color: var(--font-primary);

    &--prevent-input {
      caret-color: transparent;
    }
  }
}
</style>
