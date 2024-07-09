import { createRouter, createWebHistory } from "vue-router";

import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";

import Home from "./components/Home.vue";
// import ManagerDashBoard from "./components/ManagerDashBoard.vue";


import ProductManager from "./components/ProductManager/ListProduct.vue";
import CartList from "./components/Cart/CartList.vue";
import ProductCustomer from "./components/Products/ProductList.vue";



const routes = [
  {
    path: "/", // homed 
    name: "Home",
    components: {
      default: Home,
      header: PageHeader,
      footer: PageFooter,
    }, // Include PageFooter component
  },
  
  /*{
    path: "/manager-dashboard", // manager-dashboard 
    name: "ManagerDashBoard",
    components: {
      default: ManagerDashBoard,
      header: PageHeader,
      footer: PageFooter,
    }, // Include PageFooter component
  },
  */

  
   {
    path: "/List-Product-manager", // manager-dashboard 
    name: "ProductManager",
    components: {
      default: ProductManager,
      header: PageHeader,
      footer: PageFooter,
    }, // Include PageFooter component
  },
  {
    path: "/List-Product", // manager-dashboard 
    name: "ProductCustomer",
    components: {
      default: ProductCustomer,
      header: PageHeader,
      footer: PageFooter,
    }, // Include PageFooter component
  },
  {
    path: "/List-Cart", // manager-dashboard 
    name: "CartList",
    components: {
      default: CartList,
      header: PageHeader,
      footer: PageFooter,
    }, // Include PageFooter component
  },
  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
