<script lang="ts">
export default {
  emits: ["rating"],
  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <span v-for="(n, i) in 5" :key="i">
    <span @click="$emit('rating', n)">
      <span v-if="n <= rating"><v-icon name="io-star-sharp"></v-icon></span>
      <span v-else><v-icon name="io-star-outline"></v-icon></span>
    </span>
  </span>
</template>
