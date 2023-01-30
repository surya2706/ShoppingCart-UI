<script setup lang="ts">
import CartContainer from '../components/CartContainer.vue';
import CartSummary from '../components/CartSummary.vue';
</script>
<template>
  <main>
    <div :style="{ display: 'flex' }">
      <CartContainer />
      <CartSummary />
    </div>
  </main>
</template>
