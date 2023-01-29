<script lang="ts">
import { useProductStore } from "../stores/products";
import { useFilterStore } from "../stores/filter";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

export default {
  setup() {
    const productStore = useProductStore();
    const filterStore = useFilterStore();
    const { searchQuery } = storeToRefs(filterStore);
    const { cart, cartLength } = storeToRefs(productStore);
    const { removeFromCart } = productStore;
    const { search } = filterStore;
    return { cart, removeFromCart, cartLength, searchQuery, search };
  },
  methods: {
    setSearchQuery(e: any) {
      this.search(e.target.value);
    },
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary"
    data-bs-theme="dark"
    :style="{ height: '80px' }"
  >
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Shopping Cart</RouterLink>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search a product..."
          aria-label="Search"
          :style="{ width: '500px' }"
          :value="searchQuery"
          @input="setSearchQuery"
        />
      </form>
      <div class="dropdown-center">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <v-icon name="hi-shopping-cart" fill="white" />
          {{ cartLength }}
        </button>
        <ul class="dropdown-menu dropdown-values-right">
          <li class="cart-item" v-for="item in cart" :key="item.id">
            <img :src="item.image" class="cart-item-image" :alt="item.name" />
            <div class="cart-item-detail">
              <span>{{ item.name }}</span>
              <span>{{ `Rs. ${item.price}` }}</span>
            </div>
            <v-icon
              name="co-trash"
              :style="{ cursor: 'pointer' }"
              @click.stop="removeFromCart(item.id)"
            ></v-icon>
          </li>
          <RouterLink to="/cart">
            <button type="button" class="btn btn-primary cart-button">
              Go To Cart
            </button>
          </RouterLink>
        </ul>
        <!-- <ul
          v-if="cartLength === 0"
          class="dropdown-menu dropdown-values-right"
          :style="{ paddingLeft: '10px' }"
        >
          Cart is empty
        </ul> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-values-right {
  left: auto;
  right: 0;
  min-width: 370px;
  margin: 0px;
}

.cart-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 20px;
}

.cart-item-image {
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
  width: 50px;
}

.cart-item-detail {
  display: flex;
  flex: 1 1;
  flex-direction: column;
  padding: 0 20px;
}

.cart-button {
  width: 95%;
  margin: 0px 10px;
}
</style>
