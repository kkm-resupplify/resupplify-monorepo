<template>
  <div :class="generateClasses">
    <a-title
      v-if="title"
      :size="titleSize"
      :title="title"
      :append-colon="!vertical"
      :line-height="lineHeight"
      :title-font-weight="titleFontWeight"
    />

    <a-title :size="valueSize" :title="valueText" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  value: {
    type: Number,
    required: true
  },
  vertical: Boolean,
  sign: String,
  titleSize: {
    type: String,
    default: 'medium'
  },
  valueSize: {
    type: String,
    default: 'medium'
  },
  alignEnd: Boolean,
  lineHeight: {
    type: String,
    default: 'auto'
  },
  titleFontWeight: {
    type: String,
    default: '700'
  }
})

// Variables
const baseClass = 'a-currency'
const { generateClassNames } = useClassComposable()
const { n } = useI18n()

// Computed
const generateClasses = computed(() => {
  const verticalClass = props.vertical ? 'vertical' : ''
  const alignEndClass = props.alignEnd ? 'align-end' : ''

  return generateClassNames(baseClass, [verticalClass, alignEndClass])
})

const valueText = computed(() => {
  return props.sign ? `${props.sign}${n(props.value, 'currency')}` : n(props.value, 'currency')
})
</script>

<style lang="scss" scoped>
.a-currency {
  display: flex;
  gap: $global-spacing-20;
  align-items: flex-end;

  &--vertical {
    flex-direction: column;
    align-items: center;
    min-width: fit-content;
  }

  &--align-end {
    align-items: flex-end !important;
  }
}
</style>
