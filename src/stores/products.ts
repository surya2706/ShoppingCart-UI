import { ref, computed, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  inStock: number;
  fastDelivery: boolean;
}

export interface Cart extends Product {
  qty: number;
}

faker.seed(99);

export const useProductStore = defineStore('products', () => {
  const allProducts: Product[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
  }));
  console.log('products', allProducts);

  const products: any = ref(allProducts);
  // const products: any = ref([]);
  const cart: any = ref([]);

  const cartLength: any = computed(() => cart.value.length);

  // async function fetchProducts() {
  //   try {
  //     const response = await fetch('http://localhost:3000/products');
  //     const data = await response.json();
  //     console.log('data', typeof data);
  //     products.value = data.allProducts;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  function addToCart(payload: Product) {
    cart.value.push({ ...payload, qty: 1 });
  }

  function removeFromCart(id: string) {
    cart.value = cart.value.filter((item: Cart) => item.id !== id);
  }

  function setQuantity(qty: number, id: string) {
    const updatedCart = cart.value.map((item: Cart) => {
      if (item.id === id) {
        return { ...item, qty };
      } else return { ...item };
    });
    cart.value = updatedCart;
  }

  // onMounted(fetchProducts);

  return {
    products,
    cart,
    cartLength,
    addToCart,
    removeFromCart,
    setQuantity,
    // fetchProducts,
  };
});
