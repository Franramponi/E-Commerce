<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput } from '@ionic/vue'
//import json from '../data/products.json'
import productService from '../services/productService.js'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput },
  setup() {
		const store = useLoginStore();
		const { isLogin } = storeToRefs(store);
		return { isLogin };
	},
	data() {
		return {
			//products: json
      products: [],
      filters: [
        {
          id: 1,
          label: "Filtro Numero 1",
          defaultValue: 0,
          type: "number"
        },
        {
          id: 2,
          label: "Filtro Numero 2",
          defaultValue: 2,
          type: "number"
        },
        {
          id: 3,
          label: "Filtro Numero 3",
          defaultValue: 3,
          type: "number"
        },
        {
          id: 4,
          label: "Filtro Password 1",
          defaultValue: "hi",
          type: "password"
        }
      ]
		}
	},
  mounted() {
    //Esto corre cuando la pagina abre
    this.loadData();
    this.filters.forEach(e => {
      console.log(e.defaultValue);
      e.value = e.defaultValue;
    });
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadData() {
      //Nuestra DB:
      productService.loadData((res) => { this.products = res.data.products; }, this.errorCatch);

      //mockapi:
      //productService.loadData((res) => { this.products = res.data; }, this.errorCatch);
    },
    addToCart(id) {
      console.log(this.filters);
      if(this.isLogin){
        //Nuestra DB:
        productService.getData(id, (res) => { console.log(res.data); useCartStore().addProduct({...res.data.product}); }, this.errorCatch);
        
        //mockapi:
        //productService.getData(id, (res) => { console.log(res.data); useCartStore().addProduct({...res.data}); }, this.errorCatch);
      
      } else {
        this.$router.push("/login");
      }

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
        <div class=products-filters-split>
          <div class="filters-column" style="background: white">
            <div class="filter" v-for="f in filters" :key="f.id">
              <label class="filter-label" :for="'filter' + f.id">{{ f.label }}:</label>
              <ion-input class="filter-input" :name="'filter' + f.id" :value="f.defaultValue" :type="f.type" v-model="f.value"></ion-input>
            </div>
          </div>
          <div class="products-column invisible-scroll">
            <div class="products-view">
              <ion-card class="product-card" v-for="p in products" :key="p.id">
                <ion-img class="products-img" :src=p.image></ion-img>
                <!-- <ion-img :src=getImg(p.image)></ion-img> -->
                
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
