<script>
import {} from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js";
import { IonPage } from '@ionic/vue'
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage }
}

</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="row div-icons"  align="center">
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon icon="fa-solid fa-truck" class="home-icon"/>
            ENVÍO GRATIS
          </div>
          <div class="col-xs-12 col-sm-4 home-text" >
            <font-awesome-icon icon="fa-solid fa-credit-card" class="home-icon"/>
            TODAS LAS TARJETAS
          </div>
          <div class="col-xs-12 col-sm-4 home-text">
            <font-awesome-icon :icon="['fas', 'headset']" class="home-icon"/>
            SOPORTE 24HS
          </div>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="src/images/carousel/oferta_encic_pokemon.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_gamer.png" class="d-block w-100 carousel-img" alt="...">
            </div>
            <div class="carousel-item">
              <img src="src/images/carousel/oferta_hp.png" class="d-block w-100 carousel-img" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>

        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>

<style >

</style>