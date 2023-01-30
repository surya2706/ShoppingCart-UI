<script lang="ts">
import { storeToRefs } from 'pinia';

import { useProductStore } from '../stores/products';
import { useFilterStore } from '../stores/filter';
import StarRating from './StarRating.vue';
import type { Product } from '../stores/products';

export default {
  components: {
    StarRating,
  },
  setup() {
    const productStore = useProductStore();
    const filterStore = useFilterStore();
    const { byDelivery, byRating, byStock, sortType, searchQuery } =
      storeToRefs(filterStore);
    const { products, cart } = storeToRefs(productStore);
    const { addToCart, removeFromCart } = productStore;
    // console.log('products', products);
    return {
      products,
      cart,
      addToCart,
      removeFromCart,
      byDelivery,
      byRating,
      byStock,
      sortType,
      searchQuery,
      // fetchProducts,
    };
  },

  methods: {
    checkProductAddedToCart(id: string) {
      return this.cart.some((prod: Product) => prod.id === id);
    },
  },

  computed: {
    filteredProducts() {
      let productCopy = this.products.slice();
      // console.log('productCopy', productCopy);
      if (this.byDelivery) {
        productCopy = productCopy.filter(
          (prd: Product) => prd.fastDelivery === true
        );
      } else if (this.byStock) {
        productCopy = productCopy.filter((prd: Product) => {
          // console.log('prd', prd.inStock);
          // console.log('gtz', prd.inStock > 0);
          return prd.inStock > 0;
        });
      } else if (this.sortType === 'asc') {
        productCopy = productCopy.sort(
          (a: Product, b: Product) => a.price - b.price
        );
      } else if (this.sortType === 'desc') {
        productCopy = productCopy.sort(
          (a: Product, b: Product) => b.price - a.price
        );
      } else if (this.byRating) {
        productCopy = productCopy.filter(
          (prd: Product) => prd.rating == this.byRating
        );
      } else if (this.searchQuery) {
        productCopy = productCopy.filter((prd: Product) =>
          prd.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return productCopy;
    },
  },
};
</script>

<template>
  <div class="products-container">
    <div class="product" v-for="product in filteredProducts" :key="product.id">
      <div class="card">
        <img :src="product.image" class="card-img-top" :alt="product.name" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <h6 class="card-subtitle">
            <div>{{ `Rs. ${product.price}` }}</div>
            <div v-if="product.fastDelivery">Fast Delivery</div>
            <div v-else>4 days delivery</div>
            <div>
              <StarRating :rating="product.rating"></StarRating>
            </div>
          </h6>
          <button
            v-if="!checkProductAddedToCart(product.id)"
            class="btn btn-primary"
            :disabled="!product.inStock"
            @click="addToCart(product)"
          >
            {{ (product.inStock && 'Add to Cart') || 'Out of Stock' }}
          </button>
          <button
            v-if="checkProductAddedToCart(product.id)"
            class="btn btn-danger"
            @click="removeFromCart(product.id)"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  width: 78%;
  align-items: stretch;
}

.product {
  margin: 10px;
  width: 30%;
}
</style>
