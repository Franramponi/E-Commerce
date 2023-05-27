<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton } from '@ionic/vue'
//import json from '../data/products.json'
import productService from '../services/productService.js'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton },
	data() {
		return {
			//products: json
      products: []
		}
	},
  mounted() {
    //Esto corre cuando la pagina abre
    this.loadData();
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadData() {
      productService.loadData((res) => { this.products = res.data; }, this.errorCatch);
    },
    addToCart(id) {
      console.log('https://6466a4262ea3cae8dc1ba7e1.mockapi.io/products/' + id);
      productService.getData(id, (res) => { console.log({...res.data}); useCartStore().addProduct({...res.data}); }, this.errorCatch);
      
    }
    /*
    getImg(image) {
      return new URL('../images/' + image, import.meta.url).href;
    }
    */
  }
}
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Products page</h2>
        <div class="invisible-scroll">
          <div class="products-view">
            <ion-card class="product-card" v-for="p in products" :key="p.id">
              <ion-card-header>
                <ion-card-title class="products-name">{{ p.name }}</ion-card-title>
              </ion-card-header>

              <ion-card-content class="products-desc">
                {{ p.description }}
              </ion-card-content>
              <ion-img class="products-img" :src=p.image></ion-img>
              <!-- <ion-img :src=getImg(p.image)></ion-img> -->
              <ion-card-subtitle class="products-price">${{ p.price }}</ion-card-subtitle>
              <ion-button @click="addToCart(p.id)">Add to Cart</ion-button>
            </ion-card>
          </div>
        </div>
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>
