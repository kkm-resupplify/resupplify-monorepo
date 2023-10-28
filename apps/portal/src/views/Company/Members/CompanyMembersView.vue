<template>
    <basic-view-layout>
        <template #body>
            <company-member-list />
        </template>
    </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import CompanyMemberList from './components/CompanyMemberList.vue';
</script>
