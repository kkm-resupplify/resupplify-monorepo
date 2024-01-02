<template>
  <a-panel-section class="company-preview-header-section">
    <a-loader v-if="isLoading" />

    <template v-else>
      <div class="company-preview-header-section__wrapper">
        <a-image
          :width="120"
          :height="120"
          :src="companyPreviewGeneralInformation?.logo"
          :alt="companyPreviewGeneralInformation?.name"
          variant="rounded"
        />

        <div class="company-preview-header-section__info">
          <a-title
            :title="companyPreviewGeneralInformation?.name"
            size="x-large"
            class="company-preview-header-section__info-title"
          />

          <a-title
            :title="$t('company.preview.email')"
            :subtitle="companyPreviewGeneralInformation?.email"
            variant="horizontal"
            append-colon
            class="company-preview-header-section__info-title"
          />

          <a-title
            :title="$t('company.preview.phone')"
            :subtitle="companyPreviewGeneralInformation?.phoneNumber"
            variant="horizontal"
            append-colon
            class="company-preview-header-section__info-title"
          />

          <a-title
            :title="$t('company.preview.address')"
            :subtitle="companyPreviewGeneralInformation?.address"
            variant="horizontal"
            append-colon
            class="company-preview-header-section__info-title"
          />
        </div>
      </div>
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import CompanyPreviewService from '@/services/preview/company/CompanyPreviewService'
import { ref, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

// Interfaces
interface CompanyPreviewGeneralInformation {
  name: string
  email: string
  phoneNumber: string
  address: string
  logo: string
}

// Variables
const isLoading = ref(false)
const companyPreviewGeneralInformation = ref<CompanyPreviewGeneralInformation>()
const route = useRoute()

// Computed
const slug = computed(() => {
  return route.params.slug as string
})

// Methods
const handleFetchCompanyInformation = async () => {
  isLoading.value = true

  const { data, success } = await CompanyPreviewService.getCompanyInformation(slug.value)

  if (success) {
    const {
      name,
      details: { email, phoneNumber, address, logo }
    } = data

    companyPreviewGeneralInformation.value = {
      name,
      email,
      phoneNumber,
      address,
      logo
    }
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  handleFetchCompanyInformation()
})
</script>

<style scoped lang="scss">
.company-preview-header-section {
  white-space: nowrap;

  &__wrapper {
    display: flex;
    gap: $global-spacing-90;
    padding: $global-spacing-30;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__info-title {
    width: max-content;
  }
}
</style>
