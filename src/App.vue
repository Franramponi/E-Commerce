<script>
import { RouterLink, RouterView } from 'vue-router';
import { IonApp, IonHeader, IonRouterOutlet } from '@ionic/vue';
import { useLoginStore } from './stores/login';
import { storeToRefs } from 'pinia';

export default {
  components: { IonApp, IonHeader, IonRouterOutlet },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    return { isLogin, user };
  }
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
        <RouterLink class="nav-item username" v-if="isLogin" to="/profile">{{ user.name }}</RouterLink>
        <RouterLink class="nav-item logout" v-if="isLogin" to="/logout">(Log Out)</RouterLink>
        <RouterLink class="nav-item" v-if="!isLogin" to="/login">Log In</RouterLink>
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

.logout {
  margin-left:0.1rem;
  font-size:0.8rem;
  line-height:100%;
  vertical-align:middle;
}

.username {
  margin-right:0.1rem;
}
</style>
