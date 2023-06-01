<script>
import { IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem } from '@ionic/vue'
//import json from '../data/products.json'
import { storeToRefs } from 'pinia';
import { useLoginStore } from '../stores/login.js'

export default {
  components: { IonPage, IonContent, IonCardSubtitle, IonImg, IonButton, IonInput, IonItem },
  setup() {
		const store = useLoginStore();
		const { user } = storeToRefs(store);
		return { user };
	},
}

</script>

<template>
  <ion-page>
    <h2 class="title">{{ user.name }}</h2>
    <div>
      <div class="profile-item">
        <ion-input class="profile-input" label="Username:" :value="user.name" disabled></ion-input>
      </div>

    </div>
  </ion-page>
</template>
