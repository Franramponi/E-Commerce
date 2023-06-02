<script>
import {IonPage} from '@ionic/vue'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage }
}



</script>
<template>
 <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Contacto</h2>
      <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>