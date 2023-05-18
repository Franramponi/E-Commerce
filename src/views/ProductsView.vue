<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue'
import fs from 'fs'
import json from '../data/products.json'

export default {
  components: { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg },
	data() {
		return {
			products: json
		}
	},
  created() {
    //Esto corre cuando la pagina abre
    //Probablemente habria que meter alguna conexion con el backend aca para recibir los datos, porque ahora mismo se le esta dando el .json entero al cliente
  },
  methods: {
    getImg(image) {
      return new URL('../images/' + image, import.meta.url).href;
    }
  }
}

</script>

<template>
  <ion-page>
    <h2>Products page</h2>
    <div class="invisible-scroll">
      <div class="products-view">
        <ion-card class="product-card" v-for="p in products" :key="p.id">
          <ion-card-header>
            <ion-card-title>{{ p.name }}</ion-card-title>
            <ion-card-subtitle>${{ p.price.toFixed(2) }}</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            {{ p.description }}
          </ion-card-content>
          <ion-img :src=getImg(p.image)></ion-img>
        </ion-card>
      </div>
    </div>
  </ion-page>
</template>
