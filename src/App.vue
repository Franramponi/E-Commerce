<script>
import { RouterLink, RouterView } from 'vue-router'
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue'
export default {
  components: { IonApp, IonHeader, IonRouterOutlet }
}
</script>

<template>
  <ion-app>
    <ion-header class="header">
      <div>
        <h1>TechBook Store</h1>
      </div>
      <div class="navbar">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/about">About</RouterLink>
      </div>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <h2>Footer</h2>
    </ion-footer>
  </ion-app>
</template>

<style>
@import './style/style.css';
</style>
