<template>
  <a-dropdown>
    <template #activator>
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 200px;
          background-color: var(--primary);
        "
      >
        Elo
      </div>
    </template>

    <template #content>
      <div
        style="
          display: flex;
          flex-direction: column;
          width: 200px;
          background-color: var(--primary);
        "
      >
        <div v-for="i in 5" :key="i" v-text="i" />
      </div>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
