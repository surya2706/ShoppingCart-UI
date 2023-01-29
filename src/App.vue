<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/HeaderComponent.vue";
</script>

<template>
  <div>
    <Header></Header>
    <!-- <RouterLink to="/"></RouterLink> /> <RouterLink to="/cart"></RouterLink> /> -->
  </div>
  <RouterView></RouterView>
</template>

<style scoped></style>
