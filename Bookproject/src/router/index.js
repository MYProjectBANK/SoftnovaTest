// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CartPage from "../views/CartPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/cart", name: "CartPage", component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
