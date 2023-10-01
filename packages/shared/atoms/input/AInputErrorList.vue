<template>
  <div class="a-input-error-list">
    <div v-for="(error, idx) in errors" :key="idx" class="a-input-error-list__item">
      <a-icon class="a-input-error-list__item-icon" color="danger" icon="close" size="medium" />

      <span class="a-input-error-list__item-text" v-text="error" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  errors: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
@import '../../styles/mixins/text-gradient';

.a-input-error-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-10;
  padding: $global-spacing-20 $global-spacing-80;

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
