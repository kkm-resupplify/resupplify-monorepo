<template>
  <div class="a-input-error-list">
    <div v-for="(error, idx) in errors" :key="idx" class="a-input-error-list__item">
      <a-icon class="a-input-error-list__item-icon" color="danger" icon="close" size="medium" />

      <span class="a-input-error-list__item-text" v-text="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  errors: {
    type: Array,
    default: () => []
  }
})

const opacity = computed(() => {
  return props.errors.length > 0 ? 1 : 0
})

const minHeight = computed(() => {
  return props.errors.length > 0 ? `30px` : 0
})
</script>

<style scoped lang="scss">
@import '../../styles/mixins/text-gradient';

.a-input-error-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-10;

  min-height: v-bind(minHeight);
  padding: $global-spacing-10 $global-spacing-80;

  opacity: v-bind(opacity);

  transition: all 0.3s ease-in-out;

  &__item {
    display: flex;
    gap: $global-spacing-10;
    align-items: center;
  }

  &__item-icon {
    align-self: flex-start;
  }

  &__item-text {
    @include text-gradient(var(--danger));

    font-size: $global-font-size-40;
    line-height: 1.2;
  }
}
</style>
