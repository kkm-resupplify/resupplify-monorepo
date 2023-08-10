<template>
  <div>
    <div></div>
    <company-card-list :companies="companies" />
  </div>
</template>

<script setup lang="ts">
// Components
import CompanyCardList from '@/components/core/company/card/CompanyCardlist.vue'

const companies = {}
</script>
