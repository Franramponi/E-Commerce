<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader, IonRouterOutlet } from "@ionic/vue";
import { useLoginStore } from "./stores/login";
import { storeToRefs } from "pinia";

export default {
  data(){
    return{
       mostrarFooter : true 
    };
  },
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
    },
  },
};
</script>

<template>
  <ion-app>
    <ion-header class="header">
      <div>
        <RouterLink class="nav-item-logo" to="/"> TechBook Store </RouterLink>
      </div>
      <div class="navbar">
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" v-if="!isLogin" to="/login"
          >Log In</RouterLink
        >
        <RouterLink class="nav-item" v-if="isLogin" to="/cart">Cart</RouterLink>
        <RouterLink class="nav-item" v-if="isLogin" to="/products"
          >Products</RouterLink
        >
        <RouterLink class="nav-item" v-if="isLogin" to="/profile"
          >Profile</RouterLink
        >
        <RouterLink class="nav-item" v-if="isLogin" to="/vendor"
          >Vendor</RouterLink
        >
        <RouterLink class="nav-item username" v-if="isLogin" to="/profile">{{
          user.name
        }}</RouterLink>
        <span
          @click="logout"
          class="nav-item logout"
          v-if="isLogin"
          to="/logout"
          >(Log Out)</span
        >
      </div>
    </ion-header>
    <ion-content class="main">
    <ion-router-outlet />
    </ion-content>
    <ion-footer :class="{'hide-footer': !mostrarFooter}"> <!--Solucionar posicion footer-->
      <div class="footer">

        <div class="infoFooter">

          <div class="infoT">
            <h3>TechBookStore</h3>
            <p>
              Nuestro catálogo incluye laptops de calidad de diversas marcas y
              una variedad de libros para todos los gustos. Brindamos una
              experiencia de compra segura y conveniente para los amantes de la
              tecnología y la lectura.
            </p>
          </div>
           
          <div class="infoSt"> 
            <h4>INFO STORE</h4>
            <ul type="none">
              <li>Calle Ficticia 123, Buenos Aires, CABA, Argentina</li>
              <li>+54 11 8376 6284</li>
              <li>contact@techbookstore.com</li>
            </ul>
          </div>
            
        </div>

        <div class="iconosF">
          <a href="/">
            <img class="iconosFooter" src="/src/images/icons/icon_facebook.png" alt="icono facebook"/></a>
          <a href="/">
            <img class="iconosFooter" src="/src/images/icons/icon_tweeter.png" alt="icono twitter"/></a>
          <a href="/">
            <img class="iconosFooter" src="/src/images/icons/icon_instagram.png" alt="icono instagram"/></a>
          <a href="/">
            <img class="iconosFooter" src="/src/images/icons/icon_youtube.png" alt="icono youtube"/></a>
        </div>
      </div>

      <div class="derechos">
        <h2>TechBookStore © Todos los derechos reservados</h2>
      </div>

  
    </ion-footer>
  </ion-app>
</template>

<style>
@import "./style/style.css";
</style>
