<script setup lang="ts">
import FilterProducts from "./FilterProducts.vue";
import ProductList from "./ProductList.vue";
</script>

<template>
  <span class="home">
    <FilterProducts />
    <ProductList />
  </span>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
}
</style>
