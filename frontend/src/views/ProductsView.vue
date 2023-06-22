<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput, IonSelect, IonSelectOption } from '@ionic/vue'
import { productService, tagService } from '../services/services.js'
import { useCartStore } from '../stores/cart.js'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput, IonSelect, IonSelectOption },
  setup() {
		const store = useLoginStore();
		const { isLogin } = storeToRefs(store);
		return { isLogin };
	},
	data() {
		return {
      products: [],
      filters: [
        {
          id: 1,
          name: "marca",
          label: "Marca",
          defaultValue: "",
          type: "text"
        },
        {
          id: 2,
          name: "min_precio",
          label: "Min Precio",
          defaultValue: 0,
          type: "number"
        },
        {
          id: 3,
          name: "max_precio",
          label: "Max Precio",
          defaultValue: 100000,
          type: "number"
        },
        {
          id: 4,
          name: "tipo",
          label: "Tipo",
          defaultValue: "Todo",
          type: "options",
          options: [ "Todo", "Libro", "Laptop" ]
        },
        {
          id: 5,
          name: "tag",
          label: "Tag",
          defaultValue: "Todo",
          type: "options",
          options: [ "Todo" ]
        }
      ]
		}
	},
  mounted() {
    //Esto corre cuando la pagina abre
    this.filters.forEach(e => {
      console.log(e.defaultValue);
      e.value = e.defaultValue;
    });
    this.loadData();
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadData() {
      //Nuestra DB:
      tagService.loadData((res) => {
        let tags = res.data.tags.map((e) => { return e.name });
        this.filters.forEach((e) => { 
          if (e.name === "tag") { e.options = e.options.concat(tags) } 
        });
      }, this.errorCatch);
      productService.loadData(this.filters, (res) => { this.products = res.data.products; }, this.errorCatch);

      //mockapi:
      //productService.loadData(this.filters, (res) => { this.products = res.data; }, this.errorCatch);
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
          <div class="filters-column">
            <div class="filter" v-for="f in filters" :key="f.id">
              <label class="filter-label" :for="'filter' + f.id">{{ f.label }}:</label>
              <ion-input class="filter-input" v-if="f.type != 'options'" :name="'filter' + f.id" :value="f.defaultValue" :type="f.type" v-model="f.value"></ion-input>
              
              <ion-select class="filter-select" v-if="f.type == 'options'" :name="'filter' + f.id" :value="f.defaultValue" legacy=true v-model="f.value">
                <ion-select-option v-for="o in f.options" :key="o" :value="o" >{{ o }}</ion-select-option>
              </ion-select>
            </div>

            <ion-button class="filter-btn" @click="loadData()">Aplicar Filtros</ion-button>
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