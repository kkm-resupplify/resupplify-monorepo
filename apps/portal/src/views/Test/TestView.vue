<template>
  <basic-view-layout class="test-view">
    <template #body>
      <!-- <register-company /> -->
      <a-image :source="image" alt="image" :width=300 variant="circle"/>
    </template>

  </basic-view-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import TestForm from './TestForm.vue'
import TestFormTwo from './TestFormTwo.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'
import AImage from '@sharedAtoms/image/AImage.vue' 
import image from '@/assets/images/hero_1.jpg';

const steps = [
  {
    stepInfo: {
      title: 'Title1',
      subtitle: 'Immaculate content',
      description: 'Lorem ipsum 1 dolor sit amet omega lul'
    },
    component: TestForm
  },
  {
    stepInfo: {
      title: 'Title2',
      subtitle: 'Subtitle2',
      description: 'Lorem ipsum 1 dolor sit amet omega lul'
    },
    component: TestForm
  },
  {
    stepInfo: {
      title: 'Title3',
      subtitle: 'Subtitle2',
      description: 'Lorem ipsum 1 dolor sit amet omega lul'
    },
    component: TestForm
  },
  {
    stepInfo: {
      title: 'Title4',
      subtitle: 'Subtitle4',
      description: 'Lorem ipsum 1 dolor sit amet omega lul',
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
