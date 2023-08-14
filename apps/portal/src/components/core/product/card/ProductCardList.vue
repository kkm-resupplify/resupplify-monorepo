<template>
  <div class="product-card-list">mcardlisthere</div>
</template>

<script setup lang="ts">
// Components
import MCardList from '@sharedMolecules/cards/MCardList.vue'

const props = defineProps({
  products: {
    type: Array<object>,
    required: true
  }
})
</script>
