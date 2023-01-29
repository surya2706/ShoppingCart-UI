<script lang="ts">
import { storeToRefs } from "pinia";

import { useProductStore } from "../stores/products";
import type { Cart } from "../stores/products";

export default {
  setup() {
    const store = useProductStore();
    const { cart, cartLength } = storeToRefs(store);
    return { cart, cartLength };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce(
        (acc: number, item: Cart) => acc + Number(item.price) * item.qty,
        0
      );
    },
  },
};
</script>

<template>
  <div class="summary">
    <div class="title">Subtotal ({{ cartLength }}) items</div>
    <div class="total">Total: Rs. {{ totalAmount }}</div>
    <button type="button" class="btn btn-primary">Proceed to Checkout</button>
  </div>
</template>

<style scoped>
.summary {
  background-color: #343a40;
  color: #fff;
  flex-direction: column;
  height: 86vh;
  margin: 10px;
  padding: 20px;
  width: 30%;
}
.title {
  font-size: 30px;
  padding-bottom: 20px;
}
.total {
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 20px;
}
</style>
