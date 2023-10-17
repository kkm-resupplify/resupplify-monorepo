<template>
  <div class="user-settings-content">
    <div class="user-settings-content__profile">
      <div class="user-settings-content__company-name">
        <h2>{{ company.name }}</h2>
      </div>
    </div>
    <div class="user-settings-content__data">
      <a-title :header="$t('companyDetails.address')" :sub-header="name" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Company {
  name: String
  country: String
  slug: String
  description: String
  shortDescription: String
  owner: Owner
  status: String
  companyCategory: CompanyCategory
  companyDetails: CompanyDetails
}

interface CompanyCategory {
  name: String
  slug: String
  description: String
}

interface CompanyDetails {
  address: String
  email: String
  phoneNumber: String
  externalWebsite: String
  logo: String
  tin: String
  country: String
  companyCategory: String
}

interface Owner {
  firstName: String
  lastName: String
}

interface CompanyProduct {
  name: String
  slug: String
  description: String
}

interface CompanyProductDetails {
  availableQuantity: String
  description: String
  externalLink: String
}

const props = defineProps({
  company: {
    type: Object as PropType<Company>,
    required: true
  },
  companyCategory: {
    type: Object as PropType<CompanyCategory>,
    required: true
  },
  companyDetails: {
    type: Object as PropType<CompanyDetails>,
    required: true
  },
  owner: {
    type: Object as PropType<Owner>,
    required: true
  },
  companyProducts: {
    type: Object as PropType<CompanyProduct>,
    required: true
  },
  companyProductsDetails: {
    type: Object as PropType<CompanyProductDetails>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.user-settings-content {
  display: flex;
  flex-direction: column;
  padding: $global-spacing-100;

  &__profile,
  &__profile-name,
  &__data {
    display: flex;
    gap: $global-spacing-100;
  }

  &__profile {
    align-items: center;
  }

  &__profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  &__data {
    flex-direction: column;
    margin-top: $global-spacing-70;
    padding: $global-spacing-100;
  }
}
</style>
