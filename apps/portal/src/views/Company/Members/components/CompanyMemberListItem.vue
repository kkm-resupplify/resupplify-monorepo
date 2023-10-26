<template>
  <div class="company-member-list-item">
    <a-expansion-panel class="company-member-list-item__expansion-panel">
      <template #activator>
        <div class="company-member-list-item__header" @click="isClicked = !isClicked">
          <a-title :title="$t('settings.profile.details.email')" :subtitle="email"/>
          <a-icon
            icon="more_horiz"
            size="xx-large"
            class="company-member-list-item__icon"
            :color="isClicked ? 'secondary-4' : 'font-primary'"
          />
        </div>
      </template>
      <template #content>
        <div class="company-member-list-item__details">
          <a-title :title="$t('settings.profile.details.firstName')" :subtitle="firstName" size="medium" />

          <a-title :title="$t('settings.profile.details.lastName')" :subtitle="lastName" size="medium" />

          <a-title :title="$t('settings.profile.details.phoneNumber')" :subtitle="phoneNumber" size="medium" />

          <a-title :title="$t('settings.profile.details.birthDate')" :subtitle="birthDate" size="medium" />

          <a-title :title="$t('settings.profile.details.sex')" :subtitle="sex" size="medium" />
        </div>
      </template>
    </a-expansion-panel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

const props = defineProps({
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  birthDate: String,
  sex: String
})
</script>

<style scoped lang="scss">
.company-member-list-item {
  &__header,
  &__details,
  &__expansion-panel {
    width: 100%;
  }

  &__header,
  &__details {
    padding: $global-spacing-50;
  }

  &__header {
    position: relative;
    background-color: var(--secondary-2);
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    background-color: var(--secondary-1);
  }
  
  &__icon {
    position: absolute;
    top: 50%;
    right: $global-spacing-60;
    transform: translateY(-50%);
  }
}
</style>
