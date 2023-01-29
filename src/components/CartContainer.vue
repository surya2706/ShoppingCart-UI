<script lang="ts">
import { storeToRefs } from "pinia";

import { useProductStore } from "../stores/products";
import StarRating from "./StarRating.vue";

export default {
  setup() {
    const store = useProductStore();
    const { cart } = storeToRefs(store);
    const { setQuantity } = store;
    return { cart, setQuantity };
  },
  components: { StarRating },
  methods: {
    selectQty(id: string, event: any) {
      const selectedQty = event.target.value;
      this.setQuantity(selectedQty, id);
    },
  },
};
</script>

<template>
  <div class="cart-container">
    <div class="list-group">
      <div class="list-group-item" v-for="item in cart" :key="item.id">
        <div class="row" :style="{ alignItems: 'center' }">
          <div class="col-md-2">
            <img :src="item.image" :alt="item.name" class="img-fluid rounded" />
          </div>
          <div class="col-md-2">
            <span>{{ item.name }}</span>
          </div>
          <div class="col-md-2">
            {{ `Rs. ${item.price}` }}
          </div>
          <div class="col-md-2">
            <StarRating :rating="item.rating" />
          </div>
          <div class="col-md-2">
            <select class="form-control" @change="selectQty(item.id, $event)">
              <option v-for="i in 3" :key="i" :value="i">{{ i }}</option>
            </select>
          </div>
          <div class="col-md-2">
            <v-icon name="co-trash" :style="{ cursor: 'pointer' }"></v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  width: 78%;
}

.list-group {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 0;
}

.list-group-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: block;
  padding: 0.75rem 1.25rem;
  position: relative;
}
</style>
