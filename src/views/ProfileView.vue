<script>
import { IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem } from '@ionic/vue'
//import json from '../data/products.json'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem },
  setup() {
    const store = useLoginStore();
    const { user } = storeToRefs(store);
    const { modifyUser } = store;
    return { user, modifyUser };
  },
  data() {
		return {
			userProfile: {}
		}
	},
  methods: {
    modifyProfile(){
      this.modifyUser({...this.userProfile})
      console.log(this.userProfile)
    }
  }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Profile</h2>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Username:</p>
              <ion-input class="profile-input" v-model="userProfile.name" :value="user.name" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Email:</p>
              <ion-input class="profile-input" v-model="userProfile.email" :value="user.email" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Document:</p>
              <ion-input class="profile-input" v-model="userProfile.document" :value="user.document" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Address</p>
              <ion-input class="profile-input" v-model="userProfile.address" :value="user.address" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Phone number:</p>
              <ion-input class="profile-input" v-model="userProfile.phoneNumber" :value="user.phoneNumber"></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Credit Card:</p>
              <ion-input class="profile-input" v-bind="userProfile.creditCard" :placeholder="user.creditCard"></ion-input>
            </div>
          </div>
        </div>
        <ion-button @click="modifyProfile()">Update Profile</ion-button>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
