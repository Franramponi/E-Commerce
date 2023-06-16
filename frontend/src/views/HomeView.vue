<script>
import {} from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput } from '@ionic/vue'
import Footer from './Footer.vue'
import productService from '../services/productService.js'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'

export default {
  components: {Footer, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput },
   setup() {
		const store = useLoginStore();
		const { isLogin } = storeToRefs(store);
		return { isLogin };
	},
  data() {
		return {
      products: []
		}
	},
  mounted() {
    this.loadData();
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadData() {
      productService.loadData((res) => {
        let productsResponse = res.data.products;
        this.products = productsResponse.slice(0, 6); 
        },
        this.errorCatch);
    },
    addToCart(id) {
      console.log(this.filters);
      if(this.isLogin){
        productService.getData(id, (res) => { console.log(res.data); useCartStore().addProduct({...res.data.product}); }, this.errorCatch);
      } else {
        this.$router.push("/login");
      }
    }
  }
}


</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="row div-icons"  align="center">
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon icon="fa-solid fa-truck" class="home-icon"/>
            ENVÍO GRATIS
          </div>
          <div class="col-xs-12 col-sm-4 home-text" >
            <font-awesome-icon icon="fa-solid fa-credit-card" class="home-icon"/>
            TODAS LAS TARJETAS
          </div>
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon :icon="['fas', 'headset']" class="home-icon"/>
            SOPORTE 24HS
          </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="src/images/carousel/oferta_encic_pokemon.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_gamer.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_hp.png" class="d-block w-100 carousel-img" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>

        <div class="home-container">
         
          <div class="home-cards">
            <RouterLink to="/products" class="card-item">
              <p>Notebooks</p>
            </RouterLink>
            <RouterLink to="/products" class="card-item">
              <p>Libros</p>
            </RouterLink>
          </div>

         <div class="products-column invisible-scroll">
            <div class="products-view">
              <ion-card class="product-card" v-for="p in products" :key="p.id">
                <ion-img class="products-img" :src=p.image></ion-img>
                
                <ion-card-header>
                  <ion-card-title class="products-name">{{ p.name }}</ion-card-title>
                </ion-card-header>
                <ion-card-content class="products-desc">{{ p.description }}</ion-card-content>
                <ion-card-subtitle class="products-price">${{ p.price }}</ion-card-subtitle>
                <ion-button class="products-btn" @click="addToCart(p.id)">Add to Cart</ion-button>
              </ion-card>
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>

<style >

</style>