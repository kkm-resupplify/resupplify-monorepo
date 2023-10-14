<template>
  <div :class="generateClasses">
    <label v-if="label" class="m-text-field__label" :for="name" v-text="label" />

    <div class="m-text-field__input-group">
      <input
        :id="name"
        :name="name"
        :value="inputValue"
        class="m-text-field__input"
        :type="inputType"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :rules="rules"
        :disabled="disabled"
        v-on="validationListeners"
        @input="handleInputChange"
      />

      <a-icon
        v-if="showAppendIcon"
        class="m-text-field__input-append"
        :icon="appendIcon"
        size="medium"
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
  appendIconCallbackOn: {
    type: Function,
    default: () => {}
  },
  appendIconCallbackOff: {
    type: Function,
    default: () => {}
  },
  appendIconOn: String,
  appendIconOff: String,
  width: { type: String, default: '100%' }
})

// Variables
const baseClass = 'm-text-field'

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

const appendIconState = ref(false)

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

const showAppendIcon = computed(() => {
  return !!props.appendIconOn || !!props.appendIconOff
})

const appendIcon = computed(() => {
  if (!props.appendIconOff) return props.appendIconOn

  return appendIconState.value ? props.appendIconOn : props.appendIconOff
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

  &__input {
    @include input-gradient(v-bind(borderColor));

    width: 100%;
    line-height: 1;
    color: var(--font-primary);
  }
}
</style>
