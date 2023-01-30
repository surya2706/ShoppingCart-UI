<script setup lang="ts">
import FilterProducts from '@/components/FilterProducts.vue';
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main>
    <span class="home">
      <FilterProducts />
      <ProductList />
    </span>
  </main>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
}
</style>
