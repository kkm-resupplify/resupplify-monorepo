<template></template>

<script setup lang="ts">
const props = defineProps({
  userImg: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
