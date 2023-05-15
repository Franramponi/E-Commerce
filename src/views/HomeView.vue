<script>
import { IonPage } from '@ionic/vue'
export default {
  components: { IonPage }
}

</script>

<template>
  <ion-page>
    <div>
      <h2>ME ENCANTAN LOS LIBROS</h2>
      <P>Y LAS LAPTOPS</P>
      <RouterLink to="/cart">Cart</RouterLink>
      <span> | </span>
      <RouterLink to="/products">Products</RouterLink>
      <span> | </span>
      <RouterLink to="/profile">Profile</RouterLink>
      <span> | </span>
      <RouterLink to="/vendor">Vendor</RouterLink>
    </div>
  </ion-page>
</template>
