<script>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput } from '@ionic/vue'
import { useLoginStore } from '../stores/login';
import { storeToRefs } from 'pinia';
import productService from '../services/productService.js'

export default {
  components: { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput },
  setup() {
    const store = useLoginStore();
    const { user } = storeToRefs(store);
    return { user };
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
      productService.loadData(
        (res) => {
          this.products = res.data.filter(
            (e) => e.vendor == this.user.vendorID
          );
        },
        this.errorCatch);
    },
    removeEntry(id) {
      productService.removeEntry(id, this.loadData, this.errorCatch);
    },
    modifyEntry(id) {
      const entry = this.products.filter((e) => e.id == id)[0];
      productService.modifyEntry(id, { ...entry }, this.loadData, this.errorCatch);
    }
  }
}

</script>

<template>
  <ion-page>
    <h2 class="title">Vendor page</h2>
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
          <ion-img class="products-img" :src="p.image"></ion-img>
          <div class="vendor-btn-container">
            <ion-button @click="removeEntry(p.id)">Delete</ion-button>
            <ion-input class="vendor-input" type="number" v-model="p.stock"></ion-input>
            <ion-button @click="modifyEntry(p.id)">Update Stock</ion-button>
          </div>
        </ion-card>
      </div>
    </div>
  </ion-page>
</template>
