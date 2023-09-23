<template>
  <div v-if="showRibbon" class="product-card-ribbon">
    <a-icon icon="beenhere" color="white" size="large" />

    <a-icon icon="bookmark_added" color="white" size="large" />

    <a-icon icon="add_shopping_cart" color="white" size="large" />
  </div>
</template>

<script setup lang="ts">
// Components
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Props
defineProps({
  showRibbon: Boolean
})
</script>

<style scoped lang="scss">
.product-card-ribbon {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;
  padding: $global-spacing-20;
}
</style>
