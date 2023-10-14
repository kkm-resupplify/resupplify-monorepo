<template>
  <div ref="dropdownRef" :class="generateClasses">
    <m-text-field
      class="m-dropdown__input"
      :name="name"
      :value="inputText"
      :placeholder="placeholder"
      :rules="rules"
      :disabled="disabled"
      :validate="false"
      :append-icon-on="appendIcon"
      prepend-icon-on="close"
      :prevent-input="false"
      variant="round"
      autocomplete="off"
      :prepend-icon-callback-on="clearDropdown"
      @input-change="handleFilterChange"
      @click="handleInputClick"
      @blur="closeDropdown"
    />

    <div class="m-dropdown__content">
      <template v-if="showOptions">
        <m-dropdown-item
          v-for="(option, idx) in filteredOptions"
          :key="idx"
          :text="option.text"
          :icon-prepend="option.iconPrepend"
          @mousedown="handleSelectOption(option)"
        />
      </template>

      <span v-if="!filteredOptions.length" v-text="$t('global.noResults')" />

      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref, onMounted, onBeforeUnmount } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import MDropdownItem from './items/MDropdownItem.vue'

interface IconData {
  name: string
  size?: string
  color?: string
}

interface MDropdownItemData {
  text?: string
  iconPrepend?: IconData
  iconAppend?: IconData
}

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String, required: true },
  options: { type: Array as PropType<MDropdownItemData[]>, default: () => [] },
  required: Boolean,
  disabled: Boolean,
  filter: Boolean
})

// Variables
const baseClass = 'm-dropdown'
const optionsFilter = ref('')
const dropdownRef = ref<HTMLElement | null>(null)
const showOptions = ref(false)
const selectedOption = ref<MDropdownItemData | null>(null)

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const rules = computed(() => {
  return props.required ? `required` : ''
})

const filteredOptions = computed(() => {
  return props.options.filter((option) =>
    option.text?.toLowerCase().includes(optionsFilter.value.toLowerCase())
  )
})

const appendIcon = computed(() => {
  return showOptions.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
})

const inputText = computed(() => {
  if (selectedOption.value) return selectedOption.value.text

  return optionsFilter.value
})

// Methods
onMounted(() => {
  document.addEventListener('click', clickOutsideEvent)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideEvent)
})

const clickOutsideEvent = (event: any) => {
  if (!dropdownRef.value) return

  if (
    !(dropdownRef.value === event.target || dropdownRef.value.contains(event.target)) &&
    showOptions.value
  ) {
    closeDropdown()
  }
}
const handleFilterChange = (filter: string) => {
  optionsFilter.value = filter
}

const handleInputClick = () => {
  showOptions.value = !showOptions.value
}

const handleSelectOption = (option: MDropdownItemData) => {
  selectedOption.value = option
  optionsFilter.value = ''
  showOptions.value = false
}

const clearDropdown = () => {
  selectedOption.value = null
  optionsFilter.value = ''
}

const closeDropdown = () => {
  console.log('close')
  showOptions.value = false
}
</script>

<style lang="scss" scoped>
.m-dropdown {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;

    padding: $global-spacing-10;

    background: var(--secondary-1);
    border-radius: $global-border-radius-10;
  }
}
</style>
