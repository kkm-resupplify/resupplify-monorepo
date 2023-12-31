<template>
  <div class="user-settings-preferences-tab">
    <a-title :title="$t('settings.preferences.title')" size="xx-large" />

    <o-form
      :submit-callback="handleSetPreferences"
      :initial-values="{ language: userStore.getLanguage, theme: userThemeStore.getUserTheme }"
    >
      <template #body>
        <div class="user-settings-preferences-tab__content">
          <m-select
            name="language"
            :label="$t('settings.preferences.setLanguageLabel')"
            :placeholder="$t('settings.preferences.setLanguagePlaceholder')"
            :options="userLanguageOptions"
            rules="required"
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
import UserPreferencesService from '@/services/user/UserPreferencesService'
import { useUserStore } from '@/stores/user/useUserStore'
import { useUserThemeStore } from '@/stores/user/useUserThemeStore'
import UserLanguageEnum from '@sharedEnums/user/UserLanguageEnum'
import UserThemeEnum from '@sharedEnums/user/UserThemeEnum'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const { t } = useI18n()
const userThemeStore = useUserThemeStore()
const userStore = useUserStore()

// Computed
const userThemeOptions = computed(() =>
  UserThemeEnum.getAllFields().map((typeName) => ({
    id: `${UserThemeEnum[typeName as keyof UserThemeEnum]}`,
    text: t(`global.${typeName.toLowerCase()}`)
  }))
)

const userLanguageOptions = computed(() =>
  UserLanguageEnum.getAllFields().map((typeName) => ({
    id: `${UserLanguageEnum[typeName as keyof UserLanguageEnum]}`,
    text: t(`language.${UserLanguageEnum[typeName as keyof UserLanguageEnum]}`)
  }))
)

// Methods
const handleSetPreferences = async (formData: Record<string, any>) => {
  // Drut ale do stora musze zapisać stringa a do api wysłać id
  const languageId = formData.language === 'pl-PL' ? 1 : 2

  const { success } = await UserPreferencesService.changeUserLanguage(languageId)

  if (success) {
    userStore.setLanguage(formData.language)
    userThemeStore.setUserTheme(formData.theme)
  }
}
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
