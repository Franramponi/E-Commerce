<script>
import { RouterLink, RouterView } from 'vue-router';
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue';
import { useLoginStore } from './stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: { IonApp, IonHeader, IonRouterOutlet },
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
    <ion-header class="header">
      <div>
        <RouterLink class="nav-item-logo" to="/">
          TechBook Store
        </RouterLink>
      </div>
      <div class="navbar">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" v-if="!isLogin" to="/login">Log In</RouterLink>
        <RouterLink class="nav-item" v-if="isLogin" to="/cart">Cart</RouterLink>
        <RouterLink class="nav-item" v-if="isLogin" to="/products">Products</RouterLink>
        <RouterLink class="nav-item" v-if="isLogin" to="/profile">Profile</RouterLink>
        <RouterLink class="nav-item" v-if="isLogin" to="/vendor">Vendor</RouterLink>
        <RouterLink class="nav-item username" v-if="isLogin" to="/profile">{{ user.name }}</RouterLink>
        <span @click="logout" class="nav-item logout" v-if="isLogin" to="/logout">(Log Out)</span>
      </div>
    </ion-header>
    <ion-content class="main">
      <ion-router-outlet />
    </ion-content>
    <ion-footer class="footer">
      <h2>Footer</h2>
    </ion-footer>
  </ion-app>
</template>

<style>
@import './style/style.css';


</style>
