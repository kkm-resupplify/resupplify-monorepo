<template>
  <div class="a-card">
    <div class="a-card__header">
      <img :src="props.headerImage" />
    </div>
    <div class="a-card__body">
      <slot name="body" />
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
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;

  width: 300px;
  height: 210px;

  border-radius: $global-border-radius-10;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 25%);

  &__header {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-self: stretch;
    justify-content: center;

    height: 120px;

    background: $global-gradients-blue-primary-1;
    border-radius: $global-border-radius-10 $global-border-radius-10 0 0;

    img {
      object-fit: scale-down;
      border-radius: $global-border-radius-10 $global-border-radius-10 0 0;
    }
  }

  &__body {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: $global-spacing-20;
    align-self: stretch;

    padding: $global-spacing-20;

    background: $global-colors-white;
    border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;
  }
}
</style>
