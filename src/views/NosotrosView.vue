<script>
import { IonPage } from "@ionic/vue";
import Footer from "./Footer.vue";

export default {
  components: { Footer, IonPage },
};
</script>
<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <h2 class="title">Sobre Nosotros</h2>
        <div class="historia">
          <h3>Un poco de como surgio TechBook Store</h3>
          <p>
            En una ciudad pequeña, Alex, un apasionado de la tecnología y los
            libros, decidió crear un e-commerce llamado TechBooks. <br />
            Inspirado por la dificultad de encontrar productos de calidad en su
            área, Alex trabajó arduamente para establecer su tienda en línea.
            <br />
            Con una amplia selección de notebooks y libros, precios competitivos
            y un excelente servicio al cliente, TechBooks Store se convirtió en
            un éxito, satisfaciendo las necesidades de los amantes de la
            tecnología y la literatura en todo el país.
          </p>
        </div>
        <div class="compromis">
          <h3>Nuestro compromiso</h3>
          <p>
            Nuestro compromiso con los clientes es la piedra angular de nuestro
            e-commerce de notebooks y libros.
            Estamos aquí para servirles y asegurarnos de que tengan una
            experiencia de compra satisfactoria y confiable.
            Su satisfacción es nuestra máxima prioridad.
          </p>
        </div>
        <div class="mision">
            <h3>Mision</h3>
          <p>
            Nuestra misión en nuestro e-commerce de notebooks y libros es
            proporcionar a nuestros clientes una experiencia de compra en línea
            excepcional, ofreciendo una amplia selección de productos de alta
            calidad, excelencia en el servicio al cliente y un compromiso con la
            satisfacción del cliente. <br />
            Buscamos ser la primera opción para aquellos que buscan notebooks y
            libros, brindando un entorno seguro y confiable para adquirir
            productos tecnológicos y literarios.
          </p>
          <!-- 
            <div class="valor">

            <h4>Valores</h4>
            <p>Calidad <br> Integridad <br> Servicio al cliente <br> Diversidad y elección <br> Innovacion</p>
        
            </div> -->
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
:root {
	--primary: #FFC300;
}
.historia h3 {
  text-align: center;
  color: var(--primary);
}
.historia p {
  margin: 2% 25% 2% 25%;
  max-width: 50%;
  min-height: auto;
  overflow: hidden;
  color: var(--primary);

}
.compromis {
  float: left;
  max-width: 47%;
  min-height: 50%;
  overflow: hidden;
  color: var(--primary);
  margin: 1.5%;
}
.mision {
  float: right;
  max-width: 70%;
  min-height: 50%;
  overflow: hidden;
  margin: 0% 0% 1.5% 50%;
  color: var(--primary);
}
</style>