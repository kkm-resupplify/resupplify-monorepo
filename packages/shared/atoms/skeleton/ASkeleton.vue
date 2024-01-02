<template>
  <div :class="generateClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '60px'
  }
})

// Variables
const baseClass = 'a-skeleton'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const widthStyle = computed(() => {
  return props.width
})

const heightStyle = computed(() => {
  return props.height
})
</script>

<style lang="scss" scoped>
.a-skeleton {
  box-sizing: flex;
  width: v-bind(widthStyle);
  min-height: v-bind(heightStyle);

  background: rgb(184 184 184 / 30%);
  background: linear-gradient(
    to right,
    rgb(184 184 184 / 20%) 8%,
    rgb(184 184 184 / 30%) 18%,
    rgb(184 184 184 / 20%) 33%
  );
  background-size: 1000px 100px;
  border-radius: $global-border-radius-10;

  animation: wave-lines 2s infinite ease-in-out;
}

@keyframes wave-lines {
  0% {
    background-position: -500px 0;
  }

  100% {
    background-position: 500px 0;
  }
}
</style>
