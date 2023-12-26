<template>
  <a-panel-section class="company-preview-header-section">
    <template v-if="isLoading">implement-loader-here</template>
    <template v-else>
      <div class="company-preview-header-section__wrapper">
        <a-image
          :width="120"
          :height="120"
          :src="companyPreviewGeneralInformation?.logo"
          :alt="$t('common.offer.list.item.imageAlt')"
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
import { ref } from 'vue'
import router from '@/routes'
import { onBeforeMount } from 'vue'

// Interfaces
interface CompanyPreviewGeneralInformation {
  name: string
  email: string
  phoneNumber: string
  address: string
  logo: string
}

// Variables
const companyPreviewGeneralInformation = ref<CompanyPreviewGeneralInformation>()
const isLoading = ref(false)
const slug = router.currentRoute.value.params.slug as string

// Methods
const fetchCompanyInformation = async () => {
  isLoading.value = true

  const { data, success } = await CompanyPreviewService.getCompanyInformation(slug)

  if (success) {
    const {
      name,
      details: { email, phoneNumber, address, logo }
    } = data

    const information = {
      name,
      email,
      phoneNumber,
      address,
      logo
    }

    companyPreviewGeneralInformation.value = information
  }

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  fetchCompanyInformation()
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
