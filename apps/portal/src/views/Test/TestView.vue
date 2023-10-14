<template>
  <basic-view-layout class="test-view">
    <template #body>
      <m-stepper
        :steps="steps"
        style="min-height: 600px"
        title="Company registration"
        description="Please provide information about your company."
      />

      <m-select
        :label="$t('userDetails.sex')"
        :options="genders"
        :placeholder="$t('userDetails.placeholder')"
        rules="required"
      />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import TestForm from './TestForm.vue'
import TestFormTwo from './TestFormTwo.vue'
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

const { t } = useI18n()
const genders = reactive([
  t('userDetails.gender.male'),
  t('userDetails.gender.female'),
  t('userDetails.gender.preferNot')
])

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
