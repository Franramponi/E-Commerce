<script>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';

export default {
  components: { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg },
  setup() {
    const store = useCartStore();
    store.startup();
    const { products } = storeToRefs(store);
    return { products };
  }
}
</script>

<template>
  <ion-page>
    <h2 class="title">Cart page</h2>
    <div class="invisible-scroll">
      <div class="products-view">
        <ion-card class="product-card" v-for="p in products" :key="p.id">
          <ion-card-header>
            <ion-card-title>{{ p.name }}</ion-card-title>
            <ion-card-subtitle>${{ p.price }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            {{ p.description }}
          </ion-card-content>
          <ion-img :src=p.image></ion-img>
          <!-- <ion-img :src=getImg(p.image)></ion-img> -->
        </ion-card>
      </div>
    </div>
  </ion-page>
</template>
