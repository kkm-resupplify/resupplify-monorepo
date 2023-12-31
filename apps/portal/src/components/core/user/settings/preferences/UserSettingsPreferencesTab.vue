<template>
  <div class="user-settings-preferences-tab">
    <a-title :title="$t('settings.preferences.title')" size="xx-large" />

    <o-form>
      <template #body>
        <div class="user-settings-preferences-tab__content">
          <m-select
            name="language"
            :label="$t('settings.preferences.setLanguageLabel')"
            :placeholder="$t('settings.preferences.setLanguagePlaceholder')"
            rules="required"
          />

          <m-select
            name="language"
            :label="$t('settings.preferences.setThemeLabel')"
            :placeholder="$t('settings.preferences.setThemePlaceholder')"
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
