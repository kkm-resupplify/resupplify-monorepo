<template>
  <div class="a-card">
    <div class="a-card__header">
      <img :src="props.headerImage" />
    </div>
    <div class="a-card__body">
      <div class="a-card__title">
        <slot name="title" />
      </div>
      <div class="a-card__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  headerImage: {
    type: String,
    default: 'https://www.qualia.com/images/branding/qualia_logo_medium.png'
  }
})
</script>

<style scoped lang="scss">
.a-card {
  position: relative;

  overflow: hidden;

  width: 300px;
  height: 210px;

  background-color: $global-colors-white;
  border-radius: $global-border-radius-10;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 25%);

  &:hover {
    .a-card__body {
      max-height: 150px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 98%;

    background: $global-gradients-blue-primary-1;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__body {
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 24px;
    padding: $global-spacing-20;

    background-color: $global-colors-white;

    transition: all 0.15s ease-in-out;
  }

  &__title {
    font-size: $global-title-medium-font-size;
    font-weight: $global-title-medium-font-weight;
  }

  &__content {
    display: flex;
    font-size: $global-text-normal-font-size;
    font-weight: $global-text-normal-font-weight;
    line-height: 20px;
  }
}
</style>
