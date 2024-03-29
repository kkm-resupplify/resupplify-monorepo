<template>
  <m-dialog ref="dialogRef" :title="titleText">
    <template #activator>
      <slot name="activator">
        <a-button :text="activatorName" :size="activatorSize" :color="activatorVariant" />
      </slot>
    </template>

    <div class="o-confirm-dialog__body">
      <div class="o-confirm-dialog__content">
        <span v-text="contentText" />
      </div>

      <div class="o-confirm-dialog__actions">
        <a-button :text="$t('global.cancel')" size="x-large" @click="closeDialog" />

        <a-button
          :text="confirmText"
          :color="activatorVariant"
          size="x-large"
          @click="handleConfirm"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

const props = defineProps({
  itemName: String,
  type: {
    type: String,
    validator(value: string) {
      return ['create', 'update', 'delete', 'activate', 'withdraw'].includes(value)
    },
    required: true
  },
  title: String,
  content: String,
  activatorName: {
    type: String,
    required: true
  },
  activatorSize: {
    type: String,
    default: 'large'
  }
})

// Emits
const emits = defineEmits(['confirmed'])

// Variables
const { t } = useI18n()
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Computed
const translationKeySuffix = computed(
  () => props.type.charAt(0).toUpperCase() + props.type.slice(1)
)

const activatorVariant = computed(() => {
  switch (props.type) {
    case 'create':
      return 'gradient-primary'
    case 'update':
      return 'gradient-primary'
    case 'activate':
      return 'gradient-primary'
    case 'delete':
      return 'gradient-danger'
    case 'withdraw':
      return 'gradient-warning'
    default:
      return 'gradient-primary'
  }
})

const titleText = computed(() => {
  return props.title ?? t(`confirm.dialog.title${translationKeySuffix.value}`)
})

const contentText = computed(() => {
  return (
    props.content ?? t(`confirm.dialog.text${translationKeySuffix.value}`, { item: props.itemName })
  )
})

const confirmText = computed(() => {
  return t(`global.${props.type}`)
})

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}

const handleConfirm = () => {
  emits('confirmed')

  closeDialog()
}
</script>

<style scoped lang="scss">
.o-confirm-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    align-items: center;
    justify-content: space-between;

    min-width: 300px;
    min-height: 100px;
  }

  &__content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    font-size: $global-font-size-50;
    word-break: break-all;
  }

  &__actions {
    display: flex;
    gap: 40px;
    justify-content: space-evenly;
  }
}
</style>
