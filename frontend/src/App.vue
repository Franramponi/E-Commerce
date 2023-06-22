<script>
import { RouterLink, RouterView } from "vue-router";
import { IonContent, IonApp, IonHeader, IonRouterOutlet, IonText, IonSearchbar } from "@ionic/vue";
import { useLoginStore } from "./stores/login";
import { storeToRefs } from "pinia";
import productService from "./services/productService";

export default {
  components: { IonContent, IonApp, IonHeader, IonRouterOutlet, IonText, IonSearchbar },
  setup() {
    const store = useLoginStore();
    store.startup();
    const { isLogin, user } = storeToRefs(store);
    return { isLogin, user };
  },
  methods: {
    logout() {
      useLoginStore().logout();
    },
  },
};
</script>

<template>
  <ion-app>
    <ion-header>
      <div class="header-container">
        <div class="header">
          <div>
            <h1 class="main-title">TechBook Store</h1>
            <RouterLink class="nav-item-logo" to="/">
              <span class="actual-text">&nbsp;TechBook Store&nbsp;</span>
              <span class="hover-text" aria-hidden="true">&nbsp;TechBook.Store&nbsp;</span>
            </RouterLink>
          </div>
          <div class="search-bar">
            <button type="submit">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="search-icon" aria-hidden="true" />
            </button>
            <input v-model="searchTerm" placeholder="Search" type="search" class="search-input">



          </div>
          <div class="navbar-log">

            <RouterLink class="nav-item" to="/favorites"><font-awesome-icon icon="fa-solid fa-heart" v-if="isLogin"
                class="header-icon" /> </RouterLink>
            <RouterLink class="nav-item" v-if="!isLogin" to="/login">Log In</RouterLink>
            <RouterLink class="nav-item" v-if="isLogin" to="/cart"><font-awesome-icon icon="fa-solid fa-cart-shopping"
                class="header-icon" /></RouterLink>
            <RouterLink class="nav-item" v-if="isLogin" to="/profile"><font-awesome-icon icon="fa-solid fa-user"
                class="header-icon" /></RouterLink>
            <RouterLink class="nav-item" v-if="isLogin" to="/vendor">Vendor</RouterLink>
            <div>
              <RouterLink class="nav-item username" v-if="isLogin" to="/profile">{{ user.name }}</RouterLink>
              <span @click="logout" class="nav-item logout" v-if="isLogin" to="/logout">(Log Out)</span>
            </div>
          </div>
        </div>
        <div class="navbar-default">
          <RouterLink class="nav-item" to="/">Home</RouterLink>
          <RouterLink class="nav-item" to="/products">Productos</RouterLink>
          <RouterLink class="nav-item" to="/nosotros">Sobre Nosotros</RouterLink>
          <RouterLink class="nav-item" to="/contacto">Contacto</RouterLink>
        </div>

      </div>
    </ion-header>
    <ion-content class="main">

      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<style>
@import './style/style.css';
</style>
