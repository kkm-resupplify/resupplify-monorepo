<template>
  <div :class="generateClasses">
    <a-title v-if="title" :size="titleSize" :title="title" :append-colon="!vertical" />

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
  }
})

// Variables
const baseClass = 'a-currency'
const { generateClassNames } = useClassComposable()
const { n } = useI18n()

// Computed
const generateClasses = computed(() => {
  const verticalClass = props.vertical ? 'vertical' : ''

  return generateClassNames(baseClass, [verticalClass])
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
  }
}
</style>
