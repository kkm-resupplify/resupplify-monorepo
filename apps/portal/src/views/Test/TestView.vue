<template>
  <basic-view-layout class="test-view">
    <template #body>
      <m-stepper :steps="steps" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import LoginView from '../Login/LoginView.vue'
import RegisterView from '../Register/RegisterView.vue'
const steps = [
  {
    stepInfo: { title: 'Title1', subtitle: 'Subtitle1', description: 'Lorem ipsum 1' },
    component: LoginView
  },
  {
    stepInfo: { title: 'Title2', subtitle: 'Subtitle2', description: 'Lorem ipsum 2' },
    component: RegisterView
  }
]
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
