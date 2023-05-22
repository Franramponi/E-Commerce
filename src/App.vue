<script>
import { RouterLink, RouterView } from 'vue-router';
import { IonApp, IonHeader, IonRouterOutlet, IonText } from '@ionic/vue';
import { useLoginStore } from './stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: { IonApp, IonHeader, IonRouterOutlet, IonText },
  setup() {
    const store = useLoginStore();
    store.startup();
    const { isLogin, user } = storeToRefs(store);
    return { isLogin, user };
  },
  methods: {
    logout() {
      useLoginStore().logout();
    }
  }
}
</script>

<template>
  <ion-app>
    <ion-header>
      <div class="header">
        <div>
          <h1 class="main-title">TechBook Store</h1>
          <RouterLink class="nav-item-logo" to="/">
            TechBook Store
          </RouterLink>
        </div>
        <div class="navbar-log">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="header-icon" />
          <font-awesome-icon icon="fa-solid fa-heart" class="header-icon" />
          <RouterLink class="nav-item" v-if="!isLogin" to="/login">Log In</RouterLink>
          <RouterLink class="nav-item" v-if="isLogin" to="/cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="header-icon" /></RouterLink>
          <RouterLink class="nav-item" v-if="isLogin" to="/profile"><font-awesome-icon icon="fa-solid fa-user" class="header-icon" /></RouterLink>
          <RouterLink class="nav-item" v-if="isLogin" to="/vendor">Vendor</RouterLink>
          <RouterLink class="nav-item username" v-if="isLogin" to="/profile">{{ user.name }}</RouterLink>
          <span @click="logout" class="nav-item logout" v-if="isLogin" to="/logout">(Log Out)</span>
        </div>
      </div>
      <div class="navbar-default">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/products">Products</RouterLink>
        <ion-text class="nav-item">Nuevos Ingresos</ion-text>
        <ion-text class="nav-item">Sobre Nosotros</ion-text>
        <ion-text class="nav-item">Contacto</ion-text>
      </div>
    </ion-header>
    <ion-content class="main">
      <ion-router-outlet />
    </ion-content>
    <ion-footer class="footer">
      <h2 class="footer-text">Footer</h2>
    </ion-footer>
  </ion-app>
</template>

<style>
@import './style/style.css';
</style>
