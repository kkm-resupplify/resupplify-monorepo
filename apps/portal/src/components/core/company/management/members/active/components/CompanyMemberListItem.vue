<template>
  <a-expansion-panel class="company-member-list-item" @toggle="handleToggleExpansionPanel">
    <template #activator>
      <div class="company-member-list-item__header">
        <a-title :title="$t('settings.profile.details.email')" :subtitle="email" />

        <a-icon
          icon="more_vert"
          size="xx-large"
          class="company-member-list-item__icon"
          :color="detailsIconColor"
        />
      </div>
    </template>

    <template #content>
      <div class="company-member-list-item__content">
        <a-title
          v-for="(item, idx) in companyMemberListItems"
          :key="idx"
          :title="item.title"
          :subtitle="item.subtitle"
          size="medium"
        />
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  email: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  birthDate: String,
  sex: String
})

// Variables
const { t } = useI18n()
const iconStatus = ref(false)

// Computed
const companyMemberListItems = computed(() => {
  return [
    {
      title: t('settings.profile.details.firstName'),
      subtitle: props.firstName
    },
    {
      title: t('settings.profile.details.lastName'),
      subtitle: props.lastName
    },
    {
      title: t('settings.profile.details.phoneNumber'),
      subtitle: props.phoneNumber
    },
    {
      title: t('settings.profile.details.birthDate'),
      subtitle: props.birthDate
    },
    {
      title: t('settings.profile.details.sex'),
      subtitle: props.sex
    }
  ]
})

const detailsIconColor = computed(() => {
  return iconStatus.value ? 'font-primary' : 'secondary-3'
})

// Methods
const handleToggleExpansionPanel = (state: boolean) => {
  iconStatus.value = state
}
</script>

<style scoped lang="scss">
.company-member-list-item {
  width: 100%;
  background-color: var(--secondary-2);
  border-radius: $global-border-radius-20;

  &__header {
    position: relative;
    display: flex;
    flex: 1;
    padding: $global-spacing-50;
  }

  &__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-50;

    padding: $global-spacing-50;

    background-color: var(--secondary-1);
    border-radius: 0 0 $global-border-radius-20 $global-border-radius-20;
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: $global-spacing-60;
    transform: translateY(-50%);
  }
}
</style>
