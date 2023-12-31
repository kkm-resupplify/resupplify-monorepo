<template>
  <div class="user-settings-preferences-tab">
    <a-title :title="$t('settings.preferences.title')" size="xx-large" />

    <o-form :submit-callback="handleSetPreferences" :initial-values="{ theme: userTheme }">
      <template #body>
        <div class="user-settings-preferences-tab__content">
          <m-select
            name="language"
            :label="$t('settings.preferences.setLanguageLabel')"
            :placeholder="$t('settings.preferences.setLanguagePlaceholder')"
          />

          <m-select
            name="theme"
            :label="$t('settings.preferences.setThemeLabel')"
            :placeholder="$t('settings.preferences.setThemePlaceholder')"
            :options="userThemeOptions"
            rules="required"
          />
        </div>
      </template>

      <template #footer>
        <a-button
          button-type="submit"
          :text="$t('settings.preferences.saveChanges')"
          size="x-large"
          class="user-settings-preferences-tab__button"
        />
      </template>
    </o-form>
  </div>
</template>

<script setup lang="ts">
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import UserThemeEnum from '@sharedEnums/user/UserThemeEnum'
import { computed, ref, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()
const userThemeStore = useUserThemeStore()
const userTheme = ref<string>()

// Computed
const userThemeOptions = computed(() =>
  UserThemeEnum.getAllFields().map((typeName) => ({
    id: `${UserThemeEnum[typeName as keyof UserThemeEnum]}`,
    text: t(`global.${typeName.toLowerCase()}`)
  }))
)

// Methods
const handleSetPreferences = (formData: Record<string, any>) => {
  userThemeStore.setUserTheme(formData.theme)
}

// Hooks
onBeforeMount(() => {
  userTheme.value = userThemeStore.getUserTheme()
})
</script>

<style scoped lang="scss">
.user-settings-preferences-tab {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
  max-height: 260px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__button {
    width: 100%;
  }
}
</style>
