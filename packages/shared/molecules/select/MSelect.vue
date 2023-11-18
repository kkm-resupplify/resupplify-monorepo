<template>
  <div ref="selectRef" :class="generateClasses">
    <label v-if="label" class="m-select__label" :for="name" v-text="label" />

    <div class="m-select__input-group" @click="handleInputClick">
      <a-icon
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
        class="m-select__input"
        type="text"
        :placeholder="placeholder"
        autocomplete="off"
        :rules="rules"
        :disabled="disabled"
        v-on="validationListeners"
        @keydown.prevent
      />

      <a-icon class="m-select__input-append" :icon="appendIcon" size="large" />
    </div>

    <a-input-error-list :errors="errors" />

    <div v-if="showOptions" class="m-select__content">
      <input ref="optionsFilterRef" v-model="optionsFilter" class="m-select__option-filter-input" />

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
  value: [String, Number],
  placeholder: { type: String, required: true },
  options: { type: Array as PropType<MSelectItemData[]>, default: () => [] },
  disabled: Boolean,
  filter: Boolean,
  isLoading: Boolean,
  rules: String,
  validate: { type: Boolean, default: true },
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
const optionsFilterRef = ref<HTMLElement | null>(null)
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
  if (!optionsFilter.value) return props.options
  return props.options.filter((option) =>
    option.text?.toLowerCase().includes(optionsFilter.value.toLowerCase())
  )
})

const handleSelectOption = (option: MSelectItemData) => {
  optionsFilter.value = ''

  selectedOption.value = option
  inputValue.value = selectedOption.value.id

  showOptions.value = false
  appendIconState.value = !appendIconState.value

  emits('input-change', inputValue.value)
  validate()
}

const inputText = computed(() => {
  if (selectedOption.value) return selectedOption.value.text

  return null
})

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
  const height = inputRef.value ? inputRef.value.clientHeight : 42

  return `${1.5 * height}px`
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

const appendIcon = computed(() => {
  return appendIconState.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
})

const prependIcon = computed(() => {
  return 'close'
})

// Methods
onMounted(() => {
  if (props.value !== null || inputValue.value !== null) {
    const matchingOption = props.options.find(
      (option) => option.id === (props.value ?? inputValue.value)
    )

    if (matchingOption) {
      selectedOption.value = matchingOption
      inputValue.value = matchingOption.id
    }
  }

  document.addEventListener('click', clickOutsideEvent)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideEvent)
})

const clickOutsideEvent = (event: any) => {
  if (!selectRef.value || !optionsFilterRef.value) return
  if (optionsFilterRef.value === event.target) return

  if (
    !(selectRef.value === event.target || selectRef.value.contains(event.target)) &&
    showOptions.value
  ) {
    closeSelect()
  }
}

const handleInputClick = () => {
  showOptions.value = !showOptions.value
  appendIconState.value = !appendIconState.value
}

const clearSelect = () => {
  selectedOption.value = null
  optionsFilter.value = ''
  inputValue.value = null
}

const closeSelect = () => {
  showOptions.value = false
  appendIconState.value = !appendIconState.value
}

const handlePrependIconClick = (event: Event) => {
  clearSelect()
  event.stopPropagation()
  prependIconState.value = !prependIconState.value
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
  width: v-bind(width);

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
    left: $global-spacing-20;

    display: flex;
  }

  &__input {
    @include input-gradient(v-bind(borderColor));

    width: 100%;
    line-height: 1;
    color: var(--font-primary);
    caret-color: transparent;
  }

  &__option-filter-input {
    @include input-gradient(var(--info-gradient));
    @include border(0.25em, 24px);
    @include size($global-spacing-20 $global-spacing-30, 12px);

    align-self: center;
    width: 80%;
  }

  &__content {
    @include boxshadow-primary-2;

    position: absolute;
    z-index: 10;
    transform: translateY(calc(v-bind(inputHeight) + $global-spacing-30));

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;

    box-sizing: border-box;
    width: calc(100% - $global-spacing-20);
    max-height: calc(5 * 30px);
    padding: $global-spacing-30;

    background: var(--secondary-3);
    border: 2px solid var(--secondary-2);
    border-radius: $global-border-radius-10;
  }
}
</style>
