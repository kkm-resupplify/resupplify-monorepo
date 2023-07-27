<template>
  <div>
    <button class="a-button">{{ text }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  bgColor: {
    type: String,
    default: 'primary-blue-500'
  },
  textColor: {
    type: String,
    default: 'white'
  }
})

const styles = computed(() => {
  return `${props.size} ${props.bgColor} ${props.textColor}`
})
</script>

<style lang="scss" scoped>
.a-button {
  display: inline-flex;
  align-items: flex-start;

  color: #fff;

  background: var(
    --gradient-primary,
    linear-gradient(90deg, #002e73 0%, #002e73 0.52%, #1d76fb 100%)
  );
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
}
</style>
