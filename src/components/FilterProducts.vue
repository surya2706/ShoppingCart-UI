<script setup lang="ts">
import { storeToRefs } from "pinia";

import StarRating from "./StarRating.vue";
import { useFilterStore } from "../stores/filter";

const store = useFilterStore();
const { byRating, byDelivery, byStock, sortType } = storeToRefs(store);
const { sortBy, filterByStock, filterByDelivery, filterByRating, clearFilter } =
  store;

function setSortType(sortType: string) {
  sortBy(sortType);
}

function setStock() {
  filterByStock();
}

function setDelivery() {
  filterByDelivery();
}

function setRating(rating: number) {
  filterByRating(rating);
}
</script>

<template>
  <div class="filters form">
    <span :style="{ fontSize: '20px' }">Filter Products</span>
    <span class="form-check" :style="{ marginTop: '20px' }">
      <input
        id="ascending"
        class="form-check-input"
        type="radio"
        :checked="sortType === 'asc'"
        @change="setSortType('asc')"
      />
      <label for="ascending" class="form-check-label">Ascending</label>
    </span>
    <span class="form-check">
      <input
        id="descending"
        class="form-check-input"
        type="radio"
        :checked="sortType === 'desc'"
        @change="setSortType('desc')"
      />
      <label for="descending" class="form-check-label">Descending</label>
    </span>
    <span class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        @change="setStock()"
        :checked="byStock"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Only in Stock
      </label>
    </span>
    <span class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        @change="setDelivery()"
        :checked="byDelivery"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Fast Delivery Only
      </label>
    </span>
    <span>
      <label :style="{ paddingRight: '10px' }">Rating: </label>
      <StarRating :rating="byRating" @rating="setRating"></StarRating>
    </span>
    <span>
      <button
        class="btn btn-primary"
        :style="{ marginTop: '20px', width: '10em' }"
        @click="clearFilter"
      >
        Clear Filters
      </button>
    </span>
  </div>
</template>

<style scoped>
.filters {
  background-color: #343a40;
  color: #fff;
  flex-direction: column;
  height: 86vh;
  margin: 10px;
  padding: 20px;
  width: 20%;
}

.filters > span {
  padding-bottom: 20px;
}
</style>
