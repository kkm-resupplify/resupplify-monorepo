<template>
  <basic-view-layout class="test-view">
    <template #body>
      <o-form style="min-height: 800px" :submit-callback="handleNextStep">
        <template #body>
          <m-text-field
            name="blob"
            :label="$t('auth.form.emailAddress')"
            :placeholder="$t('auth.form.emailAddressPlaceholder')"
            autocomplete="username"
            rules="required"
          />

          <m-text-field
            name="glob"
            :label="$t('auth.form.emailAddress')"
            :placeholder="$t('auth.form.emailAddressPlaceholder')"
            autocomplete="username"
            rules="required"
          />
        </template>

        <template #footer>
          <a-button type="submit" text="Next step" />
        </template>
      </o-form>
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

// Methods
const handleNextStep = (values: any) => {
  console.log(values)
}
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
