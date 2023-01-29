import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiShoppingCart,
  IoStarOutline,
  IoStarSharp,
  CoTrash,
} from "oh-vue-icons/icons";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";

addIcons(HiShoppingCart, IoStarOutline, IoStarSharp, CoTrash);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");
