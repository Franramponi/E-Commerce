<script>
import { IonPage, IonInput,IonTextarea, IonButton } from "@ionic/vue";
import Footer from "./Footer.vue";

export default {
  components: { Footer, IonPage, IonInput, IonTextarea, IonButton },
};
</script>
<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="contacto">
          <div class="map">
            <h2>Ubicación</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.611352560773!2d-58.400708425428334!3d-34.58869929692481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca988d30e3e1%3A0x13939a1f21db3a6c!2sAzcu%C3%A9naga%201800%2C%20C1126%20CABA!5e0!3m2!1ses-419!2sar!4v1686263637486!5m2!1ses-419!2sar"
              width="600"
              height="520"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <section class="seccion-contacto">
            <h2>Contacto</h2>
            <form class="form-contacto" action="/enviar" method="post">
              <ion-input class="form-contacto-input" type="text" label="Nombre" placeholder="Nombre Completo" />

              <ion-input class="form-contacto-input" type="email" label="Correo electrónico"  placeholder="tech@book.store" />

              <ion-input class="form-contacto-input" type="number" label="Telefono" placeholder="(00) 0000-0000"/>

              <ion-textarea class="form-contacto-texto" label="Mensaje" placeholder="Escribi tu mensaje aqui"></ion-textarea>

            <ion-button class="form-contacto-submit" type="submit">Enviar</ion-button>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

