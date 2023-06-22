<script>
import { IonContent, IonPage, IonButton, IonInput, IonSelect } from '@ionic/vue'
import { useLoginStore } from '../stores/login.js'
import { storeToRefs } from 'pinia';
import Footer from './Footer.vue'

export default {
  components: { IonContent, Footer, IonPage, IonButton, IonInput, IonSelect },
  setup() {
    const store = useLoginStore();
    const { register } = store;
    return { register };
  },
  data() {
      return {
          user: {}
      }
  },
  methods: {
    submit() {
      this.register(this.user);
      this.user = {};
    },
  }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="login-container">
          <form class="login-form" @submit.prevent="submit">
            <h2 class="title">Sign up</h2>
            <ion-input class="login-form-input" v-model="user.name"         label="Username:"     type="text"     placeholder="Username"      required></ion-input>
            <ion-input class="login-form-input" v-model="user.pass"         label="Password:"     type="password" placeholder="Password"      required></ion-input>
            <ion-input class="login-form-input" v-model="user.email"        label="Email:"        type="email"    placeholder="Email"         required></ion-input>
            <ion-input class="login-form-input" v-model="user.creditCard"   label="Credit Card:"  type="text"     placeholder="Credit Card"   required></ion-input>
            <ion-input class="login-form-input" v-model="user.address"      label="Address:"      type="text"     placeholder="Address"       required></ion-input>
            <ion-input class="login-form-input" v-model="user.document"     label="Document:"     type="text"     placeholder="Document"      required></ion-input>
            <ion-input class="login-form-input" v-model="user.phoneNumber"  label="Phone Number:" type="tel"      placeholder="Phone Number"  required></ion-input>
            <ion-select class="login-form-input" v-model="user.vendor" value="no" label="Register as a seller?">
              <ion-select-option value="yes">Yes</ion-select-option>
              <ion-select-option selected value="no">No</ion-select-option>
            </ion-select>
            <ion-button class="login-button" type="submit">Register</ion-button>
          </form>
        </div>

        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
