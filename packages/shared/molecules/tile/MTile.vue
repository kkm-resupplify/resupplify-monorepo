<template>
  <router-link :to="to" :class="generateClasses">
    <a-icon :icon="icon" size="xx-large" class="m-tile__icon" />

    <span class="m-tile__title" v-text="title" />
  </router-link>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
interface Route {
  name: string
}

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  to: { type: Object as PropType<Route>, required: true }
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

  @include boxshadow-primary-2;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 180px;

  text-decoration: none;

  background-color: var(--secondary-1);
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
