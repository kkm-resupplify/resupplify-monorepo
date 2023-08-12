<template>
  <div class="a-card" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <div class="a-card__header">
      <img :src="props.headerImage" />
    </div>

    <div :class="{ 'a-card__body': true, 'a-card__body--hovered': isHovering }">
      <div class="a-card__body a-card__body--title">
        <slot name="title" />
      </div>
      <div class="a-card__body a-card__body--content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref } from 'vue'

const props = defineProps({
  headerImage: {
    type: String,
    default: 'https://www.qualia.com/images/branding/qualia_logo_medium.png'
  }
})

const isHovering = ref(false)
</script>

<style scoped lang="scss">
.a-card {
  position: relative;

  display: flex;
  flex-direction: column;

  width: 300px;
  height: 210px;

  border-radius: $global-border-radius-10;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 25%);

  &__header {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
    justify-content: center;
    height: 186px;
    background: $global-gradients-blue-primary-1;
    border-radius: $global-border-radius-10;

    img {
      object-fit: scale-down;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    // position: absolute;
    // height: fit-content;

    background: $global-colors-white;
    border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

    // max-height: 120px;
    transition: all 0.15s ease-out;
    overflow: hidden;
    height: 24px;

    &--title {
      display: flex;
      min-height: 24px;
    }

    // &--content {
    //   display: flex;
    // }
    &--hovered {
      overflow: hidden;
      // position: absolute;
      height: 100px;
      // height: fit-content;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
