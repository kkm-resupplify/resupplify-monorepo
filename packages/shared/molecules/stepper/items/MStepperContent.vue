<template>
  <div class="m-stepper-content">
    <div class="m-stepper-content__header">
      <span class="m-stepper-content__header-title" v-text="steps[currentStep].stepInfo.title" />

      <span
        class="m-stepper-content__header-description"
        v-text="steps[currentStep].stepInfo.description"
      />
    </div>

    <div class="m-stepper-content__body">
      <component
        :is="steps[currentStep].component"
        @next-step="handleNextStep"
        @previous-step="handlePreviousStep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  steps: {
    type: Array,
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
