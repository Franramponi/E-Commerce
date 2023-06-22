<script>
import { IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput, IonModal, IonList, IonItem, IonSelect, IonSelectOption, IonTextarea } from '@ionic/vue'
import { useLoginStore } from '../stores/login';
import { storeToRefs } from 'pinia';
import productService from '../services/productService.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonButton, IonInput, IonModal, IonList, IonItem, IonSelect, IonSelectOption, IonTextarea },
  setup() {
    const store = useLoginStore();
    const { user } = storeToRefs(store);
    return { user };
  },
  data() {
    return {
      products: [],
      newProduct: {}
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
        [ { name: 'vendor_id', value: this.user.vendorID } ],
        (res) => { this.products = res.data.products; },
        this.errorCatch);
    },
    removeEntry(id) {
      productService.removeEntry(id, this.loadData, this.errorCatch);
    },
    modifyEntry(id) {
      const entry = this.products.filter((e) => e.id == id)[0];
      productService.modifyEntry(id, { ...entry }, this.loadData, this.errorCatch);
    },
    async submit() {
      const { name, stock, image, price, type, tags, description } = this.newProduct;
      this.newProduct = {};
      const tagList = tags.split(',');
      const data = {
        name: name,
        stock: stock,
        image: image,
        price: price,
        type: type,
        tags: tagList,
        description: description,
        vendor_id: this.user.vendorID
        };
      productService.addEntry(data, this.loadData, this.errorCatch)
      document.querySelector('ion-modal').dismiss();
    }
  }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Vendor page</h2>
        <div class="under-title">
          <ion-button class="product-create-btn" id="createProductBtn">Create Product</ion-button>
        </div>

        <ion-modal class="create-product-popup" trigger="createProductBtn">
          <ion-content class="popup">
            <div class="popup-content">
              <h3 class="popup-title">Create Product</h3>
              <form class="popup-form" @submit.prevent="submit">
                <ion-list>
                  <ion-item>
                    <ion-input required class="popup-input" v-model="newProduct.name" label="Name:" placeholder="Product Name"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-input required class="popup-input" v-model="newProduct.stock" label="Stock:" placeholder="0" type="number"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-input required class="popup-input" v-model="newProduct.image" label="Image:" placeholder="Image URL"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-input required class="popup-input" v-model="newProduct.price" label="Price:" placeholder="0.00" type="number" step='0.01'></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-select required class="popup-input" v-model="newProduct.type" label="Type:" placeholder="Product Type" justify="start">
                      <ion-select-option value="Laptop">Laptop</ion-select-option>
                      <ion-select-option value="Libro">Libro</ion-select-option>
                    </ion-select>
                  </ion-item>
                  <ion-item>
                    <ion-input required class="popup-input" v-model="newProduct.tags" label="Tags:" placeholder="List comma-separated tags here (tag1,tag2,tag3)"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-textarea class="popup-textarea" v-model="newProduct.description" label="Description:" placeholder="Write a description for your product here."></ion-textarea>
                  </ion-item>
                </ion-list>
                <ion-button class="popup-submit" type="submit">Create</ion-button>
              </form>
            </div>
          </ion-content>
        </ion-modal>
        
        <div class="products-view">
          <ion-card class="product-card" v-for="p in products" :key="p.id">
            <ion-card-header>
              <ion-card-title class="products-name">{{ p.name }}</ion-card-title>
            </ion-card-header>
            
            <div class="products-img-container">
              <ion-img class="products-img" :src="p.image"></ion-img>
            </div>

            <ion-card-content class="products-desc">
              <span class="products-desc-text">{{ p.description }} </span>
              <span class="products-tooltip">{{ p.description }}</span>
            </ion-card-content>
            <ion-card-subtitle class="products-price">${{ p.price }}</ion-card-subtitle>

            <div class="vendor-btn-container">
                <ion-button class="vendor-btn" @click="removeEntry(p.id)">Delete</ion-button>
                <ion-input class="vendor-input" type="number" v-model="p.stock"></ion-input>
                <ion-button class="vendor-btn" @click="modifyEntry(p.id)">Update Stock</ion-button>
            </div>
          </ion-card>
        </div>
        
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>
