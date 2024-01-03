<template>
  <a-panel-section class="company-preview-header-section">
    <a-skeleton v-if="isLoading" height="150px" />

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

          <div class="company-preview-header-section__info-row">
            <div class="company-preview-header-section__info-column">
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

            <div class="company-preview-header-section__info-column">
              <a-title
                :title="$t('company.preview.contactPerson')"
                :subtitle="companyPreviewGeneralInformation?.contactPerson"
                variant="horizontal"
                append-colon
                class="company-preview-header-section__info-title"
              />

              <a-title
                :title="$t('company.preview.tin')"
                :subtitle="companyPreviewGeneralInformation?.tin"
                variant="horizontal"
                append-colon
                class="company-preview-header-section__info-title"
              />

              <a-title
                :title="$t('company.preview.externalWebsite')"
                :subtitle="companyPreviewGeneralInformation?.externalWebsite"
                variant="horizontal"
                append-colon
                class="company-preview-header-section__info-title"
              />
            </div>
          </div>

          <div class="company-preview-header-section__info-row">
            <div class="company-preview-header-section__company-description">
              <a-title :title="companyPreviewGeneralInformation?.description" />
            </div>
          </div>
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
  externalWebsite: string
  tin: string
  contactPerson: string
  description: string
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
      description,

      details: { email, phoneNumber, address, logo, externalWebsite, contactPerson, tin }
    } = data

    companyPreviewGeneralInformation.value = {
      name,
      description,
      email,
      phoneNumber,
      address,
      logo,
      externalWebsite,
      contactPerson,
      tin
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
    flex: 1;
    flex-direction: column;
  }

  &__info-title {
    width: max-content;
  }

  &__info-row {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  &__company-description {
    margin-top: $global-spacing-30;
  }
}
</style>
