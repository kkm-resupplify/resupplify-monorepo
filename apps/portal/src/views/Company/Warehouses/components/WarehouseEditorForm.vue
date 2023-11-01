<template>
  <o-form>
    <template #body>
      <div class="warehouse-editor-form__body">
        <a-title :title="$t('company.register.warehouseEditor.title')" size="x-large"/>
        <m-text-field
          name="warehouse-name"
          input-type="text"
          :label="$t('company.register.warehouseEditor.nameLabel')"
          :placeholder="$t('company.register.warehouseEditor.namePlaceholder')"
          rules="required"
          variant="rounded"
        />
        <m-text-area
          name="warehouse-description"
          rules="required|min:16|max:255"
          :label="$t('company.register.warehouseEditor.descriptionLabel')"
          :placeholder="$t('company.register.warehouseEditor.descriptionPlaceholder')"
        />
        <a-button :text="$t('company.register.warehouseEditor.create')" buttonType="submit" class="warehouse-editor-form__button" size="x-large"/>
      </div>
    </template>
  </o-form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.warehouse-editor-form__body {
  @include boxshadow-primary-2;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-60;
  width: 452px;
  padding: $global-spacing-100;
}
</style>
