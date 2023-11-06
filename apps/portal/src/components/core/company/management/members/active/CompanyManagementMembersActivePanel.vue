<template>
  <a-panel class="company-management-members-active-panel">
    <company-member-list />
  </a-panel>
</template>

<script setup lang="ts">
import CompanyMemberList from '@/components/core/company/management/members/active/components/CompanyMemberList.vue'
</script>

<style lang="scss" scoped>
.company-management-members-active-panel {
  display: flex;
  flex: 1;
}
</style>
