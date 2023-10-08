<template>
  <basic-view-layout class="test-view">
    <template #body>
      <m-stepper ref="stepper" :steps="steps" style="min-height: 600px" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import TestForm from './TestForm.vue'
import TestFormTwo from './TestFormTwo.vue'

const steps = [
  {
    stepInfo: { title: 'Title1', subtitle: 'Subtitle1', description: 'Lorem ipsum 1' },
    component: TestForm
  },
  {
    stepInfo: { title: 'Title2', subtitle: 'Subtitle2', description: 'Lorem ipsum 2' },
    component: TestForm
  },
  {
    stepInfo: { title: 'Title3', subtitle: 'Subtitle2', description: 'Lorem ipsum 3' },
    component: TestForm
  },
  {
    stepInfo: {
      title: 'Title4',
      subtitle: 'Subtitle4',
      description: 'Lorem ipsum 4',
      icon: 'check'
    },
    component: TestFormTwo
  }
]
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
