<template>
  <a-card class="company-card">
    <template #title>{{ data.companyName }}</template>

    <template #content>
      <div class="company-card-content">
        <span class="company-card-content__description">{{ data.shortDescription }}</span>

        <company-card-stats :company-stats="data.companyStats" />
      </div>
    </template>
  </a-card>
</template>

<script setup lang="ts">
// Components
import ACard from '@sharedAtoms/card/ACard.vue'
import CompanyCardStats from '@/components/core/company/card/sections/CompanyCardStats.vue'

// Props
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.company-card-content {
  display: flex;
  flex: 1 0 0;
  gap: $global-spacing-30;
  align-items: flex-start;
  align-self: stretch;

  max-height: 84px;
  padding: 0 $global-spacing-20 $global-spacing-20 $global-spacing-20;

  border-radius: 0 0 $global-border-radius-10 $global-border-radius-10;

  &__description {
    overflow: hidden;
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    align-self: stretch;

    line-height: 28px;
    text-align: justify;
    text-overflow: ellipsis;
  }
}
</style>
