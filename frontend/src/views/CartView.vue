<script>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';
import productService from '../services/productService.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg },
  setup() {
    const store = useCartStore();
    store.startup();
    const { products } = storeToRefs(store);
    return { products };
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    removeFromCart(id) {
        //Nuestra DB:
        //productService.getData(id, (res) => { useCartStore().removeProduct({...res.data.product}); }, this.errorCatch);
        
        //mockapi:
        productService.getData(id, (res) => { useCartStore().removeProduct({...res.data}); }, this.errorCatch);
    }
  }

}
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Cart page</h2>
        <div class="invisible-scroll">
          <div class="products-view">
            <ion-card class="product-card" v-for="p in products" :key="p.id">
              <ion-card-header>
                <ion-card-title class="products-name">{{ p.name }}</ion-card-title>
                <ion-card-subtitle class="products-price">${{ p.price }}</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content class="products-desc">
                {{ p.description }}
              </ion-card-content>
              <ion-img class="products-img" :src=p.image></ion-img>
              <!-- <ion-img :src=getImg(p.image)></ion-img> -->
              <ion-button class="products-btn" @click="removeFromCart(p.id)">Remove</ion-button>
            </ion-card>
          </div>
        </div>
        
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>
