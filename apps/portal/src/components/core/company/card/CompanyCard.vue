<template>
  <a-card @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <template #body>
      <div class="company-card-content__header">{{ company.companyName }}</div>
      <Transition name="slide-fade" mode="out-in">
        <div class="slide-fade-container" :key="`${isHovering}`">
          <div class="company-card-content">
            <div v-if="isHovering" class="company-card-content__body">
              <div class="company-card-content__header">{{ company.companyName }}</div>
              <div class="company-card-content__description">{{ company.shortDescription }}</div>
              <div class="company-card-content__stats">
                Products Listed: {{ company.companyStats.productsListed }}<br />
                Unique Clients: {{ company.companyStats.uniqueClients }}<br />
                Orders Fulfilled: {{ company.companyStats.ordersFullfilled }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ACard from '@sharedAtoms/card/ACard.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => ({
      companyName: 'KKM Marketify',
      shortDescription: 'Company specializes in this and that...',
      companyStats: {
        productsListed: 1300,
        uniqueClients: 237,
        ordersFullfilled: 27.9
      }
    })
  }
})

const isHovering = ref(false)
</script>

<style scoped lang="scss">
.company-card-content {
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background-color: $global-colors-white;
  border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

  &__header {
    display: flex;
  }

  &__body {
    display: flex;
    flex-direction: column;
  }
}

.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
