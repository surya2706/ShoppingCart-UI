import { defineStore } from "pinia";

export const useFilterStore = defineStore({
  id: "filters",
  state: () => ({
    sortType: "",
    byStock: false,
    byDelivery: false,
    byRating: 0,
    searchQuery: "",
  }),
  actions: {
    sortBy(sortType: string) {
      this.sortType = sortType;
    },
    filterByStock() {
      this.byStock = !this.byStock;
    },
    filterByDelivery() {
      this.byDelivery = !this.byDelivery;
    },
    filterByRating(rating: number) {
      this.byRating = rating;
    },
    clearFilter() {
      this.sortType = "";
      this.byStock = false;
      this.byDelivery = false;
      this.byRating = 0;
    },
    search(searchQuery: string) {
      this.searchQuery = searchQuery;
    },
  },
});

// export const useFilterStore = defineStore("filters", () => {
//   const filters = ref({
//     sortType: "",
//     byStock: false,
//     byDelivery: false,
//     byRating: 0,
//   });

//   function sortBy(sortType: string) {
//     console.log("in actin", sortType);
//     this.filters.sortType = ref(sortType);
//   }

//   function filterByStock() {
//     console.log(!this.filters.byStock);
//     this.filters.byStock = ref(!this.filters.byStock);
//   }

//   function filterByDelivery() {
//     filters.byDelivery = !filters.value.byDelivery;
//   }

//   function filterByRating(rating) {
//     filters.byRating.value = rating;
//   }
//   return { filters, sortBy, filterByDelivery, filterByRating, filterByStock };
// });
