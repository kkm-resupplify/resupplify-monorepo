<template>
  <div ref="selectRef" :class="generateClasses">
    <!-- <m-text-field
      ref="inputRef"
      class="m-select__input"
      variant="round"
      autocomplete="off"
      prepend-icon-on="close"
      :name="name"
      :value="inputText"
      :label="label"
      :placeholder="placeholder"
      :rules="rules"
      :disabled="disabled"
      :validate="validate"
      :append-icon-on="appendIcon"
      :prevent-input="false"
      :prepend-icon-callback-on="clearSelect"
      @input-change="handleFilterChange"
      @click="handleInputClick"
      @blur="closeSelect"
    /> -->

    <label v-if="label" class="m-select__label" :for="name" v-text="label" />

    <div class="m-select__input-group" @click="handleInputClick">
      <a-icon
        v-if="showPreppendIcon"
        class="m-select__input-prepend"
        :icon="prependIcon"
        size="large"
        @click="handlePrependIconClick"
      />

      <input
        :id="name"
        ref="inputRef"
        :name="name"
        :value="inputText"
        :class="inputClasses"
        type="text"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :rules="rules"
        :disabled="disabled"
        v-on="validationListeners"
        @input="handleInputChange"
        @keydown="handleKeydown"
        @blur="closeSelect"
      />

      <a-icon
        v-if="showAppendIcon"
        class="m-select__input-append"
        :icon="appendIcon"
        size="large"
        @click="handleAppendIconClick"
      />
    </div>

    <a-input-error-list :errors="errors" />

    <div v-if="showOptions" class="m-select__content">
      <m-select-item
        v-for="(option, idx) in filteredOptions"
        :key="idx"
        :text="option.text"
        :icon-prepend="option.iconPrepend"
        @mousedown="handleSelectOption(option)"
      />

      <span v-if="!filteredOptions.length" v-text="$t('global.noResults')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, onMounted, onBeforeUnmount, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MSelectItem from './items/MSelectItem.vue'
import { useField } from 'vee-validate'

interface IconData {
  name: string
  size?: string
  color?: string
}

interface MSelectItemData {
  id: string | number
  text?: string
  iconPrepend?: IconData
  iconAppend?: IconData
}

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  placeholder: { type: String, required: true },
  options: { type: Array as PropType<MSelectItemData[]>, default: () => [] },
  disabled: Boolean,
  filter: Boolean,
  isLoading: Boolean,
  rules: String,
  validate: { type: Boolean, default: true },
  initialValue: { type: String, default: null },
  appendIconOn: String,
  appendIconOff: String,
  prependIconOn: String,
  prependIconOff: String,
  width: { type: String, default: '100%' },
  preventInput: Boolean,
  autocomplete: String,
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
  variant: {
    type: String,
    default: 'rounded'
  }
})

// Emits
const emits = defineEmits(['input-change'])

// Variables
const baseClass = 'm-select'
const optionsFilter = ref<any>('')
const selectRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLElement | null>(null)
const showOptions = ref(false)
const selectedOption = ref<MSelectItemData | null>(null)
const name = toRef(props, 'name')
const width = toRef(props, 'width')
const { generateClassNames } = useClassComposable()
const appendIconState = ref(false)
const prependIconState = ref(false)

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size, props.variant])
})

const filteredOptions = computed(() => {
  return props.options.filter((option) =>
    option.text?.toLowerCase().includes(optionsFilter.value.toLowerCase())
  )
})

const appendIcon = computed(() => {
  return showOptions.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
})

const handleSelectOption = (option: MSelectItemData) => {
  optionsFilter.value = ''

  selectedOption.value = option
  inputValue.value = selectedOption.value.id

  showOptions.value = false
  validate()
}

const inputText = computed(() => {
  if (selectedOption.value) return selectedOption.value.text

  return optionsFilter.value
})

const handleInputChange = () => {
  optionsFilter.value = inputValue.value
}

const {
  value: inputValue,
  errors,
  handleBlur,
  errorMessage,
  handleChange,
  meta,
  validate
} = useField(name, props.rules, {
  validateOnValueUpdate: false
})

const inputHeight = computed(() => {
  const height = inputRef.value ? inputRef.value.offsetHeight : 42

  return `${height}px`
})

// Methods
onMounted(() => {
  optionsFilter.value = props.initialValue ?? null
  document.addEventListener('click', clickOutsideEvent)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideEvent)
})

const clickOutsideEvent = (event: any) => {
  if (!selectRef.value) return

  if (
    !(selectRef.value === event.target || selectRef.value.contains(event.target)) &&
    showOptions.value
  ) {
    closeSelect()
  }
}

const handleInputClick = () => {
  showOptions.value = !showOptions.value
}

const clearSelect = () => {
  selectedOption.value = null
  optionsFilter.value = ''
}

const closeSelect = () => {
  showOptions.value = false
}

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

const inputClasses = computed(() => {
  return !props.preventInput ? `m-select__input` : `m-select__input m-select__input--prevent-input`
})

// Methods
const handleAppendIconClick = () => {
  appendIconState.value = !appendIconState.value
}

const handlePrependIconClick = (event: Event) => {
  event.stopPropagation()
  prependIconState.value = !prependIconState.value
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.preventInput) {
    event.preventDefault()
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins/input-gradient';

@mixin size($padding, $font-size) {
  padding: $padding;
  font-size: $font-size;
}

@mixin border($border-width, $border-radius) {
  border: $border-width solid transparent;
  border-radius: $border-radius;
}

.m-select {
  $self: &;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

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

  &--sharp {
    #{$self}__input {
      @include border(2px, $global-border-radius-10);
    }
  }

  &--rounded {
    #{$self}__input {
      @include border(0.25em, 24px);
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
    z-index: 2;
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

  &__content {
    position: absolute;
    z-index: 10;
    transform: translateY(calc(v-bind(inputHeight) + $global-spacing-20));

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;

    width: calc(100% - $global-spacing-20);
    max-height: 400px;
    padding: $global-spacing-10;

    background: var(--secondary-1);
    border-radius: $global-border-radius-10;
    box-shadow: -2px 2px 2px 1px rgb(0 0 0 / 20%), 2px 0 2px 1px rgb(0 0 0 / 20%);
  }
}
</style>
