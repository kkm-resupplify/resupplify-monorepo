<template>
  <basic-view-layout class="test-view">
    <template #body>
      <!-- <register-company /> -->
      <m-text-field
        name="phoneNumber"
        input-type="tel"
        :label="$t('settings.profile.details.phoneNumber')"
        :placeholder="$t('settings.profile.details.phoneNumberPlaceholder')"
        autocomplete="tel"
        :rules="{ required: true, regex: /^(?:\+48)?[1-9]\d{8}$/ }"
        :value="userDetails?.phoneNumber"
        class="user-details-form__text-field"
      />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import TestForm from './TestForm.vue'
import TestFormTwo from './TestFormTwo.vue'
import RegisterCompany from '@/components/core/company/register/RegisterCompany.vue'

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
