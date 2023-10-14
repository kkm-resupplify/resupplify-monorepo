<template>
  <div class="a-input-error-list">
    <TransitionGroup
      :duration="10"
      tag="div"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <div v-for="(error, idx) in errors" :key="idx" class="a-input-error-list__item">
        <a-icon class="a-input-error-list__item-icon" color="danger" icon="close" size="medium" />

        <span class="a-input-error-list__item-text" v-text="error" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

// Props
defineProps({
  errors: {
    type: Array,
    default: () => []
  }
})

function onBeforeEnter(el: any) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el: any, done: any) {
  gsap.to(el, {
    opacity: 1,
    height: '30px',
    duration: 0.15,
    onComplete: done
  })
}

function onLeave(el: any, done: any) {
  gsap.to(el, {
    height: 0,
    duration: 0.15,
    onComplete: done
  })
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins/text-gradient';

.a-input-error-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-10;
  align-items: center;
  align-self: flex-start;
  max-width: 100%;

  padding: $global-spacing-20 $global-spacing-80;

  &__item {
    overflow: hidden;
    display: flex;
    gap: $global-spacing-10;
    align-items: center;
  }

  &__item-text {
    @include text-gradient(var(--danger));

    font-size: $global-font-size-40;
    line-height: 1.2;
  }
}
</style>
