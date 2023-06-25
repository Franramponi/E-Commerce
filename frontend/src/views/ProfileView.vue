<script>
import { IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem, IonModal} from '@ionic/vue'
//import json from '../data/products.json'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem, IonModal },
  setup() {
    const store = useLoginStore();
    const { user } = storeToRefs(store);
    const { modifyUser } = store;
    const { deleteUser } = store;
    return { user, modifyUser, deleteUser};
  },
  data() {
		return {
			userProfile: this.user,
      editing: false,
      isDeleteConfirmationModalOpen: false
		}
	},
  methods: {
    enableEditing() {
      this.editing = true;
    },
    modifyProfile() {
      this.modifyUser({...this.userProfile})
      this.editing = false;
    },
    showDeleteUserModal() {
    this.isDeleteConfirmationModalOpen = true;
    },
    cancelDeleteProfile() {
      this.isDeleteConfirmationModalOpen = false;
    },
    deleteProfile(){
      this.deleteUser();
      this.isDeleteConfirmationModalOpen = false;
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
              <label class="profile-text" for='username'>Username:</label>
              <ion-input class="profile-input" name='username' :value="user.name" disabled></ion-input>
            </div>
            <div class="profile-item">
              <label class="profile-text" for='email'>Email:</label>
              <ion-input class="profile-input" name='email' :value="user.email" v-model="userProfile.email" :disabled="!editing"></ion-input>
            </div>
            <div class="profile-item">
              <label class="profile-text" for='document'>Document:</label>
              <ion-input class="profile-input" name='document' :value="user.document" disabled></ion-input>
            </div>
            <div class="profile-item">
              <label class="profile-text" for='address'>Address</label>
              <ion-input class="profile-input" name='address' :value="user.address" v-model="userProfile.address" :disabled="!editing"></ion-input>
            </div>
            <div class="profile-item">
              <label class="profile-text" for='phoneNumber'>Phone number:</label>
              <ion-input class="profile-input" name='phoneNumber' :value="user.phoneNumber" v-model="userProfile.phone_number" :disabled="!editing"></ion-input>
            </div>
            <div class="profile-item">
              <label class="profile-text" for='creditCard'>Credit Card:</label>
              <ion-input class="profile-input" name='creditCard' :value="user.creditCard" v-model="userProfile.credit_card" :disabled="!editing"></ion-input>
            </div>
          </div>
        </div>
        <ion-button class="profile-btn" v-if="!editing" @click="enableEditing()">Edit Profile</ion-button>
        <ion-button class="profile-btn" v-if="editing" @click="modifyProfile()">Save</ion-button>
        <ion-button class="profile-btn" v-if="editing" @click="showDeleteUserModal()">Delete Profile</ion-button>

        <ion-modal class="delete-profile" :is-open="isDeleteConfirmationModalOpen">
          <ion-content >
            <div class="delete-profile-content">
              <p>Are you sure you want to delete your profile?</p>
              <div class="delete-profile-btn-container">
                <ion-button @click="cancelDeleteProfile()">Cancel</ion-button>
                <ion-button @click="deleteProfile()">Confirm</ion-button>
              </div>
            </div>
          </ion-content>
        </ion-modal>

        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
