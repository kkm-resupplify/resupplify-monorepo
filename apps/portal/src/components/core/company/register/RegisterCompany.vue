<template>
  <m-stepper
    class="register-company"
    :steps="steps"
    style="min-height: 600px"
    title="Company registration"
    description="Please provide information about your company."
  />
</template>

<script setup lang="ts">
import RegisterCompanyGeneralStep from './steps/RegisterCompanyGeneralStep.vue'

const steps = [
  {
    stepInfo: {
      title: 'Title1',
      subtitle: 'Immaculate content',
      description: 'Lorem ipsum 1 dolor sit amet omega lul',
      icon: 'apartment'
    },
    component: RegisterCompanyGeneralStep
  }
]
</script>

<style lang="scss" scoped>
.register-company {
  display: flex;
}
</style>
