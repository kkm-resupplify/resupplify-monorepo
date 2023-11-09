<template>
  <m-dialog :title="headerText">
    <template #activator>
      <a-button :text="text" :size="activatorSize" />
    </template>

    <div class="o-confirm-dialog__body">
      <a-title :title="contentText" />

      <div class="o-confirm-dialog__buttons">
        <a-button :text="$t('global.cancel')" size="x-large" />

        <a-button
          :text="$t('global.confirm')"
          color="gradient-danger"
          size="x-large"
          @click="handleConfirm"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  itemName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    validator(value: string) {
      return ['create', 'update', 'delete', 'remove'].includes(value)
    },
    required: true
  },
  text: {
    type: String,
    default: 'Title'
  },
  activatorSize: {
    type: String,
    default: 'large'
  }
})

// Variables
const { t } = useI18n()

// Computed
const headerText = computed(() => {
  const suffix = props.type.charAt(0).toUpperCase() + props.type.slice(1)

  return t(`confirm.dialog.title${suffix}`)
})

const contentText = computed(() => {
  const suffix = props.type.charAt(0).toUpperCase() + props.type.slice(1)

  return t(`confirm.dialog.text${suffix}`, { item: props.itemName })
})

// Emits
const emits = defineEmits(['confirmed'])

// Methods
const handleConfirm = () => {
  emits('confirmed')
}
</script>

<style scoped lang="scss">
.o-confirm-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;
    justify-content: center;

    min-width: 300px;
    min-height: 200px;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-70;
  }
}
</style>
