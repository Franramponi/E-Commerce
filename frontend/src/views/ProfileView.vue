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
			userProfile: this.user,
      editing: false
		}
	},
  methods: {
    enableEditing() {
      this.editing = true;
    },
    modifyProfile() {
      this.modifyUser({...this.userProfile})
      this.editing = false;
    }
  }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Profile </h2>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Username:</p>
              <ion-input class="profile-input" :value="user.name" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Email:</p>
              <ion-input class="profile-input" :value="user.email" v-model="userProfile.email" :disabled="!editing"></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Document:</p>
              <ion-input class="profile-input" :value="user.document" disabled></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Address</p>
              <ion-input class="profile-input" :value="user.address" v-model="userProfile.address" :disabled="!editing"></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Phone number:</p>
              <ion-input class="profile-input" :value="user.phoneNumber" v-model="userProfile.phoneNumber" :disabled="!editing"></ion-input>
            </div>
          </div>
        </div>
        <div>
          <div class="profile-items">
            <div class="profile-item">
              <p class="profile-text">Credit Card:</p>
              <ion-input class="profile-input" :value="user.creditCard" v-model="userProfile.creditCard" :disabled="!editing"></ion-input>
            </div>
          </div>
        </div>
        <ion-button class="profile-btn" v-if="!editing" @click="enableEditing()">Edit Profile</ion-button>
        <ion-button class="profile-btn" v-if="editing" @click="modifyProfile()">Save</ion-button>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
