<template>
  <router-link :to="to" :class="generateClasses">
    <slot />

    <a-icon v-if="icon" :icon="icon" size="xx-large" class="m-tile__icon" />

    <span v-if="title" class="m-tile__title" v-text="title" />
  </router-link>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { RouteRecordRaw } from 'vue-router'

defineProps({
  title: String,
  icon: String,
  to: { type: Object as PropType<RouteRecordRaw>, required: true }
})

// Variables
const baseClass = 'm-tile'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-tile {
  $self: &;

  @include default-border-1-hover;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 180px;
  padding: $global-spacing-30;

  text-align: center;
  text-decoration: none;
  word-break: break;

  background-color: var(--primary);
  border-radius: $global-border-radius-20;

  transition: transform 0.2s;

  &__icon {
    transition: transform 0.2s;
  }

  &:hover {
    transform: scale(1.03);
    background-color: var(--secondary-2);

    #{$self}__icon {
      transform: scale(1.2);
    }
  }
}
</style>
